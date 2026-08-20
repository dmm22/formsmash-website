import ScrollViewAnchor from "../../../components/ScrollViewAnchor";
import { useScrollViewAnalytics } from "../../../contexts/AnalyticsContext";
import before from "../assets/before.gif";
import after from "../assets/after.gif";

export default function BeforeAfter() {
  const { scrollObserverRef } = useScrollViewAnalytics(
    "with_or_without_section_viewed",
  );

  return (
    <section
      className="relative flex h-screen flex-col justify-evenly p-4 text-white lg:mx-auto lg:grid lg:max-w-[90dvw] lg:grid-cols-2 lg:gap-24 lg:p-0"
    >
      <ScrollViewAnchor ref={scrollObserverRef} />

      <div className="flex flex-col items-center justify-center gap-4">
        <div className="text-3xl lg:text-5xl">Before FormSmash</div>
        <img
          src={before}
          alt="Before FormSmash"
          className="min-w-0 rounded-lg shadow-xl lg:w-full"
        />
      </div>
      <div className="flex flex-col items-center justify-center gap-4">
        <h2 className="text-2xl">After FormSmash</h2>
        <img
          src={after}
          alt="After FormSmash"
          className="min-w-0 rounded-lg shadow-xl lg:w-full"
        />
      </div>
    </section>
  );
}
