import { useUser } from "@clerk/clerk-react";
import { useIsAdmin } from "../../hooks/useIsAdmin";
import { useCustomWorksheetAnswers } from "@/hooks/useCustomWorksheetAnswers";
import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import {
  GET_WORKSHEET_BY_ID,
  GET_QUESTION_IMAGES,
} from "./data";
import Question from "./Question";

type QuestionData = {
  questionimgIds: number[];
  answerimgIds: number[];
  paper: number;
};

export default function CustomWorksheetAnswers() {
  const { user } = useUser();
  const isAdmin = useIsAdmin();

  const searchParams = new URLSearchParams(window.location.search);
  const worksheetId = searchParams.get("worksheetId");

  const {
    loading: worksheetLoading,
    data: worksheetData,
    error: worksheetError,
  } = useQuery(GET_WORKSHEET_BY_ID, {
    variables: { worksheetId: parseInt(worksheetId!, 10) },
  });

  const worksheet = worksheetData?.worksheets[0];
  const worksheetCreator = worksheet?.creator;

  const questionIds = worksheet?.questions_order || [];
  const {
    loading: questionImagesLoading,
    data: questionImagesData,
    error: questionImagesError,
  } = useQuery(GET_QUESTION_IMAGES, {
    variables: {
      ids: questionIds,
    },
  });

  const [questionData, setQuestionData] = useState<
    Record<string, QuestionData>
  >({});
  const [questionPartsData, setQuestionPartsData] = useState<
    Record<string, string[]>
  >({});

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [getCustomWorksheetAnswers, setCustomWorksheetAnswers] = useCustomWorksheetAnswers();

  setCustomWorksheetAnswers([worksheetId!, "questionIds"], questionIds);

  const handleTransition = (toIndex: number) => {
    const questionId = questionIds[currentQuestionIndex];
    const saved = getCustomWorksheetAnswers([worksheetId!, questionId, "isUpToDate"]);
    if (!saved) {
      setCustomWorksheetAnswers([worksheetId!, questionId, "useLocalStorage"], true);
    }
    setCurrentQuestionIndex(toIndex);
  };

  useEffect(() => {
    if (questionImagesData) {
      // Restructure question images data
      const data: Record<string, QuestionData> = {};
      questionImagesData.questions.forEach((question: any) => {
        data[question.id] = {
          questionimgIds: [...question.questionimgs]
            .sort((a: any, b: any) => {
              const regex = /Q(\d+)-(\d+)\./;
              const aMatch = a.questionimgname.match(regex);
              const bMatch = b.questionimgname.match(regex);
              if (aMatch && bMatch) {
                return aMatch[2] - bMatch[2];
              } else {
                return 0;
              }
            })
            .map((img: any) => img.questionimgid),
          answerimgIds: [...question.answerimgs]
            .sort((a: any, b: any) => {
              const regex = /Q(\d+)-(\d+)\./;
              const aMatch = a.answerimgname.match(regex);
              const bMatch = b.answerimgname.match(regex);
              if (aMatch && bMatch) {
                return aMatch[2] - bMatch[2];
              } else {
                return 0;
              }
            })
            .map((img: any) => img.answerimgid),
          paper: question.paper.paper,
        };
      });
      setQuestionData(data);
    }
  }, [questionImagesData]);

  if (worksheetData && user?.id !== worksheetCreator && !isAdmin) {
    // Only allow the creator or admin to view
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <div>You are not authorized to view this worksheet.</div>
      </div>
    );
  }

  if (worksheetLoading || worksheetError || !worksheetData) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        {worksheetLoading ? (
          <div className="flex items-center gap-2">
            <span className="loading loading-spinner"></span>
            {"Loading worksheet..."}
          </div>
        ) : (
          worksheetError && (
            <div className="text-red-500">
              Error loading worksheet: {worksheetError.message}
            </div>
          )
        )}
      </div>
    );
  }

  if (questionImagesLoading || questionImagesError || !questionImagesData) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        {questionImagesLoading ? (
          <div className="flex items-center gap-2">
            <span className="loading loading-spinner"></span>
            {"Loading question images..."}
          </div>
        ) : (
          questionImagesError && (
            <div className="text-red-500">
              Error loading question images: {questionImagesError.message}
            </div>
          )
        )}
      </div>
    );
  }

  return (
    <div className="flex flex-col mx-6">
      {[...Array(questionIds.length)].map((_, index) => (
        questionData[questionIds[index]] && (
        <Question
          index={index}
          userId={user?.id || ""}
          question={questionData[questionIds[index]]}
          questionId={questionIds[index]}
          worksheetId={worksheetId!}
          questionPartsData={questionPartsData}
          setQuestionPartsData={setQuestionPartsData}
          currentQuestionIndex={currentQuestionIndex}
        />
      )))}
      <div className="relative bottom-4 max-w-[80%] mt-20 mx-auto overflow-x-auto join">
        {[...Array(questionIds.length)].map((_, index) => (
          <button
            key={index}
            className={`join-item btn ${
              index === currentQuestionIndex ? "btn-active" : ""
            }`}
            onClick={() => handleTransition(index)}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
}
