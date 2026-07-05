import hero from "../assets/hero.png";

export default function Hero() {
  return (
    <section
      data-nav-background="image"
      className="flex h-screen flex-col items-center justify-center gap-8 p-4"
    >
      <div className="mb-6 flex flex-col items-center justify-center gap-2">
        <h1 className="text-center">
          Never Type Your Resume Into Another Job Application Again
        </h1>
        <p className="text-center text-lg text-text-secondary">
          The Form Shouldn't Be the Hardest Part of Applying.
        </p>
        <button className="rounded-lg bg-orange-500 px-5 py-2.5 text-xl text-white hover:bg-orange-600">
          Try it for free
        </button>
      </div>
      <div>
        <img src={hero} alt="Hero image" className="max-h-11/12" />
      </div>
    </section>
  );
}
