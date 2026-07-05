import hero from "../assets/hero.png";
import ScrollViewAnchor from "../../../components/ScrollViewAnchor";
import { useAnalytics, useScrollViewAnalytics } from "../../../contexts/AnalyticsContext";
import { openExternalUrl } from "../../../utils/urlUtils";

export default function Hero() {
  const { sendEvent } = useAnalytics();
  const { scrollObserverRef } = useScrollViewAnalytics("hero_viewed");

  const handleCtaButtonClicked = () => {
    sendEvent("cta_button_clicked");
    openExternalUrl(import.meta.env.VITE_CHROME_LISTING_URL);
  };

  return (
    <section
      data-nav-background="image"
      className="relative flex h-screen flex-col items-center justify-center gap-8 p-4"
    >
      <ScrollViewAnchor ref={scrollObserverRef} />
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
