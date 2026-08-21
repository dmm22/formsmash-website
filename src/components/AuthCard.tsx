import type { FormEvent, ReactNode } from "react"
import { Link } from "react-router-dom"
import SecondaryPageShell from "../components/SecondaryPageShell"
import { getGoogleStartUrl } from "../lib/axios"

type AuthCardProps = {
  title: string
  children: ReactNode
  footer: ReactNode
  onSubmit: (event: FormEvent<HTMLFormElement>) => void
  submitLabel: string
  isSubmitting: boolean
  errorMessage: string
  statusMessage?: string
  showGoogle?: boolean
}

export function AuthCard({
  title,
  children,
  footer,
  onSubmit,
  submitLabel,
  isSubmitting,
  errorMessage,
  statusMessage = "",
  showGoogle = true,
}: AuthCardProps) {
  function renderError() {
    if (!errorMessage) {
      return null
    }
    return <p className="text-sm text-red-600">{errorMessage}</p>
  }

  function renderStatus() {
    if (!statusMessage) {
      return null
    }
    return <p className="text-sm text-accent">{statusMessage}</p>
  }

  function renderGoogle() {
    if (!showGoogle) {
      return null
    }
    return (
      <>
        <div className="flex items-center gap-3 text-sm text-text-secondary">
          <div className="h-px flex-1 bg-border-primary" />
          <span>Or continue with</span>
          <div className="h-px flex-1 bg-border-primary" />
        </div>
        <a
          href={getGoogleStartUrl()}
          className="flex w-full items-center justify-center gap-2 rounded-lg border border-border-primary bg-white px-4 py-3 font-medium text-text-primary hover:bg-bg-accent-light"
        >
          <GoogleMark />
          Continue with Google
        </a>
      </>
    )
  }

  return (
    <SecondaryPageShell title={title} excludeHr titleAs="h3">
      <div className="mx-auto mt-6 w-full max-w-md">
        <div className="rounded-2xl border border-border-primary bg-white p-6 shadow-xl lg:p-8">
          <form className="flex flex-col gap-4" onSubmit={onSubmit}>
            {children}
            {renderError()}
            {renderStatus()}
            <button
              type="submit"
              disabled={isSubmitting}
              className="mt-1 w-full rounded-lg bg-accent px-4 py-3 font-semibold text-white hover:bg-accent-hover disabled:opacity-60"
            >
              {isSubmitting ? "Please wait…" : submitLabel}
            </button>
            {renderGoogle()}
            <div className="pt-1 text-center text-sm text-text-secondary">{footer}</div>
          </form>
        </div>
      </div>
    </SecondaryPageShell>
  )
}

export function AuthField({
  id,
  label,
  type,
  value,
  onChange,
  autoComplete,
}: {
  id: string
  label: string
  type: string
  value: string
  onChange: (value: string) => void
  autoComplete?: string
}) {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={id} className="text-sm text-text-secondary">
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        required
        autoComplete={autoComplete}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="rounded-lg border border-border-primary bg-white p-3 outline-none focus:border-accent"
      />
    </div>
  )
}

export function AuthNavLink({ to, children }: { to: string; children: ReactNode }) {
  return (
    <Link to={to} className="font-medium text-accent hover:text-accent-hover">
      {children}
    </Link>
  )
}

function GoogleMark() {
  return (
    <svg width="18" height="18" viewBox="0 0 48 48" aria-hidden>
      <path
        fill="#FFC107"
        d="M43.6 20.5H42V20H24v8h11.3C33.7 32.7 29.3 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3 0 5.8 1.1 7.9 3l5.7-5.7C34.2 6.1 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.2-.1-2.3-.4-3.5z"
      />
      <path
        fill="#FF3D00"
        d="M6.3 14.7l6.6 4.8C14.7 16 19 12 24 12c3 0 5.8 1.1 7.9 3l5.7-5.7C34.2 6.1 29.3 4 24 4 16.1 4 9.2 8.5 6.3 14.7z"
      />
      <path
        fill="#4CAF50"
        d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2C29.2 35.3 26.7 36 24 36c-5.2 0-9.6-3.3-11.3-7.9l-6.5 5C9.1 39.5 16 44 24 44z"
      />
      <path
        fill="#1976D2"
        d="M43.6 20.5H42V20H24v8h11.3c-1.1 3.1-3.6 5.5-6.5 6.6l.1.1 6.2 5.2C36.8 38.4 44 33 44 24c0-1.2-.1-2.3-.4-3.5z"
      />
    </svg>
  )
}
