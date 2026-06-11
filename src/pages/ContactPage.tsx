import { useEffect, useState, type FormEvent } from "react"
import MarketingLayout from "../components/MarketingLayout"

const CONTACT_API_URL = "https://formwizard.onrender.com/contact"
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const MESSAGE_MAX_LENGTH = 1000

type FormStatus = "idle" | "sending" | "sent" | "error"

export default function ContactPage() {
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [status, setStatus] = useState<FormStatus>("idle")
  const [errorMessage, setErrorMessage] = useState("")

  useEffect(() => {
    document.title = "FormSmash — Contact"
  }, [])

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setErrorMessage("")

    const trimmedEmail = email.trim()
    const trimmedMessage = message.trim()

    if (!EMAIL_PATTERN.test(trimmedEmail)) {
      setStatus("error")
      setErrorMessage("Please enter a valid email address.")
      return
    }

    if (trimmedMessage.length === 0) {
      setStatus("error")
      setErrorMessage("Please enter a message.")
      return
    }

    if (trimmedMessage.length > MESSAGE_MAX_LENGTH) {
      setStatus("error")
      setErrorMessage(`Message must be ${MESSAGE_MAX_LENGTH} characters or fewer.`)
      return
    }

    setStatus("sending")

    const response = await fetch(CONTACT_API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: "-", email: trimmedEmail, message: trimmedMessage }),
    })

    if (response.status === 429) {
      setStatus("error")
      setErrorMessage("Too many messages from your connection. Please try again in an hour.")
      return
    }

    if (!response.ok) {
      setStatus("error")
      setErrorMessage("Something went wrong. Please try again in a moment.")
      return
    }

    setEmail("")
    setMessage("")
    setStatus("sent")
  }

  return (
    <MarketingLayout>
      <section className="w-full px-[clamp(1rem,4vw,3rem)] pb-[clamp(3rem,8vh,6rem)] pt-2">
        <div className="mx-auto max-w-xl text-center">
          <h1 className="text-[clamp(1.75rem,3.5vw,2.5rem)] font-bold tracking-tight text-marketing-text">
            Contact
          </h1>
          <p className="mt-3 text-[clamp(0.8125rem,1.5vw,1.0625rem)] leading-relaxed text-marketing-text/75">
            Have questions or concerns? Send us a message and we will get back to you as soon as we can.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="mx-auto mt-8 w-full max-w-xl space-y-5 rounded-2xl border border-marketing-text/15 p-6 sm:p-8"
        >
          <div>
            <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-marketing-text">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              minLength={3}
              maxLength={256}
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="w-full rounded-xl border border-marketing-text/15 bg-white/60 px-4 py-3 text-marketing-text outline-none ring-marketing-accent/40 focus:ring-2"
            />
          </div>

          <div>
            <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-marketing-text">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              minLength={1}
              maxLength={MESSAGE_MAX_LENGTH}
              rows={6}
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              className="w-full resize-y rounded-xl border border-marketing-text/15 bg-white/60 px-4 py-3 text-marketing-text outline-none ring-marketing-accent/40 focus:ring-2"
            />
          </div>

          <button
            type="submit"
            disabled={status === "sending"}
            className="rounded-lg bg-marketing-cta px-5 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90 disabled:opacity-60"
          >
            {status === "sending" ? "Sending…" : "Send message"}
          </button>

          {status === "sent" ? (
            <p className="text-sm font-medium text-marketing-text">Message sent. Thanks for reaching out.</p>
          ) : null}
          {status === "error" ? (
            <p className="text-sm font-medium text-red-700">{errorMessage}</p>
          ) : null}
        </form>
      </section>
    </MarketingLayout>
  )
}
