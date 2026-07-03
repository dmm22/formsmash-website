import Gif from "./Gif";

type GifTextSectionProps = {
  gif: string;
  gifAlt: string;
  title: React.ReactNode;
  bullets: string[];
  isAccentBackground?: boolean;
};

export default function GifTextSection({
  gif,
  gifAlt,
  title,
  bullets,
  isAccentBackground = false,
}: GifTextSectionProps) {
  const containerClasses = `
    relative
  
    flex 
    flex-col 
    flex-col-reverse
    gap-18 
    justify-center 
    items-center

    h-screen

    xl:grid 
    xl:grid-cols-[1fr_1fr] 
    xl:justify-items-center 

    ${isAccentBackground && "bg-accent-gradient text-text-primary -mx-4 p-4 xl:-mx-6 xl:p-6"}
  `;

  return (
    <section
      data-nav-background={isAccentBackground ? "accent" : "image"}
      className={containerClasses}
    >
      <Gif
        src={gif}
        alt={gifAlt}
        className={isAccentBackground ? "xl:order-2" : ""}
      />
      <div
        className={`flex w-full flex-col gap-14 ${isAccentBackground ? "text-white" : ""}`}
      >
        <h2 className="text-center xl:text-left">{title}</h2>
        <ul className="flex list-outside list-disc flex-col gap-6 pl-6 text-xl">
          {bullets.map((bullet) => (
            <li key={bullet}>{bullet}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
