type BeforeAndAfterComparisonProps = {
  title: string;
  duration: string;
  src: string;
  alt: string;
};

export default function BeforeAndAfterComparison({
  title,
  duration,
  src,
  alt,
}: BeforeAndAfterComparisonProps) {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <h2 className="text-2xl font-bold">{title}</h2>
      <p>{duration}</p>
      <img src={src} alt={alt} className="min-w-0 rounded-lg shadow-xl" />
    </div>
  );
}
