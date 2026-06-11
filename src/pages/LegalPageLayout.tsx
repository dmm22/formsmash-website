import type { ReactNode } from "react"
import MarketingLayout from "../components/MarketingLayout"

type LegalPageLayoutProps = {
  title: string
  effectiveDate: string
  children: ReactNode
}

export default function LegalPageLayout({
  title,
  effectiveDate,
  children,
}: LegalPageLayoutProps) {
  return (
    <MarketingLayout>
      <section className="w-full px-[clamp(1rem,4vw,3rem)] pb-[clamp(3rem,8vh,6rem)] pt-2">
        <header className="mb-8 border-b border-marketing-text/15 pb-6">
          <h1 className="text-[clamp(1.75rem,3.5vw,2.5rem)] font-bold tracking-tight text-marketing-text">
            {title}
          </h1>
          <p className="mt-1 text-sm text-marketing-text/60">Effective date: {effectiveDate}</p>
        </header>
        <main className="w-full rounded-2xl border border-marketing-text/15 px-6 py-8 md:px-10 md:py-10">
          {children}
        </main>
        <footer className="mt-8 text-sm text-marketing-text/60">
          FormSmash · Chrome extension for form autofill
        </footer>
      </section>
    </MarketingLayout>
  )
}
