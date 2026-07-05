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
    bg-red-100

    relative

    h-full

    grid
    grid-rows-[1fr_1fr]
    place-items-center

    px-4
    py-18

    lg:flex
    lg:gap-8

    lg:p-0
  `;

  return (
    <div className="h-screen lg:flex lg:flex-col">
      <div className="z-50 w-full lg:min-h-18" />
      <section data-nav-background="image" className={heroSectionClasses}>
        <ScrollViewAnchor ref={scrollObserverRef} />
        <div className="mb-6 flex flex-col items-center justify-center gap-2 lg:flex-1 lg:items-start lg:gap-4">
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
        <div className="items-center justify-center lg:flex lg:h-full lg:flex-1 lg:justify-end">
          <img
            src={hero}
            alt="Hero image"
            className="max-h-[40dvh] lg:max-h-full"
          />
        </div>
      </section>
    </div>
  );
}
