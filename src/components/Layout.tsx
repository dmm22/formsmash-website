import background from "../assets/background.png"
import Navbar from "./Navbar"

type LayoutProps = {
  children: React.ReactNode
  navColorMode: "light" | "dark"
}

export default function Layout({ children, navColorMode }: LayoutProps) {
  return (
    <>
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-10 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${background})` }}
      />
      <Navbar navColorMode={navColorMode} />
      {children}
    </>
  )
}
