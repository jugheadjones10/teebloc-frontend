import { useUser } from "@clerk/clerk-react";
import Question from "../Question";
import { twMerge } from "tailwind-merge";
import { useQuery, useReactiveVar, useMutation } from "@apollo/client";
import {
  GET_QUESTIONS_BY_ID,
  cartItemsVar,
  GET_FREE_WORKSHEETS_LEFT,
  DECREMENT_FREE_WORKSHEETS,
} from "./data";
import posthog from "posthog-js";
import { useState } from "react";
import { PDFDocument } from "../MyWorksheets/pdf";
import { pdf } from "@react-pdf/renderer";
import { DownloadType } from "../MyWorksheets/pdfDownloadButton";
import { useQuestionLimit } from "../../hooks/useQuestionLimit";
import { showToast } from "../Toast";

export default function Cart() {
  const { user } = useUser();
  const cartItems = useReactiveVar(cartItemsVar);
  const { maxQuestions, cartCount } = useQuestionLimit();

  const {
    loading: q_loading,
    error: q_error,
    data: q_data,
  } = useQuery(GET_QUESTIONS_BY_ID, {
    fetchPolicy: "cache-and-network",
    variables: {
      ids: cartItems,
    },
  });

  // Query for number of free worksheets left
  const { data: freeWorksheetsData } = useQuery(GET_FREE_WORKSHEETS_LEFT, {
    variables: { userid: user?.id || "" },
    skip: !user?.id,
  });

  // Mutation for decrementing free worksheets
  const [decrementFreeWorksheets] = useMutation(DECREMENT_FREE_WORKSHEETS, {
    refetchQueries: [GET_FREE_WORKSHEETS_LEFT],
    variables: { userid: user?.id || "" },
  });

  const questions = q_data?.questions || [];
  const paper1Questions = questions.filter((q) => q.paper.paper === 1);
  const totalPrice =
    paper1Questions.length * 0.05 +
    (cartItems.length - paper1Questions.length) * 0.1;

  const freeWorksheetsLeft =
    freeWorksheetsData?.users[0]?.free_worksheets_count || 0;

  const handleCheckout = async () => {
    if (cartItems.length > maxQuestions) {
      showToast(
        `Worksheet exceeds the limit of ${maxQuestions} questions. Please remove some questions.`,
        "warning"
      );
      return;
    }

    posthog.capture("user_clicked_checkout");

    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_API}/create-checkout-session`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            question_ids: cartItems,
            num_paper1_questions: paper1Questions.length,
            user_id: user?.id,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const session = await response.json();
      window.location.href = session.url;
    } catch (error) {
      console.error("There was a problem with the checkout:", error);
    }
  };

  const [downloadLoading, setDownloadLoading] = useState(false);

  async function downloadPDF() {
    const cartItems = cartItemsVar();
    const questions = cartItems.map((id) => {
      return q_data?.questions.find((q) => q.id === id);
    });
    console.log(questions);

    if (questions.length === 0) {
      return;
    }

    const doc = (
      <PDFDocument
        questionsData={{ questions }}
        downloadType={DownloadType.FULL}
      />
    );
    const asPdf = pdf(doc);
    const blob = await asPdf.toBlob();

    const url = URL.createObjectURL(blob);
    const newTab = window.open(url, "_blank");
    newTab.focus();
  }

  const handleDownload = async () => {
    if (!user?.id || freeWorksheetsLeft <= 0) return;

    if (cartItems.length > maxQuestions) {
      showToast(
        `Worksheet exceeds the limit of ${maxQuestions} questions. Please remove some questions.`,
        "warning"
      );
      return;
    }

    try {
      setDownloadLoading(true);
      await downloadPDF();
      await decrementFreeWorksheets({ variables: { userid: user.id } });

      // Double check the below
      posthog.capture("user_downloaded_free_worksheet");
      setDownloadLoading(false);
    } catch (error) {
      console.error("There was a problem with the download:", error);
    }
  };

  return (
    <div className="mx-8">
      <div className="flex flex-col gap-8">
        {questions.map((q) => (
          <Question key={q.id} q={q} isInCart={cartItems.includes(q.id)} />
        ))}
      </div>

      {q_loading && (
        <span className="loading loading-spinner loading-lg"></span>
      )}

      <div className="fixed z-10 flex flex-row items-end gap-4 bottom-4 right-4">
        <div
          onClick={() => {
            cartItemsVar([]);
          }}
          className="btn btn-neutral btn-lg"
        >
          Clear questions
        </div>
        {maxQuestions !== Infinity && (
          <div className="text-sm text-gray-600">
            {cartCount} / {maxQuestions} questions
          </div>
        )}
        {freeWorksheetsLeft > 0 ? (
          <div className="flex flex-col">
            <div>({freeWorksheetsLeft} free downloads left)</div>
            <div
              onClick={handleDownload}
              className={twMerge(
                "btn btn-primary btn-lg w-56",
                cartItems.length === 0 && "btn-disabled"
              )}
            >
              {downloadLoading ? (
                <span className="loading loading-spinner"></span>
              ) : (
                "Download"
              )}
            </div>
          </div>
        ) : (
          <div onClick={handleCheckout} className="w-56 btn btn-neutral btn-lg">
            Checkout
          </div>
        )}
      </div>
    </div>
  );
}
