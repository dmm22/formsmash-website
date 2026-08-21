import { AuthNavLink } from "../../components/AuthCard"

export default function LoggedOutPage() {
  return (
    <main className="flex h-screen flex-col items-center justify-center gap-4 p-4">
      <div className="flex flex-col items-center gap-2">
        <h3 className="text-accent">You&apos;re logged out</h3>
        <p className="w-2/3 text-center text-text-secondary">
          You can close this tab and return to the FormSmash popup. Need to sign
          in again? <AuthNavLink to="/login">Log in</AuthNavLink>
        </p>
      </div>
    </main>
  )
}
