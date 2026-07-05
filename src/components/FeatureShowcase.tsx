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
  const sectionClasses = `
    flex
    h-screen
    flex-col
    justify-evenly

    border-b
    border-border-primary

    p-4

    ${isAccentBackground ? "bg-accent-gradient text-white" : ""}
  `;

  return (
    <section
      data-nav-background={isAccentBackground ? "accent" : "image"}
      className={sectionClasses}
    >
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
