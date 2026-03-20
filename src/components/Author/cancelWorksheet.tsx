import { useEffect } from "react";
import { useLocation } from "wouter";

// Empty component for cancelling changes to a worksheet
export default function CancelWorksheet({
  worksheetId,
  getCustomWorksheetAnswers,
  setCustomWorksheetAnswers,
  executeCancel,
  setExecuteCancel
} : {
  worksheetId: string;
  getCustomWorksheetAnswers: (keys: string[]) => Record<string, any>;
  setCustomWorksheetAnswers: (keys: string[], value: any) => void;
  executeCancel: boolean;
  setExecuteCancel: (value: boolean) => void;
}) {
  const [, setLocation] = useLocation();

  useEffect(() => {
    if (executeCancel) {
      const questionIds = getCustomWorksheetAnswers([worksheetId, "questionIds"]) || [];
      questionIds.forEach((questionId: string) => {
        if (getCustomWorksheetAnswers([worksheetId, questionId])) {
          setCustomWorksheetAnswers([worksheetId, questionId, "useLocalStorage"], undefined);
        }
      });
      setLocation("/practice/worksheets");
      setExecuteCancel(false);
    }
  }, [executeCancel]);

  return null;
}
