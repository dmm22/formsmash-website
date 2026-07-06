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
      lg:justify-center
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
      <div className="flex flex-col gap-14 lg:min-w-1/3">
        {title}
        <ul className="mx-auto flex list-outside list-disc flex-col gap-6 pl-6 text-2xl lg:mx-0">
          {bullets.map((bullet) => (
            <li key={bullet}>{bullet}</li>
          ))}
        </ul>
      </div>
      <div className="lg:flex lg:max-w-full lg:justify-center">
        <img
          src={src}
          alt={alt}
          className="w-auto min-w-0 rounded-lg lg:h-[65dvh]"
        />
      </div>
    </section>
  );
}
