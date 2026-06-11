import { useEffect } from "react"
import heroImage from "../assets/hero.png"
import MarketingLayout from "../components/MarketingLayout"

export default function HomePage() {
  useEffect(() => {
    document.title = "FormSmash — Autofill forms across the web"
  }, [])

  return (
    <MarketingLayout>
      <section className="flex min-h-[calc(100svh-4.5rem)] w-full items-center px-[clamp(1rem,4vw,3rem)]">
        <div className="grid w-full items-center gap-y-10 min-[900px]:grid-cols-2 min-[900px]:gap-x-[clamp(2rem,4vw,3rem)] min-[900px]:gap-y-0">
          <div className="min-w-0">
            <h1 className="text-[clamp(1.75rem,4.2vw,3.25rem)] font-bold leading-[1.12] tracking-tight text-marketing-text">
              Autofill forms
              <br />
              across the web in <span className="text-marketing-accent">1 click</span>
            </h1>
            <p className="mt-3 text-[clamp(0.8125rem,1.5vw,1.0625rem)] leading-relaxed text-marketing-text/75">
              Fill Workday, Greenhouse, LinkedIn, Indeed, and more using your documents.
            </p>
            <p className="mt-2 text-xs text-red-600">
              Waiting on review from the Chrome Web Store. Check back shortly. In the meantime, check
              out a demo{" "}
              <a
                href="https://www.youtube.com/watch?v=bzdHIPAFG54"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold underline hover:text-red-700"
              >
                here
              </a>
              .
            </p>
            <button
              type="button"
              onClick={() =>
                window.alert(
                  "FormSmash is currently in Chrome Web Store review. Check back shortly!",
                )
              }
              className="mt-5 rounded-lg bg-marketing-cta px-5 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
            >
              Coming Soon!
            </button>
          </div>
          <div className="flex min-w-0 w-full items-center justify-center pl-6 min-[900px]:justify-end min-[900px]:pl-8">
            <img
              src={heroImage}
              alt="FormSmash autofill illustration"
              className="h-auto w-full max-h-[min(60svh,720px)] object-contain"
              width={720}
              height={720}
            />
          </div>
        </div>
      </section>
    </MarketingLayout>
  )
}
