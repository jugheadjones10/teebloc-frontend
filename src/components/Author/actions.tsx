import { useUser } from "@clerk/clerk-react";
import { useCustomWorksheetAnswers } from "@/hooks/useCustomWorksheetAnswers";
import PublishWorksheet from "./publishWorksheet";
import SaveWorksheet from "./saveWorksheet";
import CancelWorksheet from "./cancelWorksheet";

export default function WorksheetActions({
  executeCancel,
  executeSave,
  executePublish,
  isCurrentlyPublished,
  setExecuteCancel,
  setExecuteSave,
  setExecutePublish,
  setIsCurrentlyPublished
}: {
  executeCancel: boolean;
  executeSave: boolean;
  executePublish: boolean;
  isCurrentlyPublished: boolean;
  setExecuteCancel: (value: boolean) => void;
  setExecuteSave: (value: boolean) => void;
  setExecutePublish: (value: boolean) => void;
  setIsCurrentlyPublished: (value: boolean) => void;
}) {
  const { user } = useUser();
  const userId = user?.id || "";
  const searchParams = new URLSearchParams(window.location.search);
  const worksheetId = searchParams.get("worksheetId");
  const [getCustomWorksheetAnswers, setCustomWorksheetAnswers] = useCustomWorksheetAnswers();

  return (
    <>
      <PublishWorksheet
        userId={userId}
        worksheetId={worksheetId!}
        getCustomWorksheetAnswers={getCustomWorksheetAnswers}
        executePublish={executePublish}
        isCurrentlyPublished={isCurrentlyPublished}
        setExecutePublish={setExecutePublish}
        setIsCurrentlyPublished={setIsCurrentlyPublished}
      />
      <SaveWorksheet
        userId={userId}
        worksheetId={worksheetId!}
        getCustomWorksheetAnswers={getCustomWorksheetAnswers}
        setCustomWorksheetAnswers={setCustomWorksheetAnswers}
        executeSave={executeSave}
        setExecuteSave={setExecuteSave}
      />
      <CancelWorksheet
        worksheetId={worksheetId!}
        getCustomWorksheetAnswers={getCustomWorksheetAnswers}
        setCustomWorksheetAnswers={setCustomWorksheetAnswers}
        executeCancel={executeCancel}
        setExecuteCancel={setExecuteCancel}
      />
    </>
  );
}
