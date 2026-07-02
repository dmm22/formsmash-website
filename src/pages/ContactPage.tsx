import PageHeader from "../components/PageHeader"

export default function ContactPage() {
  return (
    <main>
      <PageHeader image={<img src="" alt="" />} title="Contact FormSmash" />
      <section className="grid grid-cols-[1fr_1fr] gap-8">
        <div className="flex flex-col gap-2">
          <div>
            <p>
              I set up the FormSmash Assistant with everything it needs to help with troubleshooting, setup, feature questions, and common issues.
            </p>
            <br />
            <p>
              If you'd like a quick answer, it's usually the fastest place to start. If you still need help, run into a bug, or just prefer to reach
              out directly, send me a message below and I'll take a look as soon as I can.
            </p>
            <button>...</button>
          </div>
          <div className="flex items-center gap-2">
            <img src="" alt="" />
            <span>Getting Started</span>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" />
          </div>
          <div className="flex-1">
            <label htmlFor="message">Message</label>
            <textarea id="message" />
          </div>
          <button>Send Message</button>
        </div>
      </section>
    </main>
  )
}
