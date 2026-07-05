import SecondaryPageShell from "../../components/SecondaryPageShell";
import send from "./assets/send.png";
import openaiLogo from "./assets/openai_logo.png";
import { contactAssistantParagraphs } from "../../content/contactContent";

export default function ContactPage() {
  return (
    <SecondaryPageShell src={send} alt="Send" title="Contact FormSmash">
      <form className="mt-8 flex flex-1 flex-col gap-2">
        <div className="flex flex-col gap-1">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            className="rounded-lg border border-border-primary p-3"
          />
        </div>
        <div className="flex flex-1 flex-col gap-1">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            className="h-64 rounded-lg border border-border-primary p-3"
          />
        </div>
        <button
          type="submit"
          className="w-full rounded-lg bg-accent px-4 py-2 text-white"
        >
          Send Message
        </button>
      </form>
      <hr className="my-4 border-border-primary" />
      <section className="flex flex-col gap-8">
        {contactAssistantParagraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
        <button className="flex items-center justify-center gap-2 rounded-lg border border-border-accent bg-bg-accent-light p-2">
          <img src={openaiLogo} alt="OpenAI" className="max-w-8" />
          <span>FormSmash Assistant</span>
        </button>
      </section>
    </SecondaryPageShell>
  );
}
