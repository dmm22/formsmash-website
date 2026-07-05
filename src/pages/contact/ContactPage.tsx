import SecondaryPageShell from "../../components/SecondaryPageShell";
import useAnalyticsEvents from "../../hooks/useAnalyticsEvents";
import send from "./assets/send.png";
import openaiLogo from "./assets/openai_logo.png";
import useContactForm from "./hooks/useContactForm";

export default function ContactPage() {
  const { sendEvent } = useAnalyticsEvents();
  const {
    email,
    setEmail,
    message,
    setMessage,
    statusMessage,
    isSubmitting,
    statusMessageClassName,
    handleEmailBlur,
    handleMessageBlur,
    handleSubmit,
  } = useContactForm();

  const handleCustomGptButtonClicked = () => {
    sendEvent("custom_gpt_button_clicked");
    window.open(
      import.meta.env.VITE_CUSTOM_GPT_URL,
      "_blank",
      "noopener,noreferrer",
    );
  };

  return (
    <SecondaryPageShell src={send} alt="Send" title="Contact FormSmash">
      <form className="flex flex-1 flex-col gap-6" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-1">
          <label htmlFor="email" className="text-text-secondary">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            disabled={isSubmitting}
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            onBlur={handleEmailBlur}
            className="rounded-lg border border-border-primary p-3"
          />
        </div>
        <div className="flex flex-1 flex-col gap-1">
          <label htmlFor="message" className="text-text-secondary">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            disabled={isSubmitting}
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            onBlur={handleMessageBlur}
            className="h-64 rounded-lg border border-border-primary p-3"
          />
        </div>
        {statusMessage && (
          <p role="status" className={statusMessageClassName}>
            {statusMessage}
          </p>
        )}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full rounded-lg bg-accent px-4 py-2 text-white disabled:cursor-not-allowed disabled:opacity-60"
        >
          Send Message
        </button>
      </form>
      <hr className="my-4 border-dashed border-border-primary" />
      <section className="flex flex-col gap-8">
        <p>
          I set up the FormSmash Assistant with everything it needs to help with
          troubleshooting, setup, feature questions, and common issues.
        </p>
        <p>
          If you'd like a quick answer, it's usually the fastest place to start.
          If you still need help, run into a bug, or just prefer to reach out
          directly, send me a message and I'll take a look as soon as I can.
        </p>
        <button
          type="button"
          onClick={handleCustomGptButtonClicked}
          className="flex items-center justify-center gap-2 rounded-lg border border-border-accent bg-bg-accent-light p-2"
        >
          <img src={openaiLogo} alt="OpenAI" className="max-w-8" />
          <span>FormSmash Assistant</span>
        </button>
      </section>
    </SecondaryPageShell>
  );
}
