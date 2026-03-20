import { useState, useEffect } from "react";

export default function MCQAnswerSelector({
  initialValue = "",
  getCustomAnswer,
  updateCustomAnswer,
} : {
  initialValue?: string;
  getCustomAnswer: (initialValue: string) => string;
  updateCustomAnswer: (value: string, isUpToDate?: boolean) => void;
}
) {
  const [selectedAnswer, setSelectedAnswer] = useState(getCustomAnswer(initialValue));

  useEffect(() => {
    if (selectedAnswer === initialValue) {
      updateCustomAnswer(selectedAnswer, true);
      return;
    }
    updateCustomAnswer(selectedAnswer);
  }, [selectedAnswer, initialValue]);

  return (
    <select
      title="Select your answer"
      defaultValue={selectedAnswer}
      onChange={(e) => setSelectedAnswer(e.target.value)}
      name={`customAnswer-mcq`}
      className="w-48 min-h-9 h-9 select select-bordered focus:border-yellow-300"
      style={{ outline: "none" }}
    >
      {["", "A", "B", "C", "D"].map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
}