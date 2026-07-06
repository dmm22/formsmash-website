import ScrollViewAnchor from "../../../components/ScrollViewAnchor";
import { useScrollViewAnalytics } from "../../../contexts/AnalyticsContext";
import before from "../assets/before.gif";
import after from "../assets/after.gif";
import BeforeAndAfterComparison from "./BeforeAndAfterComparison";

export default function BeforeAndAfter() {
  const { scrollObserverRef } = useScrollViewAnalytics(
    "with_or_without_section_viewed",
  );

  return (
    <section
      data-nav-background="accent"
      className="relative flex h-screen flex-col justify-evenly p-4 text-white lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-24"
    >
      <ScrollViewAnchor ref={scrollObserverRef} />
      <BeforeAndAfterComparison
        title="Before FormSmash"
        duration="(30 seconds)"
        src={before}
        alt="Before FormSmash"
      />
      <BeforeAndAfterComparison
        title="After FormSmash"
        duration="(5 seconds)"
        src={after}
        alt="After FormSmash"
      />
    </section>
  );
}
