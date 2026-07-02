type GifTextSectionProps = {
  gif: string
  gifAlt: string
  title: React.ReactNode
  bullets: string[]
  isAccentBackground?: boolean
}

export default function GifTextSection({ gif, gifAlt, title, bullets, isAccentBackground = false }: GifTextSectionProps) {
  const baseClasses = "grid grid-cols-[1fr_1fr] gap-24 place-items-center h-screen"

  return (
    <section className={`${baseClasses} ${isAccentBackground ? "bg-accent" : ""}`}>
      <img src={gif} alt={gifAlt} className="rounded-lg" />
      <div className="flex flex-col gap-14">
        {title}
        <ul className="list-disc list-inside flex flex-col gap-6 text-xl">
          {bullets.map(bullet => (
            <li key={bullet}>{bullet}</li>
          ))}
        </ul>
      </div>
    </section>
  )
}
