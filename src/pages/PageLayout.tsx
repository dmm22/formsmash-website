import type { ReactNode } from "react"
import MarketingLayout from "../components/MarketingLayout"

type PageLayoutProps = {
  children: ReactNode
}

export default function PageLayout({ children }: PageLayoutProps) {
  return (
    <MarketingLayout>
      <section className="flex min-h-[calc(100svh-4.5rem)] w-full items-center px-[clamp(1rem,4vw,3rem)]">
        <div className="w-full rounded-2xl border border-marketing-text/15 p-8 sm:p-10">
          {children}
        </div>
      </section>
    </MarketingLayout>
  )
}
