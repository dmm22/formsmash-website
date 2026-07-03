type GifProps = {
  src: string;
  alt: string;
  className?: string;
};

export default function Gif({ src, alt, className = "" }: GifProps) {
  return (
    <img
      className={`h-auto max-w-full rounded-lg shadow-xl ${className}`}
      src={src}
      alt={alt}
    />
  );
}
