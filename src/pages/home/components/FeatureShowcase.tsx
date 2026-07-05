import type { ReactNode } from "react";
import Gif from "../../../components/Gif";
import ScrollViewAnchor from "../../../components/ScrollViewAnchor";
import { useScrollViewAnalytics } from "../../../contexts/AnalyticsContext";
import type { ShowcaseEventName } from "../../../services/analyticsService";

type FeatureShowcaseProps = {
  src: string;
  alt: string;
  title: ReactNode;
  bullets: string[];
  isAccentBackground?: boolean;
  scrollEventName: ShowcaseEventName;
};

function getFeatureShowcaseSectionClasses(isAccentBackground: boolean) {
  const baseClasses = `
    relative
    flex
    h-screen
    flex-col
    justify-evenly

    border-b
    border-border-primary

    p-4
  `;

  if (isAccentBackground) {
    return `${baseClasses} bg-accent-gradient text-white`;
  }

  return baseClasses;
}

export default function FeatureShowcase({
  src,
  alt,
  title,
  bullets,
  isAccentBackground = false,
  scrollEventName,
}: FeatureShowcaseProps) {
  const { scrollObserverRef } = useScrollViewAnalytics(scrollEventName);

  return (
    <section
      data-nav-background={isAccentBackground ? "accent" : "image"}
      className={getFeatureShowcaseSectionClasses(isAccentBackground)}
    >
      <ScrollViewAnchor ref={scrollObserverRef} />
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
