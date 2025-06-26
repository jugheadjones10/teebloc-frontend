import { useEffect, useState } from "react";
import { useUser } from "@clerk/clerk-react";
import { ClipboardCopy, Check } from "lucide-react";

export default function PromoCodeModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  if (!isOpen) return null;

  const user = useUser();
  const [promoCode, setPromoCode] = useState("");
  const [copied, setCopied] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleCopy = () => {
    navigator.clipboard.writeText(promoCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  useEffect(() => {
    const getPromoCode = async () => {
      setLoading(true);
      setError("");

      const userId = user.user?.id;

      try {
        const response = await fetch(
          `${import.meta.env.VITE_BACKEND_API}/get-promo-code/${userId}`
        );
        if (response.ok) {
          const data = await response.json();
          setPromoCode(data.code);
        } else {
          const data = await response.json();
          setError(data.error || "An error occurred.");
        }
      } catch (error) {
        setError("Error generating promo code.");
      } finally {
        setLoading(false);
      }
    };
    getPromoCode();
  }, []);

  return (
    <div>
      <input
        type="checkbox"
        id="promo-code-modal"
        className="modal-toggle"
        checked={isOpen}
        readOnly
      />
      <div className="modal">
        <div className="relative modal-box">
          <label
            htmlFor="promo-code-modal"
            className="absolute btn btn-sm btn-circle btn-ghost right-2 top-2"
            onClick={onClose}
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">
            Make a friend subscribe and both of you get a free month
          </h3>
          {!error && (
            <p className="mt-4 text-sm text-gray-500">
              Copy the promo code and send it to a user who isn't already
              subscribed! Once they subscribe, both of you will get a free month
              added to your subscriptions.
            </p>
          )}
          {error ? (
            <p className="mt-4 text-center text-red-500">{error}</p>
          ) : (
            <div className="grid grid-cols-3 p-4 mt-4 text-white bg-gray-400 rounded-lg">
              <div></div>
              {loading ? (
                <span className="justify-self-center loading loading-spinner loading-lg"></span>
              ) : (
                <p className="text-center">{promoCode}</p>
              )}
              <button
                onClick={handleCopy}
                className="flex justify-end hover:text-gray-300"
                disabled={!promoCode || loading}
                aria-label="Copy promo code"
              >
                {copied ? (
                  <Check className="w-5 h-5" />
                ) : (
                  <ClipboardCopy className="w-5 h-5" />
                )}
                <span
                  className="relative top-0 px-2 py-1 text-xs text-white transition-opacity duration-700 ease-in-out bg-black bg-opacity-75 rounded pointer-events-none right-10"
                  style={{
                    opacity: copied ? 1 : 0,
                    display: copied ? "inline-block" : "none",
                  }}
                >
                  Copied!
                </span>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
