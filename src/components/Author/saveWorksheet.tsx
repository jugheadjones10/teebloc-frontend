import { useMutation } from "@apollo/client";
import { useEffect, useState, useRef } from "react";
import {
  INSERT_CUSTOM_ANSWER,
  UPDATE_CUSTOM_ANSWER,
  DELETE_CUSTOM_ANSWER,
} from "./data";
import saveWorksheet from "./helpers";

// Empty component used to save worksheet
export default function SaveWorksheet({
  userId,
  worksheetId,
  getCustomWorksheetAnswers,
  setCustomWorksheetAnswers,
  executeSave,
  setExecuteSave
} : {
  userId: string;
  worksheetId: string;
  getCustomWorksheetAnswers: (keys: string[]) => Record<string, any>;
  setCustomWorksheetAnswers: (keys: string[], value: any) => void;
  executeSave: boolean;
  setExecuteSave: (value: boolean) => void;
}) {
  const [questionsSaved, setQuestionsSaved] = useState<Record<string, boolean>>({});

  const onSaveComplete = () => {
    setCustomWorksheetAnswers([worksheetId, "refresh"], true);
    setQuestionsSaved({});
    setExecuteSave(false);
    window.alert("Custom answers saved successfully!");
  }

  const [insertCustomAnswer] = useMutation(INSERT_CUSTOM_ANSWER);
  const [updateCustomAnswer] = useMutation(UPDATE_CUSTOM_ANSWER);
  const [deleteCustomAnswer] = useMutation(DELETE_CUSTOM_ANSWER);

  const saveOperations = {
    insert: (questionId: string, answerJson: any) => {
      insertCustomAnswer({
        variables: {
          authorId: userId,
          questionId,
          answerJson,
        },
      });
      const newCustomAnswers = {
        ...getCustomWorksheetAnswers([worksheetId, questionId]),
        isUpToDate: true,
        operation: "update",
        useLocalStorage: undefined,
      };
      setCustomWorksheetAnswers([worksheetId, questionId], newCustomAnswers);
      setQuestionsSaved((prev) => ({ ...prev, [questionId]: true }));
    },
    update: (questionId: string, answerJson: any) => {
      updateCustomAnswer({
        variables: {
          authorId: userId,
          questionId,
          answerJson,
        },
      });
      setCustomWorksheetAnswers([worksheetId, questionId, "isUpToDate"], true);
      setCustomWorksheetAnswers([worksheetId, questionId, "useLocalStorage"], undefined);
      setQuestionsSaved((prev) => ({ ...prev, [questionId]: true }));
    },
    delete: (questionId: string) => {
      deleteCustomAnswer({
        variables: {
          authorId: userId,
          questionId,
        },
      });
      const newCustomWorksheetAnswers = {
        ...getCustomWorksheetAnswers([]),
      };
      delete newCustomWorksheetAnswers[worksheetId][questionId];
      setCustomWorksheetAnswers([], newCustomWorksheetAnswers);
      setQuestionsSaved((prev) => ({ ...prev, [questionId]: true }));
    },
  };

  const hasSavedRef = useRef(false);

  useEffect(() => {
    if (executeSave && !hasSavedRef.current) {
      hasSavedRef.current = true; // Prevent multiple saves
      const customAnswers = getCustomWorksheetAnswers([worksheetId!]);
      const questionIds = customAnswers.questionIds || [];
      if (questionIds.every((id: string) => customAnswers[id]?.isUpToDate !== false)) {
        window.alert("All custom answers are up to date. No changes to save.");
        setExecuteSave(false);
      } else {
        const saved: Record<string, boolean> = {};
        questionIds.forEach((id: string) => {
          saved[id] = customAnswers[id]?.isUpToDate !== false;
        });
        setQuestionsSaved(saved);
        saveWorksheet(customAnswers, saveOperations, userId);
      }
      setTimeout(() => {
        hasSavedRef.current = false; // Reset for next save operation
      }, 100);
    }
  }, [executeSave]);

  useEffect(() => {
    if (executeSave && Object.values(questionsSaved).every((saved) => saved)) {
      onSaveComplete();
    }
  }, [questionsSaved]);

  return null;
}
