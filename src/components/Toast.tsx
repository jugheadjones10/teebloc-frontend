import { makeVar, useReactiveVar } from "@apollo/client";
import { useEffect } from "react";

interface ToastState {
  message: string;
  type: "info" | "success" | "warning" | "error";
  visible: boolean;
}

export const toastVar = makeVar<ToastState>({
  message: "",
  type: "info",
  visible: false,
});

export function showToast(
  message: string,
  type: ToastState["type"] = "warning"
) {
  toastVar({ message, type, visible: true });
}

const alertClass: Record<ToastState["type"], string> = {
  info: "alert-info",
  success: "alert-success",
  warning: "alert-warning",
  error: "alert-error",
};

export default function Toast() {
  const toast = useReactiveVar(toastVar);

  useEffect(() => {
    if (toast.visible) {
      const timer = setTimeout(() => {
        toastVar({ ...toast, visible: false });
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [toast.visible, toast.message]);

  if (!toast.visible) return null;

  return (
    <div className="toast toast-bottom toast-center z-50">
      <div className={`alert ${alertClass[toast.type]}`}>
        <span>{toast.message}</span>
      </div>
    </div>
  );
}
