import {
  GetQuestionsQuery,
  GetQuestionsByIdQuery,
} from "../../__generated__/graphql";
import Question from "../Question";
import { cartItemsVar } from "../CreateWorksheet/data";
import { useState, useEffect } from "react";
import { useReactiveVar } from "@apollo/client";

export type QuestionType = GetQuestionsQuery["questions"][0];
export type QuestionByIdType = GetQuestionsByIdQuery["questions"][0];

export default function Questions({
  questions,
  loading,
  onLoadMore,
}: {
  questions: QuestionType[] | QuestionByIdType[];
  loading: boolean;
  onLoadMore: () => void;
}) {
  const cartItems = useReactiveVar(cartItemsVar);
  const [similarQuestionsPressed, setSimilarQuestionsPressed] = useState(false);
  const [similarQuestionsFetched, setSimilarQuestionsFetched] = useState<
    string[]
  >([]);
  const [canScrollMain, setCanScrollMain] = useState(true);

  const [estimatedTimes, setEstimatedTimes] = useState<number[]>([]);
  const [actualTimes, setActualTimes] = useState<number[]>([]);
  const [result, setResult] = useState<{ [key: string]: number }>({});
  const alpha = 0.5;
  const initialEstimatedTime = 6000; // initial estimate in milliseconds

  // use exponential smoothing to estimate the time
  function getEstimatedTime(id: string): number {
    if (result && result[id]) return result[id];
    if (estimatedTimes.length === 0 || actualTimes.length === 0) {
      setEstimatedTimes([initialEstimatedTime]);
      setResult((prev) => ({
        ...prev,
        [id]: initialEstimatedTime,
      }));
      return initialEstimatedTime;
    }
    const lastEstimatedTime = estimatedTimes[estimatedTimes.length - 1];
    const newEstimatedTime =
      alpha * actualTimes[actualTimes.length - 1] +
      (1 - alpha) * lastEstimatedTime;
    setEstimatedTimes([...estimatedTimes, newEstimatedTime]);
    setResult((prev) => ({
      ...prev,
      [id]: newEstimatedTime,
    }));
    return newEstimatedTime;
  }

  useEffect(() => {
    if (!canScrollMain) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [canScrollMain]);

  return (
    <>
      <div className="flex flex-col gap-8">
        {questions.map((q) => (
          <Question
            key={q.id}
            q={q}
            isInCart={cartItems.includes(q.id)}
            // similarQuestionsPressed and setSimilarQuestionsPressed are required
            // to disable the similar questions button on all questions
            // when it is pressed for one question
            similarQuestionsPressed={similarQuestionsPressed}
            setSimilarQuestionsPressed={setSimilarQuestionsPressed}
            similarQuestionsFetched={similarQuestionsFetched}
            setSimilarQuestionsFetched={setSimilarQuestionsFetched}
            actualTimes={actualTimes}
            setActualTimes={setActualTimes}
            getEstimatedTime={getEstimatedTime}
            setCanScrollMain={setCanScrollMain}
          />
        ))}
      </div>
      {questions.length > 0 && (
        <button
          className="mb-16 btn btn-primary"
          onClick={onLoadMore}
          type="button"
          disabled={loading}
        >
          {loading && <span className="loading loading-spinner"></span>}
          {loading ? "Loading" : "Load more"}
        </button>
      )}
    </>
  );
}
