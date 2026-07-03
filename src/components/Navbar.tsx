import { useEffect, useRef, useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { IoMdMenu } from "react-icons/io"
import logo from "../assets/logo.png"

export default function Navbar() {
  const location = useLocation()

  const [menuOpen, setIsMenuOpen] = useState(false)
  const [menuMounted, setMenuMounted] = useState(false)
  const [navColorClass, setNavColorClass] = useState("text-primary")

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
    if (location.pathname !== "/") {
      setNavColorClass("text-primary")
      return
    }

    const handleScroll = () => {
      const sectionIndex = Math.floor(window.scrollY / window.innerHeight)

      setNavColorClass(sectionIndex % 2 === 0 ? "text-primary" : "text-white")
    }

    handleScroll()

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [location.pathname])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!menuRef.current) {
        return
      }

      if (menuRef.current.contains(event.target as Node)) {
        return
      }

      if (!menuOpen) {
        return
      }

      closeMenu()
    }

    document.addEventListener("mousedown", handleClickOutside)

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [menuOpen])

  useEffect(() => {
    if (!menuMounted) {
      return
    }

    const frame = requestAnimationFrame(() => {
      setIsMenuOpen(true)
    })

    return () => cancelAnimationFrame(frame)
  }, [menuMounted])

  const handlePanelTransitionEnd = (event: React.TransitionEvent<HTMLUListElement>) => {
    if (event.target !== panelRef.current) {
      return
    }

    if (event.propertyName !== "transform") {
      return
    }

    if (menuOpen) {
      return
    }

    setMenuMounted(false)
  }

  return (
    <>
      <nav
        className={`fixed top-0 left-0 z-50 flex w-full items-center justify-between bg-background p-4 lg:p-8 ${navColorClass} transition-colors duration-300 ease-in-out`}
      >
        <Link to="/">
          <div className="flex items-center gap-2">
            <img src={logo} alt="Formsmash Logo" />
            <span className="invisible font-semibold lg:visible">FormSmash</span>
          </div>
        </Link>

        <ul className="hidden items-center gap-10 md:flex">
          <li>
            <Link to="/about" className="transition-colors hover:text-accent">
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" className="transition-colors hover:text-accent">
              Contact
            </Link>
          </li>
        </ul>

        <div ref={menuRef} className="relative md:hidden">
          <button className="relative z-50 outline-none" onClick={toggleMenu}>
            <IoMdMenu className={menuOpen ? "text-white" : navColorClass} size={32} />
          </button>

          {menuMounted && (
            <ul
              ref={panelRef}
              onTransitionEnd={handlePanelTransitionEnd}
              className={`fixed top-0 right-0 flex h-96 w-screen flex-col items-center justify-center gap-14 bg-accent p-4 text-2xl text-white shadow-lg transition-transform duration-300 ease-in-out ${
                menuOpen ? "translate-y-0" : "-translate-y-full"
              }`}
            >
              <li>
                <Link to="/" onClick={closeMenu} className="transition-colors hover:text-accent">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" onClick={closeMenu} className="transition-colors hover:text-accent">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" onClick={closeMenu} className="transition-colors hover:text-accent">
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
