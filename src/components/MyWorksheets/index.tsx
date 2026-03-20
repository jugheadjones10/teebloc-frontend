import { useApolloClient, useQuery, useMutation } from "@apollo/client";
import { useUser } from "@clerk/clerk-react";
import { useEffect, useMemo, useState, memo } from "react";
import { GET_USER_WORKSHEETS, UPDATE_WORKSHEET_NAME } from "./data";
import { useIsAdmin } from "../../hooks/useIsAdmin";
import PDFDownloadButton from "./pdfDownloadButton";
import FilterBar from "./filterBar";
import { useDeleteWorksheet } from "./helpers";
import { useSearchParams } from "wouter-search";
import { useLocation } from "wouter";

const MemoPDFDownloadButton = memo(PDFDownloadButton);

export default function MyWorksheets() {
  const client = useApolloClient();
  const { user } = useUser();
  const isAdmin = useIsAdmin();
  const [location, setLocation] = useLocation();

  const [editingWorksheetId, setEditingWorksheetId] = useState<number | null>(
    null
  );
  const [newWorksheetName, setNewWorksheetName] = useState("");
  const [saving, setSaving] = useState(false);

  // Admin: allow viewing another user's worksheets.
  const [worksheetUserId, setWorksheetUserId] = useState(user?.id || "");
  const [userIdInput, setUserIdInput] = useState(user?.id || "");

  const [updateWorksheetName] = useMutation(UPDATE_WORKSHEET_NAME);

  const {
    loading: w_loading,
    error: w_error,
    data: w_data,
    refetch: refetchWorksheets,
  } = useQuery(GET_USER_WORKSHEETS, {
    variables: {
      userid: worksheetUserId,
    },
  });

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

  const worksheets = w_data?.worksheets || [];
  const [filteredWorksheets, setFilteredWorksheets] = useState([...worksheets]);

  useEffect(() => {
    setFilteredWorksheets(w_data?.worksheets || []);
  }, [w_data]);

  const [sortedWorksheets, setSortedWorksheets] = useState([
    ...filteredWorksheets,
  ]);
  const [isChanged, setIsChanged] = useState(false);

  useEffect(() => {
    if (isChanged) {
      const sortedWorksheets = [...filteredWorksheets].sort((a, b) => {
        return new Date(b.created).getTime() - new Date(a.created).getTime();
      });
      setSortedWorksheets(sortedWorksheets);
      setIsChanged(false);
      console.log("Sorted worksheets:", sortedWorksheets);
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
        (w: any) => w.id === highlightWorksheetId
      );

      if (worksheetExists) {
        setHighlightActive(true);
        const element = document.getElementById(
          `worksheet-${highlightWorksheetId}`
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
        {/* Admin-only UI: Filter worksheets by user id */}
        {isAdmin && (
          <div className="flex items-center gap-2 admin-filter">
            <input
              type="text"
              className="input"
              placeholder="Enter user ID"
              value={userIdInput}
              onChange={(e) => setUserIdInput(e.target.value)}
            />
            <button
              className="btn btn-secondary"
              onClick={() => setWorksheetUserId(userIdInput)}
            >
              Load Worksheets
            </button>
          </div>
        )}

        {w_loading && (
          <span className="loading loading-spinner loading-lg"></span>
        )}
        {w_error && <p>Error loading worksheets: {w_error.message}</p>}
        {worksheets.length > 0 && filterBar}
        {sortedWorksheets.map((w: any) => {
          // Determine if this worksheet should be highlighted.
          const isHighlighted =
            highlightActive && highlightWorksheetId === w.id;
          const levels = new Set<string>();
          const assessments = new Set<string>();
          const topics = new Set<string>();

          w.worksheets_to_questions.forEach((wtq: any) => {
            wtq.question.question_topics.forEach((qt: any) =>
              topics.add(qt.topic.topicname)
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
                    onClick={() => setLocation(`/author?worksheetId=${w.id}`)}
                  >
                    Write custom answers
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
                      "Delete Worksheet"
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
