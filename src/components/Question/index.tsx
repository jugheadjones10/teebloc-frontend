import { cartItemsVar } from "../CreateWorksheet/data";
import { QuestionByIdType, QuestionType } from "../Questions";
import { useLazyQuestionsQuery } from "../MyWorksheets/helpers";
import { GET_QUESTIONS_BY_ID } from "../CreateWorksheet/data";
import { useApolloClient } from "@apollo/client"; // <-- add useLazyQuery
import { useState } from "react";
import { memo } from "react";
import posthog from "posthog-js";
import { Link } from "wouter";
import Overlay from "./overlay";
import { useWorksheetsMapping } from "../../context/WorksheetsMappingContext";

function sortQuestionImages(questionimgs: QuestionType["questionimgs"]) {
  const copiedQuestionImages = JSON.parse(JSON.stringify(questionimgs));
  return copiedQuestionImages.sort((a, b) => {
    const regex = /Q(\d+)-(\d+)\./;

    // Question number can be 23 or 45-1 or 45-2, etc
    const aMatch = a.questionimgname.match(regex);
    const bMatch = b.questionimgname.match(regex);

    if (aMatch && bMatch) {
      return aMatch[2] - bMatch[2];
    } else {
      return 0;
    }
  });
}

const Question = memo(function Question({
  q,
  isInCart,
  similarQuestionsPressed,
  setSimilarQuestionsPressed,
  similarQuestionsFetched = [],
  setSimilarQuestionsFetched = () => {},
  actualTimes = [],
  setActualTimes = () => {},
  getEstimatedTime = (id: string) => 6000, // default estimate
  setCanScrollMain = () => {},
  canShowSimilarQuestions = true,
}: {
  q: QuestionType | QuestionByIdType;
  isInCart: boolean;
  similarQuestionsPressed: boolean;
  setSimilarQuestionsPressed: (pressed: boolean) => void;
  similarQuestionsFetched?: string[];
  setSimilarQuestionsFetched?: (fetched: string[]) => void;
  actualTimes?: number[];
  setActualTimes?: (times: number[]) => void;
  getEstimatedTime?: (id: string) => number;
  setCanScrollMain?: (canScroll: boolean) => void;
  canShowSimilarQuestions?: boolean;
}) {
  const client = useApolloClient();
  const [showSimilarQuestions, setShowSimilarQuestions] = useState(false);
  const [similarQuestionsLoading, setSimilarQuestionsLoading] = useState(false);
  const [similarQuestions, setSimilarQuestions] = useState<QuestionByIdType[]>(
    []
  );
  const worksheetsMapping = useWorksheetsMapping();
  const worksheets = worksheetsMapping[q.id] || [];
  const [numberOfSimilarQuestionsToShow, setNumberOfSimilarQuestionsToShow] =
    useState<number>(10);

  async function getSimilarQuestions() {
    if (similarQuestionsPressed) return;
    setSimilarQuestionsPressed(true);
    setSimilarQuestionsLoading(true);
    const start = performance.now();
    const response = await fetch(
      `${import.meta.env.VITE_BACKEND_API}/questions/similar/${q.questionimgs
        .map((img) => img.questionimgid)
        .join(",")}/${numberOfSimilarQuestionsToShow}`,
      {
        method: "GET",
      }
    );

    if (!response.ok) {
      alert("Failed to fetch similar questions. Please try again later.");
      setSimilarQuestionsLoading(false);
      return;
    }
    const similarQuestionsIds = await response.json();
    const similarQuestionsData = await useLazyQuestionsQuery(
      client,
      GET_QUESTIONS_BY_ID,
      {
        ids: similarQuestionsIds,
      },
      similarQuestionsIds.length
    );
    const end = performance.now();

    if (!similarQuestionsFetched.includes(q.id)) {
      setSimilarQuestionsFetched([...similarQuestionsFetched, q.id]);
      setActualTimes([...actualTimes, end - start]);
    }

    setShowSimilarQuestions(true);
    setCanScrollMain(false);
    setSimilarQuestions(similarQuestionsData.data.questions);
    setSimilarQuestionsLoading(false);
    setSimilarQuestionsPressed(false);

    posthog.capture("question_clicked_see_similar", {
      questionId: q.id,
      topicNames: q.question_topics.map((qt) => qt.topic.topicname),
    });
  }

  function handleCloseOverlay() {
    setShowSimilarQuestions(false);
    setNumberOfSimilarQuestionsToShow(10);
    setCanScrollMain(true);
  }

  return (
    <div
      key={q.id}
      className="w-3/5 border-2 border-dashed shadow-xl card min-w-96 border-sky-500 bg-sky-100"
    >
      {sortQuestionImages(q.questionimgs).map((qi) => {
        return (
          <figure key={qi.questionimgid}>
            <img
              src={`${import.meta.env.VITE_BACKEND_API}/images/question/${
                qi.questionimgid
              }`}
              className="w-full"
              alt={qi.questionimgname}
            />
          </figure>
        );
      })}

      <div className="card-body">
        <div className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-0.5">
          <div className="text-gray-600">Level:</div>
          <div>{q.level.level}</div>
          <div className="text-gray-600">Paper:</div>
          <div>{q.paper.paper}</div>
          <div className="text-gray-600">Assessment:</div>
          <div>{q.assessment.assessmentname}</div>
          <div className="text-gray-600">School:</div>
          <div>{q.school.schoolname}</div>
        </div>

        <div className="mt-2 text-gray-600">Topics:</div>
        {q.question_topics.map((qt) => {
          return (
            <div
              key={qt.topic.topicname}
              className="inline badge badge-outline"
            >
              {qt.topic.topicname}
            </div>
          );
        })}

        {worksheets.length > 0 && (
          <div className="mt-2 text-sm text-gray-700">
            This question was used in:{" "}
            {worksheets.map((ws, index) => (
              <span key={ws.id}>
                <Link
                  href={`/worksheets?highlight=${ws.id}`}
                  className="text-blue-500 underline"
                >
                  {ws.name}
                </Link>
                {index < worksheets.length - 1 && ", "}
              </span>
            ))}
          </div>
        )}

        {canShowSimilarQuestions && (
          <Overlay isOpen={showSimilarQuestions} onClose={handleCloseOverlay}>
            <div className="flex flex-col gap-4">
              <button
                className="sticky top-0 self-end btn btn-sm btn-circle btn-ghost"
                onClick={handleCloseOverlay}
              >
                ✕
              </button>
              {similarQuestions.map((sq) => (
                <Question
                  key={sq.id}
                  q={sq}
                  isInCart={cartItemsVar().includes(sq.id)}
                  similarQuestionsPressed={similarQuestionsPressed}
                  setSimilarQuestionsPressed={setSimilarQuestionsPressed}
                  canShowSimilarQuestions={false}
                />
              ))}
              {similarQuestions.length > 0 && (
                <button
                  className="mb-16 btn btn-primary"
                  onClick={() => {
                    setNumberOfSimilarQuestionsToShow((prev) => prev + 10);
                    getSimilarQuestions();
                  }}
                  disabled={similarQuestionsLoading}
                  type="button"
                >
                  {similarQuestionsLoading && (
                    <span className="loading loading-spinner"></span>
                  )}
                  {similarQuestionsLoading ? "Loading" : "Load more"}
                </button>
              )}
            </div>
          </Overlay>
        )}

        <div className="justify-end gap-4 card-actions">
          {canShowSimilarQuestions && (
            <button
              onClick={getSimilarQuestions}
              disabled={similarQuestionsPressed}
              className="relative overflow-hidden btn btn-primary"
            >
              {similarQuestionsLoading && (
                <span
                  className="absolute top-0 left-0 z-0 h-full transition-all duration-500 bg-yellow-200"
                  style={{
                    width: "100%",
                    transform: "scaleX(1)",
                    animation: `fillBar ${(
                      getEstimatedTime(q.id) * 1e-3
                    ).toFixed(1)}s linear infinite`,
                    transformOrigin: "left",
                    pointerEvents: "none",
                  }}
                />
              )}
              <style>
                {`
                  @keyframes fillBar {
                    0% { width: 0; }
                    100% { width: 100%; }
                  }
                `}
              </style>
              <span className="relative z-10 flex items-center gap-2">
                {similarQuestionsLoading && (
                  <span className="loading loading-spinner"></span>
                )}
                {similarQuestionsLoading ? "Loading" : "See similar questions"}
              </span>
            </button>
          )}
          {isInCart ? (
            // {cartItems.includes(q.id) ? (
            <button
              onClick={
                () => cartItemsVar(cartItemsVar().filter((id) => id !== q.id))
                //   cartItemsVar(cartItems.filter((id) => id !== q.id))
              }
              className="btn"
            >
              Remove from worksheet
            </button>
          ) : (
            <button
              onClick={() => {
                cartItemsVar([...cartItemsVar(), q.id]);
                posthog.capture("question_added_to_worksheet", {
                  questionId: q.id,
                  topicNames: q.question_topics.map((qt) => qt.topic.topicname),
                });
              }}
              className="btn btn-primary"
            >
              Add to worksheet
            </button>
          )}
        </div>
      </div>
    </div>
  );
});

export default Question;
