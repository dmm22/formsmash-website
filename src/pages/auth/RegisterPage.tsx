import { useEffect, useState, type FormEvent } from "react"
import { AuthCard, AuthField, AuthNavLink } from "../../components/AuthCard"
import { captureClientIdFromUrl } from "../../lib/clientId"
import { registerWithPassword } from "../../services/authService"

export default function RegisterPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [errorMessage, setErrorMessage] = useState("")
  const [statusMessage, setStatusMessage] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    captureClientIdFromUrl()
  }, [])

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setErrorMessage("")
    setStatusMessage("")
    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match.")
      return
    }
    setIsSubmitting(true)
    const result = await registerWithPassword(email, password)
    setIsSubmitting(false)
    if (!result.ok) {
      setErrorMessage(result.message)
      return
    }
    setStatusMessage(result.message)
  }

  return (
    <AuthCard
      title="Create your FormSmash account"
      submitLabel="Sign Up"
      isSubmitting={isSubmitting}
      errorMessage={errorMessage}
      statusMessage={statusMessage}
      onSubmit={handleSubmit}
      footer={
        <>
          Already have an account? <AuthNavLink to="/login">Log in</AuthNavLink>
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
        autoComplete="new-password"
      />
      <AuthField
        id="confirmPassword"
        label="Confirm Password"
        type="password"
        value={confirmPassword}
        onChange={setConfirmPassword}
        autoComplete="new-password"
      />
    </AuthCard>
  )
}
