import { useAuth } from "@clerk/clerk-react";
import posthog from "posthog-js";
import { useState } from "react";
import { useSubscription } from "../../hooks/useSubscription";

export default function Subscribe() {
  const { getToken } = useAuth();
  const [loading, setLoading] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const { hasActiveSubscription, loading: subscriptionStateLoading } =
    useSubscription();

  const handleSubscribe = async () => {
    setLoading(true);
    posthog.capture("user_clicked_subscribe");

    try {
      const token = await getToken();
      if (!token) {
        throw new Error("Could not authenticate your session.");
      }

      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_API}/create-subscription`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const session = await response.json();
      console.log(session);
      // If the session has error: true, show the message in a modal
      if (session.error) {
        setShowErrorModal(true);
        setErrorMessage(session.message);
      } else {
        window.location.href = session.url;
      }
    } catch (error) {
      console.error("There was a problem with the subscription:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mx-auto max-w-2xl px-4 py-8">
      <SubscriptionFailedModal
        showErrorModal={showErrorModal}
        setShowErrorModal={setShowErrorModal}
        errorMessage={errorMessage}
      />
      <h1 className="text-4xl font-bold mb-8">Subscribe to Teebloc</h1>

      <h2 className="text-2xl font-bold mb-8">$8.50/month</h2>
      <div className="prose mb-8 text-xl">
        <ul>
          <li>Created unlimited number of worksheets</li>
          <li>
            Access to our latest database of questions from past year papers
          </li>
          <li>
            Access to all future features in development such as automatic compo
            marking, chatbot for SG exam syllabus, etc.
          </li>
        </ul>
      </div>

      <button
        onClick={handleSubscribe}
        disabled={loading || subscriptionStateLoading || hasActiveSubscription}
        className="btn btn-primary btn-lg w-full"
      >
        {loading || subscriptionStateLoading ? (
          <span className="loading loading-spinner"></span>
        ) : hasActiveSubscription ? (
          "You are already subscribed"
        ) : (
          "Subscribe Now"
        )}
      </button>
    </div>
  );
}

function SubscriptionFailedModal({
  showErrorModal,
  setShowErrorModal,
  errorMessage,
}: {
  showErrorModal: boolean;
  setShowErrorModal: (showErrorModal: boolean) => void;
  errorMessage: string;
}) {
  return (
    <div className={`modal ${showErrorModal ? "modal-open" : ""}`}>
      <div className="modal-box text-center">
        <h3 className="text-2xl font-bold mb-4">Subscription Failed!</h3>
        <p className="mb-4">{errorMessage}</p>
        <button
          className="btn btn-primary"
          onClick={() => setShowErrorModal(false)}
        >
          Continue
        </button>
      </div>
      <form
        method="dialog"
        className="modal-backdrop"
        onClick={() => setShowErrorModal(false)}
      >
        <button>close</button>
      </form>
    </div>
  );
}
