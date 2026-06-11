import PageLayout from "./PageLayout"

export default function SuccessPage() {
  return (
    <PageLayout>
      <div
        className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full border border-marketing-accent/30 bg-marketing-accent/10"
        aria-hidden="true"
      >
        <svg
          className="h-7 w-7 text-marketing-accent"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <h1 className="text-center text-3xl font-bold text-marketing-text">You&apos;re all set</h1>
      <p className="mt-4 text-center leading-relaxed text-marketing-text/75">
        Thank you for signing up to FormSmash. Your subscription is active and you can start using
        premium features right away.
      </p>
    </PageLayout>
  )
}
