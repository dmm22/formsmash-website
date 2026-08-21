import { useEffect, useRef, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useAuth } from "../contexts/AuthContext"

function userInitial(email: string) {
  const trimmed = email.trim()
  if (trimmed === "") {
    return "?"
  }
  return trimmed[0]!.toUpperCase()
}

export default function AccountMenu() {
  const { authReady, user, logout } = useAuth()
  const navigate = useNavigate()
  const [open, setOpen] = useState(false)
  const rootRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    function onDocumentClick(event: MouseEvent) {
      if (!rootRef.current) {
        return
      }
      if (rootRef.current.contains(event.target as Node)) {
        return
      }
      setOpen(false)
    }
    document.addEventListener("mousedown", onDocumentClick)
    return () => {
      document.removeEventListener("mousedown", onDocumentClick)
    }
  }, [])

  if (!authReady) {
    return null
  }

  if (user === null) {
    return (
      <Link
        to="/login"
        className="text-sm transition-colors hover:text-accent"
      >
        Log In
      </Link>
    )
  }

  async function handleLogout() {
    setOpen(false)
    await logout()
    navigate("/logout")
  }

  function renderAvatar() {
    if (user!.avatar) {
      return (
        <img
          src={user!.avatar}
          alt=""
          referrerPolicy="no-referrer"
          className="size-9 rounded-full border border-border-primary object-cover"
        />
      )
    }
    return (
      <span className="flex size-9 items-center justify-center rounded-full bg-accent text-sm font-semibold text-white">
        {userInitial(user!.email)}
      </span>
    )
  }

  function renderMenu() {
    if (!open) {
      return null
    }
    return (
      <div className="absolute top-full right-0 mt-2 min-w-40 rounded-lg border border-border-primary bg-white py-1 shadow-lg">
        <button
          type="button"
          onClick={() => {
            void handleLogout()
          }}
          className="block w-full px-4 py-2 text-left text-sm hover:bg-bg-accent-light"
        >
          Logout
        </button>
      </div>
    )
  }

  return (
    <div ref={rootRef} className="relative">
      <button
        type="button"
        aria-label="Account menu"
        onClick={() => setOpen((value) => !value)}
        className="rounded-full outline-none focus-visible:ring-2 focus-visible:ring-accent"
      >
        {renderAvatar()}
      </button>
      {renderMenu()}
    </div>
  )
}
