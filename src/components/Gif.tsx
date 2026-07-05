type GifProps = {
  src: string;
  alt: string;
};

export default function Gif({ src, alt }: GifProps) {
  return <img src={src} alt={alt} className="min-w-0" />;
}
