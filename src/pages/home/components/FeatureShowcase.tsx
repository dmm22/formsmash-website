import type { ReactNode } from "react";
import ScrollViewAnchor from "../../../components/ScrollViewAnchor";
import { useScrollViewAnalytics } from "../../../contexts/AnalyticsContext";
import type { ShowcaseEventName } from "../../../services/analyticsService";

type FeatureShowcaseProps = {
  src: string;
  alt: string;
  title: ReactNode;
  bullets: string[];
  scrollEventName: ShowcaseEventName;
};

export default function FeatureShowcase({
  src,
  alt,
  title,
  bullets,
  scrollEventName,
}: FeatureShowcaseProps) {
  const { scrollObserverRef } = useScrollViewAnalytics(scrollEventName);

  return (
    <section
      data-nav-background="image"
      className="relative flex h-screen flex-col justify-evenly border-b border-border-primary p-4 lg:mx-auto lg:max-w-7xl"
    >
      <ScrollViewAnchor ref={scrollObserverRef} />
      {title}
      <ul className="flex list-outside list-disc flex-col gap-6 pl-6 text-xl">
        {bullets.map((bullet) => (
          <li key={bullet}>{bullet}</li>
        ))}
      </ul>
      <img src={src} alt={alt} className="min-w-0 rounded-lg shadow-xl" />
    </section>
  );
}
