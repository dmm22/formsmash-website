import { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom"
import { AuthNavLink } from "../../components/AuthCard"
import success from "../subscription_success/assets/success.png"
import { verifyEmailToken } from "../../services/authService"

export default function VerifyEmailPage() {
  const [searchParams] = useSearchParams()
  const token = searchParams.get("token")?.trim() ?? ""
  const [message, setMessage] = useState("Verifying your email…")
  const [ok, setOk] = useState(false)

  useEffect(() => {
    if (!token) {
      setMessage("This verification link is missing a token.")
      return
    }

    verifyEmailToken(token).then((result) => {
      setOk(result.ok)
      setMessage(result.message)
    })
  }, [token])

  function renderCheckmark() {
    if (!ok) {
      return null
    }

    return <img src={success} alt="" className="max-w-3/5 lg:max-h-[20dvh]" />
  }

  function renderLoginLink() {
    if (!ok) {
      return <AuthNavLink to="/login">Back to log in</AuthNavLink>
    }

    return <AuthNavLink to="/login">Continue to log in</AuthNavLink>
  }

  const title = ok ? "Email verified" : "Email verification"

  return (
    <main className="flex h-screen flex-col items-center justify-center gap-4 p-4">
      {renderCheckmark()}
      <div className="flex flex-col items-center gap-2">
        <h3 className="text-accent">{title}</h3>
        <p className="w-2/3 text-center text-text-secondary">
          {message} {renderLoginLink()}
        </p>
      </div>
    </main>
  )
}
