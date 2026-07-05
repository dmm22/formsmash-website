import Gif from "./Gif";

type FeatureShowcaseProps = {
  src: string;
  alt: string;
  title: React.ReactNode;
  bullets: string[];
  isAccentBackground?: boolean;
};

export default function FeatureShowcase({
  src,
  alt,
  title,
  bullets,
  isAccentBackground = false,
}: FeatureShowcaseProps) {
  return (
    <section
      data-nav-background={isAccentBackground ? "accent" : "image"}
      className="flex h-screen flex-col justify-center gap-24 p-4"
    >
      {title}
      <ul>
        {bullets.map((bullet) => (
          <li key={bullet}>{bullet}</li>
        ))}
      </ul>
      <Gif src={src} alt={alt} />
    </section>
  );
}
