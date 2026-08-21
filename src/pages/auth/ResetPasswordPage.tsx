import { useState, type FormEvent } from "react"
import { useNavigate, useSearchParams } from "react-router-dom"
import { AuthCard, AuthField, AuthNavLink } from "../../components/AuthCard"
import { resetPassword } from "../../services/authService"

export default function ResetPasswordPage() {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const token = searchParams.get("token")?.trim() ?? ""
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [errorMessage, setErrorMessage] = useState("")
  const [statusMessage, setStatusMessage] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setErrorMessage("")
    setStatusMessage("")
    if (!token) {
      setErrorMessage("This reset link is missing a token.")
      return
    }
    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match.")
      return
    }
    setIsSubmitting(true)
    const result = await resetPassword(token, password)
    setIsSubmitting(false)
    if (!result.ok) {
      setErrorMessage(result.message)
      return
    }
    setStatusMessage(result.message)
    window.setTimeout(() => {
      navigate("/login")
    }, 1200)
  }

  return (
    <AuthCard
      title="Choose a new password"
      submitLabel="Update password"
      isSubmitting={isSubmitting}
      errorMessage={errorMessage}
      statusMessage={statusMessage}
      showGoogle={false}
      onSubmit={handleSubmit}
      footer={
        <>
          Back to <AuthNavLink to="/login">Log in</AuthNavLink>
        </>
      }
    >
      <AuthField
        id="password"
        label="New password"
        type="password"
        value={password}
        onChange={setPassword}
        autoComplete="new-password"
      />
      <AuthField
        id="confirmPassword"
        label="Confirm password"
        type="password"
        value={confirmPassword}
        onChange={setConfirmPassword}
        autoComplete="new-password"
      />
    </AuthCard>
  )
}
