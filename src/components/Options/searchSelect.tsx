import { useState, useEffect, useRef } from "react";

export default function SearchSelect({
  searchQuery,
  setSearchQuery,
  setQuestionIdsFromSearch,
  showCondition = true,
}: {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  setQuestionIdsFromSearch: (ids: string[]) => void;
  showCondition?: boolean;
}) {
  const [searchError, setSearchError] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        inputRef.current?.focus();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const tooltipText =
    "Describe the question type you would like to search for across our database of questions. " +
    'For example: "Questions that test reading of vernier caliper measurements". ' +
    "Use the below options to narrow the search results.";

  async function fetchSearchResults() {
    if (searchQuery.trim().length === 0) {
      setQuestionIdsFromSearch([]);
      setSearchError("Search query cannot be empty");
      return;
    }
    setSearchError("");
    const NUM_QUESTION_IDS = 400;

    const response = await fetch(
      `${import.meta.env.VITE_BACKEND_API}/getQuestionIdsBySearch`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ searchQuery, quantity: NUM_QUESTION_IDS }),
      }
    );
    const data = await response.json();
    if (!response.ok) {
      console.error("Error fetching search results:", data);
      setSearchError(
        data.error || "An error occurred when fetching search results"
      );
      return;
    }
    setQuestionIdsFromSearch(data.ids);
  }

  return (
    <div className="flex flex-row my-2">
      <div className="flex flex-row self-start flex-shrink-0 gap-2 w-40 mt-[6px]">
        <label className="font-medium">Search</label>
        <div className="tooltip tooltip-right" data-tip={tooltipText}>
          <button>
            <svg
              className="mt-[3px] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              height="20px"
              viewBox="0 -960 960 960"
              width="20px"
              fill="#1f1f1f"
            >
              <path
                d="M440-280h80v-240h-80v240Zm40-320q17 0 28.5-11.5T520-640q0-17-11.5-28.5T480-680q-17
                0-28.5 11.5T440-640q0 17 11.5 28.5T480-600Zm0 520q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83
                31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54
                54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"
              />
            </svg>
            {}
          </button>
        </div>
      </div>
      {showCondition && (
        <div className="flex flex-row items-center gap-2">
          <label
            className="input flex flex-row items-center w-80 gap-2 h-9"
            style={{ outline: "none", borderColor: "#d1d5db" }}
          >
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input
              type="search"
              className="grow"
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                if (e.target.value.trim().length === 0) {
                  setQuestionIdsFromSearch([]);
                }
              }}
              ref={inputRef}
            />
          </label>
          <button
            className="btn btn-primary ml-2 px-2 min-h-8 h-9"
            onClick={() => fetchSearchResults()}
            type="button"
          >
            Search
          </button>
          {searchError && (
            <div className="text-red-500 text-sm  ml-2">{searchError}</div>
          )}
        </div>
      )}
    </div>
  );
}
