import { useMutation } from "@apollo/client";
import { useState } from "react";
import { DELETE_WORKSHEET_AND_RELATIONS } from "./data";

/**
 * Fetches questions for a worksheet while intelligently falling back to the network only
 * when the Apollo cache is incomplete.
 *
 * Behaviour:
 * 1. Run the query with the default `cache-first` policy (cheap ‑ uses cache when possible).
 * 2. Check how many questions came back. If that count equals `expectedNumQuestions`, the
 *    cache already holds everything we need, so we return the result immediately.
 * 3. If the cache is missing any of the expected questions, immediately re-execute the
 *    same query with `fetchPolicy: "network-only"` to bypass the cache and fetch a fresh,
 *    complete data set.
 *
 * In short, this helper lets callers "attempt cache, guarantee completeness" without having
 * to decide between `cache-first` and `network-only` every time they query for a list of
 * questions.
 */
export async function useLazyQuestionsQuery(
  client: any,
  query: any,
  variables: any,
  expectedNumQuestions: number
) {
  const response = await client.query({
    query,
    variables,
  });
  const { data } = response;
  const questions = data?.questions;
  if (questions?.length === expectedNumQuestions) {
    return response;
  } else {
    return client.query({
      query,
      variables,
      fetchPolicy: "network-only",
    });
  }
}

/**
 * Custom hook to handle deleting a worksheet along with its related join table entries.
 *
 * @param refetchWorksheets - Function to refetch worksheets after deletion.
 */
export function useDeleteWorksheet(refetchWorksheets: () => void) {
  const [deleteWorksheetMutation] = useMutation(DELETE_WORKSHEET_AND_RELATIONS);
  const [deletingWorksheet, setDeletingWorksheet] = useState<
    Record<number, boolean>
  >({});

  const deleteWorksheetById = (worksheetId: number) => {
    if (!window.confirm("Are you sure you want to delete this worksheet?")) {
      return;
    }
    setDeletingWorksheet((prev) => ({ ...prev, [worksheetId]: true }));
    deleteWorksheetMutation({
      variables: { id: worksheetId },
    })
      .then(() => {
        refetchWorksheets();
      })
      .catch((error) => {
        console.error("Error deleting worksheet:", error);
      })
      .finally(() => {
        setDeletingWorksheet((prev) => ({ ...prev, [worksheetId]: false }));
      });
  };

  return { deleteWorksheetById, deletingWorksheet };
}
