import { useState } from "react";
import { profile } from "../data/profile";

type Status = "idle" | "sending" | "success" | "error";

interface ContactFormProps {
  /** Shows up as the email subject line so requests are easy to triage */
  subject: string;
  submitLabel?: string;
  messagePlaceholder?: string;
  autoFocus?: boolean;
  onSuccess?: () => void;
}

export default function ContactForm({
  subject,
  submitLabel = "Send message",
  messagePlaceholder = "Your message",
  autoFocus = false,
  onSuccess,
}: ContactFormProps) {
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    const formData = new FormData(e.currentTarget);
    formData.append("_subject", subject);

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${profile.email}`, {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setStatus("success");
        onSuccess?.();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="space-y-4 py-8 text-center">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-emerald-400/30 bg-emerald-400/10">
          <svg
            width="26"
            height="26"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#34d399"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M20 6L9 17l-5-5" />
          </svg>
        </div>
        <h3 className="font-display text-lg font-bold text-emerald-300">
          Message received
        </h3>
        <p className="text-sm text-[color:var(--txt-mute)]">
          Thank you for reaching out — I will get back to you shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <div className="grid gap-3 sm:grid-cols-2">
        <input
          type="text"
          name="name"
          placeholder="Your name"
          required
          autoComplete="name"
          autoFocus={autoFocus}
          className="field"
        />
        <input
          type="email"
          name="email"
          placeholder="Your email"
          required
          autoComplete="email"
          className="field"
        />
      </div>

      <input
        type="text"
        name="company"
        placeholder="Company (optional)"
        autoComplete="organization"
        className="field"
      />

      <textarea
        name="message"
        placeholder={messagePlaceholder}
        rows={4}
        required
        className="field resize-none"
      />

      {status === "error" && (
        <p className="rounded-lg border border-rose-500/25 bg-rose-500/10 px-3 py-2 text-xs text-rose-200">
          Something went wrong sending that. Please email me directly at{" "}
          <a className="underline" href={`mailto:${profile.email}`}>
            {profile.email}
          </a>
          .
        </p>
      )}

      <button type="submit" disabled={status === "sending"} className="btn-primary w-full">
        {status === "sending" ? "Sending…" : submitLabel}
      </button>

      <p className="text-center text-[11px] text-[color:var(--txt-faint)]">
        Your details are only used to reply to this request.
      </p>
    </form>
  );
}
