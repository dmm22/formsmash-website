type BeforeAfterComparisonProps = {
  title: string;
  src: string;
  alt: string;
};

export default function BeforeAfterComparison({
  title,
  src,
  alt,
}: BeforeAfterComparisonProps) {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <h2 className="text-2xl font-bold">{title}</h2>
      <img src={src} alt={alt} className="min-w-0 rounded-lg shadow-xl" />
    </div>
  );
}
