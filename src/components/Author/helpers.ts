
export const EMPTY_HTML = "<p></p>";
export const isEmpty = (value: string) => value === EMPTY_HTML || value.trim() === "";

function processImages(customAnswerForQuestion: Record<string, any>, newImageUrls: Record<string, Record<string, number[]>> | undefined) {
  const parser = new DOMParser();
  const imageUrls: Record<string, Record<string, string[]>> = {};

  for (const part of Object.keys(customAnswerForQuestion)) {
    imageUrls[part] = {};
    for (const key of Object.keys(customAnswerForQuestion[part])) {
      if (part === "option" && key === "answer") continue;

      const content = customAnswerForQuestion[part][key];
      const doc = parser.parseFromString(content, "text/html");
      const rawImages = doc.getElementsByTagName("img");
      if (rawImages.length === 0) continue; // No images to process

      if (newImageUrls) {
        for (let i = 0; i < rawImages.length; i++) {
          const newImageEle = document.createElement("img");
          newImageEle.src = `${import.meta.env.VITE_BACKEND_API}/images/customAnswer/${newImageUrls[part][key][i]}`;
          rawImages[i].replaceWith(newImageEle);
        }
        customAnswerForQuestion[part][key] = doc.body.innerHTML; // Update the content with new image URLs
      } else {
        const urls = Array.from(rawImages)
          .filter((img: HTMLImageElement) => img.src.startsWith("data:image"))
          .map((img: HTMLImageElement) => img.src);
        imageUrls[part][key] = urls;
      }
    }
  }
  return newImageUrls ? customAnswerForQuestion : imageUrls;
}

async function saveCustomAnswerImages(
  authorId: string,
  questionId: string,
  imageUrls: Record<string, Record<string, string[]>>,
  operation: "insert" | "update" | "delete"
) {
  return await fetch(`${import.meta.env.VITE_BACKEND_API}/updateCustomAnswerImages`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      authorId,
      questionId,
      imageUrls,
      operation,
    }),
  }).then((response) => {
    if (!response.ok) {
      throw new Error("Failed to save custom answer images")
    } else if (operation === "insert" || operation === "update") {
      return response.json();
    }
  });
}

export default async function saveWorksheet(customAnswers: Record<string, any>, saveOperations: Record<string, Function>, userId: string) {
  const questionIds = customAnswers.questionIds || [];

  for (const questionId of questionIds) {
    const customAnswerForQuestion = customAnswers[questionId];
    if (!customAnswerForQuestion || customAnswerForQuestion.isUpToDate) continue; // Skip the question

    const operation = customAnswerForQuestion.operation;
    const parts = Object.keys(customAnswerForQuestion).filter(key => key !== "operation" && key !== "isUpToDate");
    const answers = parts.map(part => customAnswerForQuestion[part].answer);
    const explanations = parts.map(part => customAnswerForQuestion[part].explanation);
    const allEmpty = answers.every(isEmpty) && explanations.every(isEmpty);

    const answerJson = { ...customAnswerForQuestion };
    delete answerJson.operation;
    delete answerJson.isUpToDate;

    const imageUrls = processImages(answerJson, undefined);

    if (allEmpty && operation === "update") {
      saveOperations.delete(questionId); // delete the record as all parts are empty
      saveCustomAnswerImages(userId, questionId, imageUrls, "delete");
    } else if (operation === "insert") {
      const newImageUrls = await saveCustomAnswerImages(userId, questionId, imageUrls, "insert");
      const newAnswerJson = processImages(answerJson, newImageUrls);
      saveOperations.insert(questionId, newAnswerJson);
    } else if (operation === "update") {
      const newImageUrls = await saveCustomAnswerImages(userId, questionId, imageUrls, "update");
      const newAnswerJson = processImages(answerJson, newImageUrls);
      saveOperations.update(questionId, newAnswerJson);
    }
  }
}
