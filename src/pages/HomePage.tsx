import PageLayout from "./PageLayout"

export default function HomePage() {
  return (
    <PageLayout>
      <h1 className="text-center text-3xl font-bold text-bright">Welcome to FormSmash</h1>
      <p className="mt-4 text-center text-muted leading-relaxed">
        Unlock advanced form tools, priority support, and everything you need to build smarter workflows.
      </p>
      <p className="mt-6 text-center text-sm text-muted-strong">Complete checkout to activate your subscription.</p>
    </PageLayout>
  )
}
