import { useState } from "react";
import { useUser } from "@clerk/clerk-react";
import { ClipboardCopy, Check } from "lucide-react";

function CreateInviteModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  if (!isOpen) return null;

  const user = useUser();
  const [email, setEmail] = useState("");
  const [inviteUrl, setInviteUrl] = useState("");
  const [copied, setCopied] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [errorModalMessage, setErrorModalMessage] = useState("");

  const handleCopy = () => {
    navigator.clipboard.writeText(inviteUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  /**
   * Does a basic client-side validation of the email address format.
   * @param email The email address to validate.
   * @returns True if the email is valid, false otherwise.
   *
   * @source https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
   */
  const validateEmail = (email: string) => {
    const re =
      /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;

    return re.test(email);
  };

  const getInviteLink = async () => {
    setLoading(true);
    setError("");

    if (!email || !validateEmail(email)) {
      setError("Please enter a valid email address.");
      setLoading(false);
      return;
    }

    const userId = user.user?.id;

    try {
      const response = await fetch(
        `${
          import.meta.env.VITE_BACKEND_API
        }/generate-invite-link/${userId}/${email}`
      );
      if (response.ok) {
        const data = await response.json();
        setInviteUrl(data.link);
      } else if (response.status === 422) {
        setError("Invalid email address. Please try again.");
      } else {
        const data = await response.json();
        setErrorModalMessage(data.error || "An error occurred.");
        setShowErrorModal(true);
      }
    } catch (error) {
      setErrorModalMessage("Error generating invite link.");
      setShowErrorModal(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <input
        type="checkbox"
        id="invite-modal"
        className="modal-toggle"
        checked={isOpen}
        readOnly
      />
      <div className="modal">
        {showErrorModal ? (
          <LinkGenerationFailedModal
            setShowErrorModal={setShowErrorModal}
            errorMessage={errorModalMessage}
          />
        ) : (
          <div className="relative modal-box">
            <label
              htmlFor="invite-modal"
              className="absolute btn btn-sm btn-circle btn-ghost right-2 top-2"
              onClick={onClose}
            >
              ✕
            </label>
            <h3 className="text-lg font-bold">
              {!inviteUrl
                ? "Invite a friend to get 3 free worksheets"
                : "Invite Link:"}
            </h3>

            {!inviteUrl ? (
              <>
                <p className="mt-4 text-sm text-gray-500">
                  Enter the email of the user you want to invite. You will
                  receive 3 free worksheets once they sign up using the invite
                  link.
                </p>
                <input
                  type="email"
                  placeholder="Enter their email"
                  className="w-full mt-4 input input-bordered"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {error && <p className="mt-2 text-error">{error}</p>}
                <button
                  className="mt-4 btn btn-primary"
                  onClick={getInviteLink}
                  disabled={loading || !email}
                >
                  {loading ? "Generating..." : "Generate Invite Link"}
                </button>
              </>
            ) : (
              <>
                <p className="mt-4 text-sm text-gray-500">
                  Copy the invite link and send it to the user you would like to
                  invite! Once they sign up, refresh to receive your 3 free
                  worksheets.
                </p>
                <div className="relative p-4 mt-4 text-white bg-gray-400 rounded-lg pt-7">
                  <button
                    onClick={handleCopy}
                    className="absolute top-2 right-2 hover:text-gray-300"
                    aria-label="Copy invite link"
                  >
                    {copied ? (
                      <Check className="w-5 h-5" />
                    ) : (
                      <ClipboardCopy className="w-5 h-5" />
                    )}
                    <span
                      className="absolute top-0 px-2 py-1 text-xs text-white transition-opacity duration-700 ease-in-out bg-black bg-opacity-75 rounded pointer-events-none right-10"
                      style={{ opacity: copied ? 1 : 0 }}
                    >
                      Copied!
                    </span>
                  </button>
                  <p className="break-all">{inviteUrl}</p>
                </div>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

function LinkGenerationFailedModal({
  setShowErrorModal,
  errorMessage,
}: {
  setShowErrorModal: (showErrorModal: boolean) => void;
  errorMessage: string;
}) {
  return (
    <div>
      <div className="w-full text-center modal-box">
        <h3 className="mb-4 text-2xl font-bold">
          Invite Link Generation Failed!
        </h3>
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

export default CreateInviteModal;
