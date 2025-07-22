import { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { useCustomWorksheetAnswers } from "@/hooks/useCustomWorksheetAnswers";
import {
  GET_CUSTOM_ANSWER,
} from "./data";
import { EMPTY_HTML } from "./helpers";
import MCQAnswerSelector from "./MCQSelector";
import { SimpleEditor } from "@/components/tiptap-templates/simple/simple-editor";

export default function Question({
  index,
  userId,
  questionIds,
  worksheetId,
  questionData,
  questionPartsData,
  setQuestionPartsData,
} : { 
  index: number,
  userId: string,
  questionIds: string[],
  worksheetId: string,
  questionData: Record<string, any>,
  questionPartsData: Record<string, string[]>,
  setQuestionPartsData: React.Dispatch<React.SetStateAction<Record<string, string[]>>>,
}) {
  const questionId = questionIds[index];
  const question = questionData[questionId];
  const [getCustomWorksheetAnswers, setCustomWorksheetAnswers] = useCustomWorksheetAnswers();

  const [questionPartsLoading, setQuestionPartsLoading] =
    useState<boolean>(false);

  const { loading, data, refetch } = useQuery(GET_CUSTOM_ANSWER, {
    variables: {
      authorId: userId,
      questionId: questionId,
    },
    fetchPolicy: "network-only", // Intentionally bypass cache for fresh data
  });

  useEffect(() => {
    // Fetch question parts if not already loaded
    if (questionPartsData[questionId] === undefined && question.paper !== 1) {
      setQuestionPartsLoading(true);
      fetch(`${import.meta.env.VITE_BACKEND_API}/getQuestionParts`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...questionData[questionId], questionId }),
      })
        .then((response) => response.json())
        .then((data) => {
          setQuestionPartsData((prevData) => ({
            ...prevData,
            [questionId]: data,
          }));
        })
        .finally(() => {
          setQuestionPartsLoading(false);
        });
    }
    // Refetch custom answer data when questionId changes
    refetch({
      authorId: userId,
      questionId: questionId,
    });
  }, [questionId]);

  // This is needed to refresh the custom answer data to keep its initial values
  // in sync with the latest data saved to the DB.
  const [refreshCustomAnswer, setRefreshCustomAnswer] = useState(false);
  useEffect(() => {
    if (refreshCustomAnswer) {
      refetch({
        authorId: userId,
        questionId: questionId,
      }).then(() => {
        setCustomWorksheetAnswers([worksheetId!, "refresh"], undefined);
        setRefreshCustomAnswer(false);
      });
    }
  }, [refreshCustomAnswer]);

  const customAnswerExists = (data?.custom_answers_for_worksheets ?? []).length > 0;
  const customAnswerData = data?.custom_answers_for_worksheets[0]?.answer || {};

  setCustomWorksheetAnswers([worksheetId!, "questionIds"], questionIds);
  setCustomWorksheetAnswers(
    [worksheetId!, questionId!, "operation"],
    customAnswerExists ? "update" : "insert"
  );

  const [customAnswer, setCustomAnswer] = useState(getCustomWorksheetAnswers([worksheetId!, questionId!]));

  const getCustomAnswerUpdater = (part: string, type: string) => {
    return (value: string, isUpToDate: boolean = false) => {
      if (getCustomWorksheetAnswers([worksheetId!, "refresh"])) setRefreshCustomAnswer(true);
      setCustomAnswer((prev: any) => ({
        ...prev,
        [part]: {
          ...(prev?.[part] || {}),
          [type]: value,
        },
        isUpToDate: isUpToDate,
        operation: customAnswerExists ? "update" : "insert",
      }));
    };
  };

  useEffect(() => {
    setCustomWorksheetAnswers([worksheetId!, questionId!], customAnswer);
  }, [customAnswer]);

  if (loading || !data) {
    return (
      <div className="flex items-center justify-center h-screen">
        <span className="loading loading-spinner"></span>
        {"Loading custom answer..."}
      </div>
    );
  }

  return (
    <div key={questionId} className="flex flex-row gap-2">
      <h3 className="text-4xl font-semibold text-center">{index + 1}</h3>
      <div key={index} className="grid grid-cols-2 gap-10">
        <div className="flex flex-col">
          {question.questionimgIds.map((id: number, imgIndex: number) => (
            <img
              key={imgIndex}
              src={`${
                import.meta.env.VITE_BACKEND_API
              }/images/question/${id}`}
              alt={`Question ${index} Image ${imgIndex}`}
              className="max-w-full"
            />
          ))}
        </div>
        <div className="flex flex-col">
          <h2 className="mb-2 font-bold">Original Answer</h2>
          {question.answerimgIds.map((id: number, imgIndex: number) => (
            <img
              key={imgIndex}
              src={`${import.meta.env.VITE_BACKEND_API}/images/answer/${id}`}
              alt={`Question ${index} Answer Image ${imgIndex}`}
              className={`${
                question.paper === 1 ? "max-w-[12rem]" : "max-w-md"
              }`}
            />
          ))}
          {question.paper === 1 ? (
            <div className="flex flex-col">
              <h2 className="mt-4 mb-2 font-bold">Your Answer</h2>
              <MCQAnswerSelector
                initialValue={customAnswerData["option"]?.["answer"] || ""}
                updateCustomAnswer={getCustomAnswerUpdater("option", "answer")}
              />
              <div className="flex flex-row mt-4 mb-2">
                <h2 className="font-bold">Explanation</h2>
                <div className="ml-2 text-base text-gray-500">(Optional)</div>
              </div>
              <SimpleEditor
                initialContent={customAnswerData["option"]?.["explanation"] || EMPTY_HTML}
                updateCustomAnswer={getCustomAnswerUpdater("option", "explanation")}
              />
            </div>
          ) : questionPartsLoading ? (
            <div className="flex items-center justify-center h-32">
              <span className="loading loading-spinner"></span>
              {"Loading question parts..."}
            </div>
          ) : (questionPartsData[questionId] && 
            <div className="flex flex-col mt-3">
              {questionPartsData[questionId].length > 0 ? (
                questionPartsData[questionId].map(
                  (part: string, partIndex: number) => (
                    <div key={partIndex} className="flex flex-col mb-4">
                      <h2 className="mt-4 mb-2 font-bold">{`Answer for ${part}`}</h2>
                      <SimpleEditor
                        initialContent={customAnswerData[part]?.["answer"] || EMPTY_HTML}
                        updateCustomAnswer={getCustomAnswerUpdater(part, "answer")}
                      />
                      <div className="flex flex-row mt-4 mb-2">
                        <h2 className="font-bold">{`Explanation for ${part}`}</h2>
                        <div className="ml-2 text-base text-gray-500">
                          (Optional)
                        </div>
                      </div>
                      <SimpleEditor
                        initialContent={customAnswerData[part]?.["explanation"] || EMPTY_HTML}
                        updateCustomAnswer={getCustomAnswerUpdater(part, "explanation")}
                      />
                    </div>
                  )
                )
              ) : ( // case when no parts are available
                <div className="flex flex-col">
                  <h2 className="mt-4 mb-2 font-bold">Answer</h2>
                  <SimpleEditor
                    initialContent={customAnswerData["main"]?.["answer"] || EMPTY_HTML}
                    updateCustomAnswer={getCustomAnswerUpdater("main", "answer")}
                  />
                  <div className="flex flex-row mt-4 mb-2">
                    <h2 className="font-bold">Explanation</h2>
                    <div className="ml-2 text-base text-gray-500">
                      (Optional)
                    </div>
                  </div>
                  <SimpleEditor
                    initialContent={customAnswerData["main"]?.["explanation"] || EMPTY_HTML}
                    updateCustomAnswer={getCustomAnswerUpdater("main", "explanation")}
                  />
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
