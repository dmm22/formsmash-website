type PageIntroProps = {
  src: string;
  alt: string;
  title: string;
};

export default function PageIntro({ src, alt, title }: PageIntroProps) {
  return (
    <>
      <header className="flex flex-col items-center gap-4 pt-8">
        <img src={src} alt={alt} className="max-w-3/5" />
        <h1 className="text-accent">{title}</h1>
      </header>
    </>
  );
}
