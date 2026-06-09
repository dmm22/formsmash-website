import type { ReactNode } from "react"

type PageLayoutProps = {
  children: ReactNode
}

export default function PageLayout({ children }: PageLayoutProps) {
  return (
    <div className="min-h-screen bg-app font-sans text-ink">
      <div className="mx-auto flex min-h-screen max-w-lg flex-col items-center justify-center px-6 py-16">
        <div className="w-full rounded-2xl border border-line bg-panel p-10 shadow-lg">
          <div className="mb-6 flex items-center justify-center gap-3">
            <img src="/logo.png" alt="" className="h-8 w-8 rounded-lg" width={32} height={32} />
            <p className="text-sm font-semibold tracking-wide text-accent uppercase">FormSmash</p>
          </div>
          {children}
        </div>
      </div>
    </div>
  )
}
