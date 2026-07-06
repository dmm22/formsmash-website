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
  isRowReverse?: boolean;
};

export default function FeatureShowcase({
  src,
  alt,
  title,
  bullets,
  scrollEventName,
  isRowReverse = false,
}: FeatureShowcaseProps) {
  const { scrollObserverRef } = useScrollViewAnalytics(scrollEventName);

  const getSectionClasses = () => {
    const baseClasses = `
      h-screen

      p-4

      relative

      flex
      flex-col
      justify-evenly

      lg:max-w-[90dvw]

      lg:p-0
      lg:mx-auto

      lg:flex-row
      lg:items-center
      lg:justify-between
      lg:gap-24
    `;

    if (isRowReverse) {
      return `${baseClasses} lg:flex-row-reverse`;
    }

    return baseClasses;
  };

  return (
    <section data-nav-background="image" className={getSectionClasses()}>
      <ScrollViewAnchor ref={scrollObserverRef} />
      <div className="flex flex-col gap-14">
        {title}
        <ul className="flex list-outside list-disc flex-col gap-6 pl-6 text-2xl">
          {bullets.map((bullet) => (
            <li key={bullet}>{bullet}</li>
          ))}
        </ul>
      </div>
      <div>
        <img
          src={src}
          alt={alt}
          className="min-w-0 rounded-lg shadow-xl lg:min-w-[45dvw]"
        />
      </div>
    </section>
  );
}
