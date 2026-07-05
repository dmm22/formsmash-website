import Gif from "../../../components/Gif";
import before from "../assets/before.gif";
import after from "../assets/after.gif";
import useScrollViewAnalytics from "../hooks/useScrollViewAnalytics";

export default function WithOrWithoutSection() {
  const observerRef = useScrollViewAnalytics("with_or_without_section_viewed");

  return (
    <section className="relative flex h-screen flex-col justify-evenly bg-accent-gradient p-4 text-white">
      <div
        ref={observerRef}
        aria-hidden
        className="pointer-events-none absolute top-1/2 left-0 h-px w-full opacity-0"
      />
      <div className="flex flex-col items-center justify-center gap-4">
        <h2 className="text-2xl font-bold">Before FormSmash</h2>
        <p>(30 seconds)</p>
        <Gif src={before} alt="Before FormSmash" />
      </div>
      <div className="flex flex-col items-center justify-center gap-4">
        <h2 className="text-2xl font-bold">After FormSmash</h2>
        <p>(5 seconds)</p>
        <Gif src={after} alt="After FormSmash" />
      </div>
    </section>
  );
}
