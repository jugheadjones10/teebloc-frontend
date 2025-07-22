import { useQuery, useMutation } from "@apollo/client";
import { useEffect, useState, useRef } from "react";
import {
  PUBLISH_WORKSHEET,
  GET_PUBLISHED_STATUS,
  SET_PUBLISHED_STATUS,
} from "./data";
import { isEmpty } from "./helpers";

// Empty component used to publish worksheet
export default function PublishWorksheet({
  userId,
  worksheetId,
  getCustomWorksheetAnswers,
  executePublish,
  isCurrentlyPublished,
  setExecutePublish,
  setIsCurrentlyPublished,
} : {
  userId: string;
  worksheetId: string;
  getCustomWorksheetAnswers: (path: string[]) => any;
  executePublish: boolean;
  isCurrentlyPublished: boolean;
  setExecutePublish: (value: boolean) => void;
  setIsCurrentlyPublished: (value: boolean) => void;
}) {
  const [rowExists, setRowExists] = useState(false);

  const { data, refetch } = useQuery(GET_PUBLISHED_STATUS, {
    variables: {
      authorId: userId,
      worksheetId: Number(worksheetId),
    },
  });

  useEffect(() => {
    if (data) {
      setRowExists(data.published_worksheets.length > 0);
      setIsCurrentlyPublished(data.published_worksheets.length > 0 && data.published_worksheets[0].published);
    }
  }, [data]);

  const [publishWorksheet] = useMutation(PUBLISH_WORKSHEET, {
    onCompleted: () => {
      setIsCurrentlyPublished(true);
      refetch();
      setExecutePublish(false);
      window.alert("Worksheet published successfully!");
    },
  });

  const [setPublishedStatus] = useMutation(SET_PUBLISHED_STATUS, {
    onCompleted: () => {
      const message = isCurrentlyPublished
        ? "Worksheet unpublished."
        : "Worksheet published successfully!";
      setIsCurrentlyPublished(!isCurrentlyPublished);
      refetch();
      setExecutePublish(false);
      window.alert(message);
    },
  });

  const allQuestionPartsAnswered = (customAnswers: Record<string, any>, questionIds: string[]) => {
    return questionIds.every((questionId) => {
      const customAnswerForQuestion = customAnswers[questionId];
      const parts = Object.keys(customAnswerForQuestion).filter(key => key !== "operation" && key !== "isUpToDate");
      const answers = parts.map(part => customAnswerForQuestion[part].answer);
      return !answers.some(isEmpty);
    });
  };

  const publishRef = useRef(false);

  useEffect(() => {
    if (executePublish && !publishRef.current) {
      const customAnswers = getCustomWorksheetAnswers([worksheetId!]);
      const questionIds = customAnswers.questionIds || [];

      // Check if all question parts are answered
      if (!allQuestionPartsAnswered(customAnswers, questionIds)) {
        window.alert("Please answer all question parts before publishing.");
        setExecutePublish(false);
        return;
      }

      // Check if all custom answers are up to date
      if (!questionIds.every((id: string) => customAnswers[id]?.isUpToDate === true)) {
        window.alert("There are unsaved changes. Please save your worksheet before publishing.");
        setExecutePublish(false);
        return;
      }

      publishRef.current = true; // Prevent multiple executions
      if (rowExists) { // Update existing row
        setPublishedStatus({
          variables: {
            authorId: userId,
            worksheetId: Number(worksheetId),
            published: !isCurrentlyPublished,
          },
        });
      } else { // Insert new row
        publishWorksheet({
          variables: {
            authorId: userId,
            worksheetId: Number(worksheetId),
          },
        });
      }
      setTimeout(() => {
        publishRef.current = false; // Reset for next execution
      }, 100);
    }
  }, [executePublish, isCurrentlyPublished]);

  return null;
}
