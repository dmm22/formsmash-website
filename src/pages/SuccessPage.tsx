import PageLayout from "./PageLayout"

export default function SuccessPage() {
  return (
    <PageLayout>
      <div
        className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full border border-primary-edge bg-primary/20"
        aria-hidden="true"
      >
        <svg
          className="h-7 w-7 text-accent"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <h1 className="text-center text-3xl font-bold text-bright">You&apos;re all set</h1>
      <p className="mt-4 text-center text-muted leading-relaxed">
        Thank you for signing up to FormSmash. Your subscription is
        active and you can start using premium features right away.
      </p>
    </PageLayout>
  )
}
