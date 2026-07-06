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

  const heroSectionClasses = `
    relative

    h-full

    flex
    flex-col
    justify-evenly
    items-center
    gap-8

    px-4

    lg:grid
    lg:grid-cols-2
    lg:place-items-center
    lg:mx-auto
    lg:max-w-[90dvw]
  `;

  return (
    <div className="flex h-screen flex-col">
      <div className="z-40 min-h-18 w-full" />
      <section data-nav-background="image" className={heroSectionClasses}>
        <ScrollViewAnchor ref={scrollObserverRef} />
        <div className="flex flex-col items-center justify-center gap-2 lg:items-start lg:gap-4">
          <h1 className="text-center lg:text-left">
            Never Type Your Resume Into Another Job Application Again
          </h1>
          <p className="text-center text-lg text-text-secondary">
            The Form Shouldn't Be the Hardest Part of Applying.
          </p>
          <button
            onClick={handleCtaButtonClicked}
            className="rounded-lg bg-orange-500 px-5 py-2.5 text-xl text-white hover:bg-orange-600"
          >
            Try it for free
          </button>
        </div>
        <div className="flex items-center justify-center lg:h-full lg:w-full lg:justify-end">
          <img
            src={hero}
            alt="Hero image"
            className="max-h-full lg:max-h-[80dvh]"
          />
        </div>
      </section>
    </div>
  );
}
