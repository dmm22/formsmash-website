import success from "../subscription_success/assets/success.png"

export default function AuthSuccessPage() {
  return (
    <main className="flex h-screen flex-col items-center justify-center gap-4 p-4">
      <img src={success} alt="" className="max-w-3/5 lg:max-h-[20dvh]" />
      <div className="flex flex-col items-center gap-2">
        <h3 className="text-accent">You&apos;re signed in</h3>
        <p className="w-2/3 text-center text-text-secondary">
          You&apos;re all set. You can close this tab and return to the FormSmash popup.
        </p>
      </div>
    </main>
  )
}
