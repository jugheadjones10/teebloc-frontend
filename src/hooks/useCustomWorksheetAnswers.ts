const customWorksheetAnswersKey = `customWorksheetAnswers`;

const getCustomWorksheetAnswers = (path: string[]) => {
  const data = JSON.parse(localStorage.getItem(customWorksheetAnswersKey) || "{}");
  return path.reduce((acc, curr) => acc?.[curr], data);
};

const setCustomWorksheetAnswers = (path: string[], value: any) => {
  const currentData = getCustomWorksheetAnswers([]);
  const newData = { ...currentData };
  let temp = newData;

  path.forEach((p, index) => {
    if (index === path.length - 1) {
      temp[p] = value;
    } else {
      temp[p] = temp[p] || {};
    }
    temp = temp[p];
  });

  localStorage.setItem(customWorksheetAnswersKey, JSON.stringify(newData));
};

export function useCustomWorksheetAnswers(): [typeof getCustomWorksheetAnswers, typeof setCustomWorksheetAnswers] {
  return [getCustomWorksheetAnswers, setCustomWorksheetAnswers];
}
