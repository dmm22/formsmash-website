import ScrollViewAnchor from "../../../components/ScrollViewAnchor";
import { useScrollViewAnalytics } from "../../../contexts/AnalyticsContext";
import before from "../assets/before.gif";
import after from "../assets/after.gif";
import BeforeAfterComparison from "./BeforeAfterComparison";

export default function BeforeAfter() {
  const { scrollObserverRef } = useScrollViewAnalytics(
    "with_or_without_section_viewed",
  );

  return (
    <section
      data-nav-background="accent"
      className="relative flex h-screen flex-col justify-evenly p-4 text-white lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-24"
    >
      <ScrollViewAnchor ref={scrollObserverRef} />
      <BeforeAfterComparison
        title="Before FormSmash"
        src={before}
        alt="Before FormSmash"
      />
      <BeforeAfterComparison
        title="After FormSmash"
        src={after}
        alt="After FormSmash"
      />
    </section>
  );
}
