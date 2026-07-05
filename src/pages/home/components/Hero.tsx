import hero from "../assets/hero.png";
import ScrollViewAnchor from "../../../components/ScrollViewAnchor";
import {
  useAnalytics,
  useScrollViewAnalytics,
} from "../../../contexts/AnalyticsContext";
import { openExternalUrl } from "../../../utils/urlUtils";

export default function Hero() {
  const { sendEvent } = useAnalytics();
  const { scrollObserverRef } = useScrollViewAnalytics("hero_viewed");

  const handleCtaButtonClicked = () => {
    sendEvent("cta_button_clicked");
    openExternalUrl(import.meta.env.VITE_CHROME_LISTING_URL);
  };

  return (
    <div className="h-screen grid-rows-[36_1fr] lg:grid">
      <div className="w-full bg-purple-400" />
      <section
        data-nav-background="image"
        className="relative flex h-full grid-cols-2 flex-col items-center justify-center gap-8 bg-green-100 lg:grid"
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
        <div className="h-full items-center justify-center bg-red-200 lg:flex">
          <img src={hero} alt="Hero image" className="max-h-11/12" />
        </div>
      </section>
    </div>
  );
}
