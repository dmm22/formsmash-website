import { useEffect, useRef, useState } from "react"
import { Link } from "react-router-dom"
import { IoMdMenu } from "react-icons/io"
import logo from "../assets/logo.png"

type NavbarProps = {
  navColorMode: "light" | "dark"
}

export default function Navbar({ navColorMode }: NavbarProps) {
  const [menuOpen, setIsMenuOpen] = useState(false)
  const [menuMounted, setMenuMounted] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)
  const panelRef = useRef<HTMLUListElement>(null)

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  const openMenu = () => {
    if (menuMounted && !menuOpen) {
      setIsMenuOpen(true)
      return
    }

    setMenuMounted(true)
  }

  const toggleMenu = () => {
    if (menuOpen) {
      closeMenu()
      return
    }

    openMenu()
  }

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (!menuRef.current) return
      if (menuRef.current.contains(event.target as Node)) return
      if (!menuOpen) return

      closeMenu()
    }

    document.addEventListener("mousedown", handleClickOutside)

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [menuOpen])

  useEffect(() => {
    if (!menuMounted) return

    const frame = requestAnimationFrame(() => {
      setIsMenuOpen(true)
    })

    return () => cancelAnimationFrame(frame)
  }, [menuMounted])

  const handlePanelTransitionEnd = (event: React.TransitionEvent<HTMLUListElement>) => {
    if (event.target !== panelRef.current) return
    if (event.propertyName !== "transform") return
    if (menuOpen) return

    setMenuMounted(false)
  }

  return (
    <>
      <nav
        className={`fixed top-0 left-0 z-50 flex w-full items-center justify-between p-4 bg-background ${navColorMode === "light" ? "text-white" : ""}`}
      >
        <Link to="/">
          <div className="flex items-center gap-2">
            <img src={logo} alt="Formsmash Logo" />
            <span className="font-semibold invisible lg:visible">FormSmash</span>
          </div>
        </Link>

        <ul className="hidden md:flex items-center gap-10">
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>

        <div ref={menuRef} className="relative md:hidden">
          <button className="relative z-50 outline-none" onClick={toggleMenu}>
            <IoMdMenu className={`${menuOpen ? "text-white" : "block"}`} size={32} />
          </button>

          {menuMounted && (
            <ul
              ref={panelRef}
              onTransitionEnd={handlePanelTransitionEnd}
              className={`fixed right-0 top-0 flex h-96 w-screen flex-col items-center justify-center gap-14 bg-accent p-4 text-2xl text-white shadow-lg transition-transform duration-300 ease-in-out ${menuOpen ? "translate-y-0" : "-translate-y-full"}`}
            >
              <li>
                <Link to="/" onClick={closeMenu}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" onClick={closeMenu}>
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" onClick={closeMenu}>
                  Contact
                </Link>
              </li>
            </ul>
          )}
        </div>
      </nav>

      <img className="invisible p-4" src={logo} alt="Formsmash Logo" />
    </>
  )
}
