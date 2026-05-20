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
      <div className="mx-auto w-full max-w-3xl px-6 py-12 md:py-16 lg:max-w-4xl">
        <header className="mb-8 border-b border-line pb-6">
          <span className="mb-2 block text-sm font-semibold tracking-wide text-accent uppercase">
            FormWizard
          </span>
          <h1 className="text-3xl font-bold tracking-tight text-bright md:text-4xl">
            {title}
          </h1>
          <p className="mt-1 text-sm text-muted-strong">Effective date: {effectiveDate}</p>
        </header>
        <main className="rounded-2xl border border-line bg-panel px-6 py-8 md:px-10 md:py-10">
          {children}
        </main>
        <footer className="mt-8 text-center text-sm text-muted-strong">
          FormWizard · Chrome extension for job application autofill
        </footer>
      </div>
    </div>
  )
}
