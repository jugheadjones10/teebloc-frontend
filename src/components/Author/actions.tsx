import { useUser } from "@clerk/clerk-react";
import { useCustomWorksheetAnswers } from "@/hooks/useCustomWorksheetAnswers";
import PublishWorksheet from "./publishWorksheet";
import SaveWorksheet from "./saveWorksheet";

export default function WorksheetActions({
  executeSave,
  executePublish,
  isCurrentlyPublished,
  setExecuteSave,
  setExecutePublish,
  setIsCurrentlyPublished
}: {
  executeSave: boolean;
  executePublish: boolean;
  isCurrentlyPublished: boolean;
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
    </>
  );
}
