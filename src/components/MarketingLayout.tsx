import type { ReactNode } from "react"
import { Link, useLocation } from "react-router-dom"
import MarketingBackground from "./MarketingBackground"

type MarketingLayoutProps = {
  children: ReactNode
}

const navLinkClass = (active: boolean) =>
  active
    ? "text-marketing-text"
    : "text-marketing-text/65 transition-colors hover:text-marketing-text"

export default function MarketingLayout({ children }: MarketingLayoutProps) {
  const { pathname } = useLocation()

  return (
    <div className="relative min-h-screen w-full font-sans text-marketing-text">
      <MarketingBackground />
      <header className="relative z-10 flex w-full items-center justify-between px-[clamp(1rem,4vw,3rem)] py-[clamp(1rem,2vh,1.5rem)]">
        <Link to="/" className="flex items-center gap-2">
          <img src="/logo.png" alt="" className="h-6 w-6 rounded-md" width={24} height={24} />
          <span className="text-[clamp(0.9rem,1.5vw,1rem)] font-semibold text-marketing-text">
            FormSmash
          </span>
        </Link>
        <nav className="flex items-center gap-[clamp(1rem,3vw,2rem)] text-[clamp(0.8rem,1.2vw,0.875rem)]">
          <Link to="/contact" className={navLinkClass(pathname === "/contact")}>
            Contact
          </Link>
        </nav>
      </header>
      <main className="relative z-10 w-full">{children}</main>
    </div>
  )
}
