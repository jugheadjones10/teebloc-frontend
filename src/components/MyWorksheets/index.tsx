import { useApolloClient, useQuery, useMutation } from "@apollo/client";
import { useAuth } from "@clerk/clerk-react";
import { useEffect, useMemo, useState, memo } from "react";
import { GET_USER_WORKSHEETS, UPDATE_WORKSHEET_NAME } from "./data";
import { GET_QUESTIONS_BY_ID } from "../CreateWorksheet/data";
import PDFDownloadButton from "./pdfDownloadButton";
import FilterBar from "./filterBar";
import {
  useDeleteWorksheet,
  useLazyQuestionsQuery as fetchQuestions,
} from "./helpers";
import { useSearchParams } from "wouter-search";
import { showToast } from "../Toast";
import {
  GetQuestionsByIdQuery,
  GetUserWorksheetsQuery,
} from "../../__generated__/graphql";
import {
  createWorksheet,
  WorksheetApiError,
} from "../../api/worksheets";

const MemoPDFDownloadButton = memo(PDFDownloadButton);
const SIMILAR_QUESTION_CANDIDATE_COUNT = 50;
type QuestionById = GetQuestionsByIdQuery["questions"][number];
type QuestionImage = QuestionById["questionimgs"][number];
type Worksheet = GetUserWorksheetsQuery["worksheets"][number];
type WorksheetToQuestion = Worksheet["worksheets_to_questions"][number];
type WorksheetQuestionTopic =
  WorksheetToQuestion["question"]["question_topics"][number];

function sortQuestionImages(questionImages: QuestionImage[]) {
  const regex = /Q(\d+)-(\d+)\./;

  return [...questionImages].sort((a, b) => {
    const aMatch = a.questionimgname.match(regex);
    const bMatch = b.questionimgname.match(regex);

    if (aMatch && bMatch) {
      return parseInt(aMatch[2]) - parseInt(bMatch[2]);
    }

    return 0;
  });
}

export default function MyWorksheets() {
  const client = useApolloClient();
  const { getToken, userId } = useAuth();

  const [editingWorksheetId, setEditingWorksheetId] = useState<number | null>(
    null,
  );
  const [newWorksheetName, setNewWorksheetName] = useState("");
  const [saving, setSaving] = useState(false);
  // Map from worksheet id to whether we are currently creating similar worksheet for that worksheet
  const [creatingSimilarWorksheet, setCreatingSimilarWorksheet] = useState<
    Record<number, boolean>
  >({});

  const [updateWorksheetName] = useMutation(UPDATE_WORKSHEET_NAME);

  const {
    loading: w_loading,
    error: w_error,
    data: w_data,
    refetch: refetchWorksheets,
  } = useQuery(GET_USER_WORKSHEETS, { skip: !userId });

  // Use the custom delete hook for worksheets.
  const { deleteWorksheetById, deletingWorksheet } =
    useDeleteWorksheet(refetchWorksheets);

  const handleEditName = (worksheetId: number, currentName: string) => {
    setEditingWorksheetId(worksheetId);
    setNewWorksheetName(currentName);
  };

  const handleSaveName = (worksheetId: number) => {
    setSaving(true);
    updateWorksheetName({
      variables: {
        id: worksheetId,
        newName: newWorksheetName,
      },
    })
      .then(() => {
        setEditingWorksheetId(null);
      })
      .catch((error) => {
        console.error("Error updating worksheet name:", error);
      })
      .finally(() => {
        setSaving(false);
      });
  };

  // worksheetQuestions = getWorksheetQuestions(worksheetId)
  // questionsMapping = {} // this maps each question from original worksheet to similar question in new worksheet
  // for each question
  //  get image ids of question
  //  similarQuestion = call backend endpoint "/questions/similar/:imageids/:quantity" to get back most similar question // actually get back range, if top matching question already exists in worksheet,
  //  get next best matching question, etc.
  //  questionsMapping["originalQuestionId"] = similarQuestion
  //
  // Create worksheet with new questions
  const handleCreateSimilarWorksheet = async (worksheetId: number) => {
    const worksheet = worksheets.find((w) => w.id === worksheetId);
    if (!worksheet) return;

    const originalQuestionIds = worksheet.questions_order.length
      ? worksheet.questions_order
      : worksheet.worksheets_to_questions.map((wtq) => wtq.question_id);
    const originalQuestionIdSet = new Set(originalQuestionIds);
    const similarQuestionIds: string[] = [];
    const selectedQuestionIds = new Set<string>();

    setCreatingSimilarWorksheet((prev) => ({ ...prev, [worksheetId]: true }));

    try {
      const questionsResult = await fetchQuestions(
        client,
        GET_QUESTIONS_BY_ID,
        { ids: originalQuestionIds },
        originalQuestionIds.length,
      );
      const questionsById = new Map(
        questionsResult.data.questions.map((question: QuestionById) => [
          question.id,
          question,
        ]),
      );

      for (const questionId of originalQuestionIds) {
        const question = questionsById.get(questionId);
        const imageIds =
          question
            ? sortQuestionImages(question.questionimgs).map(
                (img) => img.questionimgid,
              )
            : [];

        if (imageIds.length === 0) {
          throw new Error(`Question ${questionId} has no question images.`);
        }

        const response = await fetch(
          `${import.meta.env.VITE_BACKEND_API}/questions/similar/${imageIds.join(
            ",",
          )}/${SIMILAR_QUESTION_CANDIDATE_COUNT}`,
          { method: "GET" },
        );

        if (!response.ok) {
          throw new Error(
            `Failed to fetch similar questions for ${questionId}.`,
          );
        }

        const candidateIds = (await response.json()) as string[];
        const similarQuestionId = candidateIds.find(
          (candidateId) =>
            !originalQuestionIdSet.has(candidateId) &&
            !selectedQuestionIds.has(candidateId),
        );

        if (!similarQuestionId) {
          throw new Error(
            `No replacement question found for question ${questionId}.`,
          );
        }

        similarQuestionIds.push(similarQuestionId);
        selectedQuestionIds.add(similarQuestionId);
      }

      const worksheetName = `Similar to ${worksheet.name}`;
      await createWorksheet({
        getToken,
        name: worksheetName,
        questionIds: similarQuestionIds,
      });

      await refetchWorksheets();
      showToast("Similar worksheet created.", "success");
    } catch (error) {
      console.error("Error creating similar worksheet:", error);
      showToast(
        error instanceof WorksheetApiError
          ? error.message
          : "Failed to create similar worksheet.",
        error instanceof WorksheetApiError &&
          error.code === "FREE_WORKSHEET_LIMIT_REACHED"
          ? "warning"
          : "error",
      );
    } finally {
      setCreatingSimilarWorksheet((prev) => ({
        ...prev,
        [worksheetId]: false,
      }));
    }
  };

  const worksheets = useMemo(() => w_data?.worksheets ?? [], [w_data]);
  const [filteredWorksheets, setFilteredWorksheets] = useState([...worksheets]);

  useEffect(() => {
    setFilteredWorksheets(worksheets);
  }, [worksheets]);

  const [sortedWorksheets, setSortedWorksheets] = useState([
    ...filteredWorksheets,
  ]);
  const [isChanged, setIsChanged] = useState(false);

  useEffect(() => {
    const nextSortedWorksheets = [...filteredWorksheets].sort((a, b) => {
      return new Date(b.created).getTime() - new Date(a.created).getTime();
    });

    setSortedWorksheets(nextSortedWorksheets);
    if (isChanged) {
      setIsChanged(false);
    }
  }, [filteredWorksheets, isChanged]);

  const filterBar = useMemo(() => {
    return (
      <FilterBar
        worksheets={worksheets}
        setFilteredWorksheets={setFilteredWorksheets}
        setIsChanged={setIsChanged}
      />
    );
  }, [worksheets]);

  // Highlight logic using wouter's useSearch
  const [searchParams] = useSearchParams();
  const highlightWorksheetId = searchParams.get("highlight")
    ? parseInt(searchParams.get("highlight")!, 10)
    : null;
  const [highlightActive, setHighlightActive] = useState(false);

  // Only trigger the highlight effect after data has loaded
  useEffect(() => {
    if (!w_loading && w_data && highlightWorksheetId) {
      // Check if the worksheet exists in the loaded data
      const worksheetExists = w_data.worksheets.some(
        (w) => w.id === highlightWorksheetId,
      );

      if (worksheetExists) {
        setHighlightActive(true);
        const element = document.getElementById(
          `worksheet-${highlightWorksheetId}`,
        );
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "center" });
          // Remove the highlight after 3 seconds
          setTimeout(() => {
            setHighlightActive(false);
          }, 3000);
        }
      }
    }
  }, [w_loading, w_data, highlightWorksheetId]);

  return (
    <>
      <div className="flex flex-col gap-12 mx-8">
        {w_loading && (
          <span className="loading loading-spinner loading-lg"></span>
        )}
        {w_error && <p>Error loading worksheets: {w_error.message}</p>}
        {worksheets.length > 0 && filterBar}
        {sortedWorksheets.map((w: Worksheet) => {
          // Determine if this worksheet should be highlighted.
          const isHighlighted =
            highlightActive && highlightWorksheetId === w.id;
          const levels = new Set<string>();
          const assessments = new Set<string>();
          const topics = new Set<string>();

          w.worksheets_to_questions.forEach((wtq: WorksheetToQuestion) => {
            wtq.question.question_topics.forEach((qt: WorksheetQuestionTopic) =>
              topics.add(qt.topic.topicname),
            );
            levels.add(wtq.question.level.level);
            assessments.add(wtq.question.assessment.assessmentname);
          });

          return (
            <div
              key={w.id}
              id={`worksheet-${w.id}`}
              className={`card bg-base-100 shadow-xl border-dashed mb-4 ${
                isHighlighted
                  ? "border-2 border-red-500 animate-[pulse_0.5s_ease-in-out_infinite]"
                  : "border-2 border-sky-500"
              } bg-sky-100`}
            >
              <div className="card-body">
                {editingWorksheetId === w.id ? (
                  <input
                    placeholder="New worksheet name"
                    type="text"
                    value={newWorksheetName}
                    onChange={(e) => setNewWorksheetName(e.target.value)}
                    className="input"
                  />
                ) : (
                  <h2 className="card-title">{w.name}</h2>
                )}
                <p className="text-sm text-gray-500">
                  Created on: {new Date(w.created).toLocaleDateString()}
                </p>
                <p>{w.worksheets_to_questions.length} questions</p>
                <div className="flex flex-wrap gap-2">
                  {[...levels].map((level) => (
                    <span
                      key={level}
                      className="text-blue-800 bg-blue-200 badge"
                    >
                      {level}
                    </span>
                  ))}
                  {[...assessments].map((assessment) => (
                    <span
                      key={assessment}
                      className="text-green-800 bg-green-200 badge"
                    >
                      {assessment}
                    </span>
                  ))}
                  {[...topics].map((topic) => (
                    <span
                      key={topic}
                      className="text-yellow-800 bg-yellow-200 badge"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
                <div className="justify-end card-actions">
                  {editingWorksheetId === w.id ? (
                    <button
                      className="btn btn-success"
                      onClick={() => handleSaveName(w.id)}
                      disabled={saving}
                    >
                      {saving ? (
                        <span className="loading loading-spinner"></span>
                      ) : (
                        "Save"
                      )}
                    </button>
                  ) : (
                    <button
                      className="btn btn-secondary"
                      onClick={() => handleEditName(w.id, w.name)}
                    >
                      Edit name
                    </button>
                  )}
                  <button
                    className="btn btn-primary"
                    disabled={creatingSimilarWorksheet[w.id]}
                    onClick={() => handleCreateSimilarWorksheet(w.id)}
                  >
                    {creatingSimilarWorksheet[w.id] ? (
                      <span className="loading loading-spinner"></span>
                    ) : (
                      "Create similar worksheet"
                    )}
                  </button>
                  <MemoPDFDownloadButton worksheet={w} client={client} />
                  <button
                    className="btn btn-error"
                    disabled={deletingWorksheet[w.id]}
                    onClick={() => deleteWorksheetById(w.id)}
                  >
                    {deletingWorksheet[w.id] ? (
                      <span className="loading loading-spinner"></span>
                    ) : (
                      "Delete worksheet"
                    )}
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
