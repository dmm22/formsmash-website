type GifProps = {
  src: string;
  alt: string;
};

export default function Gif({ src, alt }: GifProps) {
  return (
    <img className="max-w-full rounded-lg shadow-xl" src={src} alt={alt} />
  );
}
