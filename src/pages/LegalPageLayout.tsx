import type { ReactNode } from "react"

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
    <div className="min-h-screen bg-app font-sans text-ink">
      <div className="mx-auto w-full max-w-[720px] px-[4vw] py-12 md:py-16">
        <header className="mb-8 border-b border-line pb-6">
          <div className="mb-3 flex items-center gap-3">
            <img src="/logo.png" alt="" className="h-8 w-8 rounded-lg" width={32} height={32} />
            <span className="text-sm font-semibold tracking-wide text-accent-edge uppercase">
              FormSmash
            </span>
          </div>
          <h1 className="text-3xl font-bold tracking-tight text-bright md:text-4xl">{title}</h1>
          <p className="mt-1 text-sm text-muted-strong">Effective date: {effectiveDate}</p>
        </header>
        <main className="rounded-xl border border-line bg-panel px-6 py-8 md:px-10 md:py-10">
          {children}
        </main>
        <footer className="mt-8 text-center text-sm text-muted-strong">
          FormSmash · Chrome extension for form autofill
        </footer>
      </div>
    </div>
  )
}
