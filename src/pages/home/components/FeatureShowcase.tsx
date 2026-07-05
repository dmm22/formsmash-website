import type { ReactNode } from "react";
import Gif from "../../../components/Gif";
import type { ShowcaseEventName } from "../../../hooks/useAnalyticsEvents";
import useScrollViewAnalytics from "../hooks/useScrollViewAnalytics";

type FeatureShowcaseProps = {
  src: string;
  alt: string;
  title: ReactNode;
  bullets: string[];
  isAccentBackground?: boolean;
  scrollEventName: ShowcaseEventName;
};

export default function FeatureShowcase({
  src,
  alt,
  title,
  bullets,
  isAccentBackground = false,
  scrollEventName,
}: FeatureShowcaseProps) {
  const observerRef = useScrollViewAnalytics(scrollEventName);

  const sectionClasses = `
    relative
    flex
    h-screen
    flex-col
    justify-evenly

    border-b
    border-border-primary

    p-4

    ${isAccentBackground ? "bg-accent-gradient text-white" : ""}
  `;

  return (
    <section
      data-nav-background={isAccentBackground ? "accent" : "image"}
      className={sectionClasses}
    >
      <div
        ref={observerRef}
        aria-hidden
        className="pointer-events-none absolute top-1/2 left-0 h-px w-full opacity-0"
      />
      {title}
      <ul className="flex list-outside list-disc flex-col gap-6 pl-6 text-xl">
        {bullets.map((bullet) => (
          <li key={bullet}>{bullet}</li>
        ))}
      </ul>
      <Gif src={src} alt={alt} />
    </section>
  );
}
