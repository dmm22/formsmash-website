import PageLayout from "./PageLayout"

export default function CancellationPage() {
  return (
    <PageLayout>
      <h1 className="text-center text-3xl font-bold text-marketing-text">Subscription cancelled</h1>
      <p className="mt-4 text-center leading-relaxed text-marketing-text/75">
        Your FormSmash subscription has been cancelled. You will not be charged again.
      </p>
      <p className="mt-4 text-center text-sm text-marketing-text/60">
        Premium access continues until the end of your current billing period. You can resubscribe
        anytime if you change your mind.
      </p>
    </PageLayout>
  )
}
