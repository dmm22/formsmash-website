import { useState, type FormEvent } from "react"
import { AuthCard, AuthField, AuthNavLink } from "../../components/AuthCard"
import { requestPasswordReset } from "../../services/authService"

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("")
  const [errorMessage, setErrorMessage] = useState("")
  const [statusMessage, setStatusMessage] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setErrorMessage("")
    setStatusMessage("")
    setIsSubmitting(true)
    const result = await requestPasswordReset(email)
    setIsSubmitting(false)
    if (!result.ok) {
      setErrorMessage(result.message)
      return
    }
    setStatusMessage(result.message)
  }

  return (
    <AuthCard
      title="Forgot your password?"
      submitLabel="Send reset link"
      isSubmitting={isSubmitting}
      errorMessage={errorMessage}
      statusMessage={statusMessage}
      showGoogle={false}
      onSubmit={handleSubmit}
      footer={
        <>
          Remembered it? <AuthNavLink to="/login">Log in</AuthNavLink>
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
    </AuthCard>
  )
}
