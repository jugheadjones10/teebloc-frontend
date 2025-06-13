import "./getRole.css";
import { useState } from "react";

function CheckMarkSVG() {
  return (
    <span className="choice-check">
      <svg
        width="16"
        height="12"
        viewBox="0 0 16 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5.30769 10.6923L4.77736 11.2226C4.91801 11.3633 5.10878 11.4423 5.30769 11.4423C5.5066 11.4423 5.69737 11.3633 5.83802 11.2226L5.30769 10.6923ZM15.5303 1.53033C15.8232 1.23744 15.8232 0.762563 15.5303 0.46967C15.2374 0.176777 14.7626 0.176777 14.4697 0.46967L15.5303 1.53033ZM1.53033 5.85429C1.23744 5.56139 0.762563 5.56139 0.46967 5.85429C0.176777 6.14718 0.176777 6.62205 0.46967 6.91495L1.53033 5.85429ZM5.83802 11.2226L15.5303 1.53033L14.4697 0.46967L4.77736 10.162L5.83802 11.2226ZM0.46967 6.91495L4.77736 11.2226L5.83802 10.162L1.53033 5.85429L0.46967 6.91495Z"
          fill="currentColor"
        ></path>
      </svg>
    </span>
  );
}

function CloseButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      className="form-cancel"
      aria-label="Close survey"
      onClick={(e) => {
        e.preventDefault();
        onClick();
      }}
      type="button"
    >
      <svg
        width="12"
        height="12"
        viewBox="0 0 12 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0.164752 0.164752C0.384422 -0.0549175 0.740578 -0.0549175 0.960248 0.164752L6 5.20451L11.0398 0.164752C11.2594 -0.0549175 11.6156 -0.0549175 11.8352 0.164752C12.0549 0.384422 12.0549 0.740578 11.8352 0.960248L6.79549 6L11.8352 11.0398C12.0549 11.2594 12.0549 11.6156 11.8352 11.8352C11.6156 12.0549 11.2594 12.0549 11.0398 11.8352L6 6.79549L0.960248 11.8352C0.740578 12.0549 0.384422 12.0549 0.164752 11.8352C-0.0549175 11.6156 -0.0549175 11.2594 0.164752 11.0398L5.20451 6L0.164752 0.960248C-0.0549175 0.740578 -0.0549175 0.384422 0.164752 0.164752Z"
          fill="black"
        ></path>
      </svg>
    </button>
  );
}

function choiceOption(
  role: string,
  id: number,
  selected: string,
  onSelect: (role: string) => void
) {
  const isSelected = selected === role;
  return (
    <div key={id} className="choice-wrapper">
      <input
        type="radio"
        id={`surveyQuestion0Choice${id}`}
        name="question0"
        checked={isSelected}
        onChange={() => onSelect(role)}
        className="visually-hidden"
        tabIndex={-1}
        aria-hidden="true"
      />
      <div
        className={`choice-option${isSelected ? " selected" : ""}`}
        role="radio"
        aria-checked={isSelected ? "true" : "false"}
        tabIndex={0}
        onClick={() => onSelect(role)}
        aria-labelledby={`surveyQuestion0Choice${id}-label`}
      >
        <span id={`surveyQuestion0Choice${id}-label`} className="choice-label">
          {role}
        </span>
        <CheckMarkSVG />
      </div>
    </div>
  );
}

export default function GetRoleSurvey({
  submitHandler,
  onClose,
  onCancel,
  hasDoneSurvey,
  showCrossButton = false,
}: {
  submitHandler: (role: string) => void;
  onClose: () => void;
  onCancel: () => void;
  hasDoneSurvey: boolean;
  showCrossButton?: boolean;
}) {
  const roles = [
    "Student",
    "Parent",
    "Private Tutor",
    "Tuition Center Teacher",
    "Public School Teacher",
    "None",
  ];
  const [selectedRole, setSelectedRole] = useState("");

  return (
    <div className="ph-survey">
      <div className="survey-container">
        {hasDoneSurvey ? (
          <div className="thank-you-message">
            <CloseButton onClick={onClose} />
            <div className="thank-you-message-container">
              <h3 className="thank-you-message-header">
                Thank you for your feedback!
              </h3>
              <button
                className="form-submit"
                aria-label="Submit survey"
                type="button"
                onClick={onCancel}
              >
                Close
              </button>
            </div>
          </div>
        ) : (
          <form
            className="survey-form"
            name="surveyForm"
            onSubmit={(e) => {
              e.preventDefault();
              submitHandler(selectedRole);
            }}
          >
            {showCrossButton && <CloseButton onClick={onCancel} />}
            <div className="survey-box">
              <div className="question-container">
                <div className="question-header">
                  <div className="survey-question">
                    Which role best describes you?
                  </div>
                </div>
                <div
                  className="multiple-choice-options limit-height"
                  role="radiogroup"
                >
                  {roles.map((role, index) =>
                    choiceOption(role, index, selectedRole, setSelectedRole)
                  )}
                </div>
              </div>
              <button
                className="form-submit"
                aria-label="Submit survey"
                type="submit"
                disabled={selectedRole === ""}
              >
                Submit
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
