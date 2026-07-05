import PageIntro from "../../components/PageIntro";
import send from "./assets/send.png";
import openaiLogo from "./assets/openai_logo.png";
import { BiSolidBook } from "react-icons/bi";

export default function ContactPage() {
  return (
    <main className="flex flex-col gap-6 border-b border-border-primary p-4">
      <PageIntro src={send} alt="Send" title="Contact FormSmash" />
      <section className="mt-8 flex flex-1 flex-col gap-2">
        <div className="flex flex-col gap-1">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            className="rounded-lg border border-border-primary p-3"
          />
        </div>
        <div className="flex flex-1 flex-col gap-1">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            className="h-64 rounded-lg border border-border-primary p-3"
          />
        </div>
        <button className="w-full rounded-lg bg-accent px-4 py-2 text-white">
          Send Message
        </button>
      </section>
      <hr className="my-4 border-border-primary" />
      <section className="flex flex-col gap-8">
        <p>
          I set up the FormSmash Assistant with everything it needs to help with
          troubleshooting, setup, feature questions, and common issues.
        </p>
        <p>
          If you'd like a quick answer, it's usually the fastest place to start.
          If you still need help, run into a bug, or just prefer to reach out
          directly, send me a message below and I'll take a look as soon as I
          can.
        </p>
        <button className="flex w-max items-center gap-2 rounded-lg border border-border-accent bg-bg-accent-light p-2">
          <img src={openaiLogo} alt="OpenAI" className="max-w-10" />
          <span>FormSmash Assistant</span>
        </button>
        <div className="flex items-center gap-2 text-accent">
          <BiSolidBook className="size-5" />
          <strong>Getting Started</strong>
        </div>
      </section>
    </main>
  );
}
