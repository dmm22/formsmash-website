import Gif from "../../../components/Gif";
import ScrollViewAnchor from "../../../components/ScrollViewAnchor";
import { useScrollViewAnalytics } from "../../../contexts/AnalyticsContext";
import before from "../assets/before.gif";
import after from "../assets/after.gif";

const comparisonBlocks = [
  {
    title: "Before FormSmash",
    duration: "(30 seconds)",
    src: before,
    alt: "Before FormSmash",
  },
  {
    title: "After FormSmash",
    duration: "(5 seconds)",
    src: after,
    alt: "After FormSmash",
  },
];

type ComparisonBlockProps = {
  title: string;
  duration: string;
  src: string;
  alt: string;
};

function ComparisonBlock({ title, duration, src, alt }: ComparisonBlockProps) {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <h2 className="text-2xl font-bold">{title}</h2>
      <p>{duration}</p>
      <Gif src={src} alt={alt} />
    </div>
  );
}

export default function WithOrWithoutSection() {
  const { scrollObserverRef } = useScrollViewAnalytics(
    "with_or_without_section_viewed",
  );

  return (
    <section
      data-nav-background="accent"
      className="relative flex h-screen flex-col justify-evenly bg-accent-gradient p-4 text-white"
    >
      <ScrollViewAnchor ref={scrollObserverRef} />
      {comparisonBlocks.map((block) => (
        <ComparisonBlock
          key={block.title}
          title={block.title}
          duration={block.duration}
          src={block.src}
          alt={block.alt}
        />
      ))}
    </section>
  );
}
