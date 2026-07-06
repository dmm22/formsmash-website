import success from "./assets/success.png";

export default function AboutPage() {
  return (
    <main className="flex h-screen flex-col items-center justify-center gap-4">
      <img src={success} alt="Success" className="max-w-3/5 lg:max-h-[20dvh]" />
      <div className="flex flex-col items-center gap-2">
        <h2 className="text-accent">You're all set</h2>
        <p className="w-2/3 text-center text-text-secondary">
          Thank you for signing up to FormSmash. Your subscription is active and
          you can start using premium features right away.
        </p>
      </div>
    </main>
  );
}
