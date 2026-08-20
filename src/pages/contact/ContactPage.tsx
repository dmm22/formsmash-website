import SecondaryPageShell from "../../components/SecondaryPageShell";
import { useAnalytics } from "../../contexts/AnalyticsContext";
import { openExternalUrl } from "../../utils/urlUtils";
import openaiLogo from "./assets/openai_logo.png";
import useContactForm from "./hooks/useContactForm";

export default function ContactPage() {
  const { sendEvent } = useAnalytics();
  const {
    email,
    setEmail,
    message,
    setMessage,
    statusMessage,
    isSubmitting,
    statusMessageClassName,
    handleSubmit,
  } = useContactForm(sendEvent);

  const handleCustomGptButtonClicked = () => {
    sendEvent("custom_gpt_button_clicked");
    openExternalUrl(import.meta.env.VITE_CUSTOM_GPT_URL);
  };

  function renderStatusMessage() {
    if (!statusMessage) {
      return null;
    }

    return (
      <p role="status" className={statusMessageClassName}>
        {statusMessage}
      </p>
    );
  }

  return (
    <SecondaryPageShell title="Contact FormSmash" excludeHr>
      <div className="mt-4 rounded-lg border border-border-primary p-4 lg:p-6 lg:shadow-xl">
        <div className="lg:grid lg:grid-cols-2 lg:gap-18">
          <div className="flex flex-col gap-8 lg:gap-14">
            <p className="lg:text-lg">
              I set up the FormSmash Assistant with everything it needs to help
              with troubleshooting, setup, feature questions, and common issues.
            </p>
            <p className="lg:text-lg">
              If you'd like a quick answer, it's usually the fastest place to
              start. If you still need help, run into a bug, or just prefer to
              reach out directly, send me a message and I'll take a look as soon
              as I can.
            </p>
            <button
              onClick={handleCustomGptButtonClicked}
              className="flex items-center justify-center gap-1 rounded-lg border border-border-accent bg-bg-accent-light p-2 font-medium lg:w-max"
            >
              <img src={openaiLogo} alt="OpenAI" className="max-w-8" />
              <span>FormSmash Assistant</span>
            </button>
          </div>
          <hr className="my-8 border-dashed border-border-primary lg:hidden" />
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
                className="rounded-lg border border-border-primary p-3 outline-none lg:bg-white"
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
                className="h-48 resize-none rounded-lg border border-border-primary p-3 outline-none lg:h-64 lg:bg-white"
              />
            </div>
            {renderStatusMessage()}
            <button
              disabled={isSubmitting}
              className="w-full rounded-lg bg-accent px-4 py-2 text-white disabled:cursor-not-allowed disabled:opacity-60"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </SecondaryPageShell>
  );
}
