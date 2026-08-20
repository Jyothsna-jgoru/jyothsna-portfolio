import { useCallback, useEffect, useState } from "react";
import ContactForm from "./ContactForm";

interface ResumeModalProps {
  onClose: () => void;
}

export default function ResumeModal({ onClose }: ResumeModalProps) {
  const [sent, setSent] = useState(false);

  /* Escape to dismiss + lock the page behind the dialog */
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    document.body.classList.add("overflow-locked");

    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.classList.remove("overflow-locked");
    };
  }, [onClose]);

  /* Dismiss shortly after a successful send */
  useEffect(() => {
    if (!sent) return;
    const timer = window.setTimeout(onClose, 3000);
    return () => window.clearTimeout(timer);
  }, [sent, onClose]);

  const handleSuccess = useCallback(() => setSent(true), []);

  return (
    <div
      className="fixed inset-0 z-[70] flex items-center justify-center overflow-y-auto bg-scrim px-4 py-10 backdrop-blur-sm animate-fadeIn"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-modal-title"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="panel panel-sheen my-auto w-full max-w-md !bg-raised-95 p-7 animate-popIn"
      >
        <div className="mb-6 text-center">
          <span className="eyebrow justify-center w-full">Resume</span>
          <h2 id="resume-modal-title" className="mt-3 font-display text-xl font-bold md:text-2xl">
            Request resume access
          </h2>
          <p className="mt-2 text-sm text-[color:var(--txt-mute)]">
            Share a few details and I will send my resume across.
          </p>
        </div>

        <ContactForm
          subject="Portfolio — resume access request"
          submitLabel="Submit request"
          messagePlaceholder="Reason for request"
          autoFocus
          onSuccess={handleSuccess}
        />

        <button
          onClick={onClose}
          className="mx-auto mt-4 block text-xs text-[color:var(--txt-faint)] transition-colors hover:text-primary"
        >
          Close
        </button>
      </div>
    </div>
  );
}
