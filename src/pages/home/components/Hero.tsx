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
    <div data-hero-section className="flex h-screen w-full flex-col">
      <div className="z-40 min-h-18 w-full" />
      <section className="relative flex h-full w-full items-center px-4">
        <ScrollViewAnchor ref={scrollObserverRef} />
        <div className="mx-auto grid w-full max-w-[78rem] items-center gap-8 lg:grid-cols-2">
          <div className="flex flex-col items-center justify-center gap-2 lg:items-start lg:gap-4">
            <h1 className="text-center lg:text-left">
              Stop entering the same information on every application
            </h1>
            <p className="text-center text-lg text-text-secondary lg:text-left">
              Free. No account required
            </p>
            <button
              onClick={handleCtaButtonClicked}
              className="rounded-lg bg-accent px-5 py-2.5 text-xl text-white hover:bg-accent-hover"
            >
              Add to Chrome
            </button>
          </div>
          <div className="flex items-center justify-center lg:h-full lg:justify-end">
            <img
              src={hero}
              alt="Hero image"
              className="max-h-full lg:max-h-[80dvh]"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
