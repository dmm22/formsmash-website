import { useEffect, useState, type FormEvent } from "react"
import { useNavigate, useSearchParams } from "react-router-dom"
import { AuthCard, AuthField, AuthNavLink } from "../../components/AuthCard"
import { useAuth } from "../../contexts/AuthContext"
import { captureClientIdFromUrl } from "../../lib/clientId"
import { loginWithPassword } from "../../services/authService"

export default function LoginPage() {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const { refreshUser } = useAuth()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [errorMessage, setErrorMessage] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    captureClientIdFromUrl()
  }, [])

  const googleError = searchParams.get("error") === "google"
  const initialError = googleError ? "Google sign-in didn't complete. Try again." : ""

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setErrorMessage("")
    setIsSubmitting(true)
    const result = await loginWithPassword(email, password)
    if (!result.ok) {
      setErrorMessage(result.message)
      setIsSubmitting(false)
      return
    }
    await refreshUser()
    setIsSubmitting(false)
    navigate("/auth-success")
  }

  return (
    <AuthCard
      title="Log in to FormSmash"
      submitLabel="Log In"
      isSubmitting={isSubmitting}
      errorMessage={errorMessage || initialError}
      onSubmit={handleSubmit}
      footer={
        <>
          Don&apos;t have an account? <AuthNavLink to="/register">Sign up</AuthNavLink>
        </>
      }
    >
      <AuthField
        id="email"
        label="Email"
        type="email"
        value={email}
        onChange={setEmail}
        autoComplete="email"
      />
      <AuthField
        id="password"
        label="Password"
        type="password"
        value={password}
        onChange={setPassword}
        autoComplete="current-password"
      />
      <div className="-mt-1 text-right text-sm">
        <AuthNavLink to="/forgot-password">Forgot password</AuthNavLink>
      </div>
    </AuthCard>
  )
}
