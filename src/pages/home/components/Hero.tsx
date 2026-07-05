import hero from "../assets/hero.png";
import useAnalyticsEvents from "../../../hooks/useAnalyticsEvents";
import useScrollViewAnalytics from "../hooks/useScrollViewAnalytics";

export default function Hero() {
  const observerRef = useScrollViewAnalytics("hero_viewed");
  const { sendEvent } = useAnalyticsEvents();

  const handleCtaButtonClicked = () => {
    sendEvent("cta_button_clicked");
    window.open(
      import.meta.env.VITE_CHROME_LISTING_URL,
      "_blank",
      "noopener,noreferrer",
    );
  };

  return (
    <section
      data-nav-background="image"
      className="relative flex h-screen flex-col items-center justify-center gap-8 p-4"
    >
      <div
        ref={observerRef}
        aria-hidden
        className="pointer-events-none absolute top-1/2 left-0 h-px w-full opacity-0"
      />
      <div className="mb-6 flex flex-col items-center justify-center gap-2">
        <h1 className="text-center">
          Never Type Your Resume Into Another Job Application Again
        </h1>
        <p className="text-center text-lg text-text-secondary">
          The Form Shouldn't Be the Hardest Part of Applying.
        </p>
        <button
          onClick={handleCtaButtonClicked}
          className="rounded-lg bg-accent px-5 py-2.5 text-xl text-white hover:bg-accent-hover"
        >
          Try it for free
        </button>
      </div>
      <div>
        <img src={hero} alt="Hero image" className="max-h-11/12" />
      </div>
    </section>
  );
}
