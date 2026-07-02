type GifTextSectionProps = {
  gif: string
  gifAlt: string
  title: React.ReactNode
  bullets: string[]
  isAccentBackground?: boolean
}

export default function GifTextSection({ gif, gifAlt, title, bullets, isAccentBackground = false }: GifTextSectionProps) {
  const baseClasses =
    "p-4 flex flex-col flex-col-reverse gap-18 justify-center items-center h-[80dvh] lg:grid lg:grid-cols-[1fr_1fr] lg:justify-items-center lg:h-screen"

  return (
    <section className={`${baseClasses} ${isAccentBackground ? "bg-accent text-text-primary" : ""}`}>
      <img src={gif} alt={gifAlt} className={`rounded-lg lg:max-w-11/12 ${isAccentBackground ? "lg:order-2" : ""}`} />
      <div className={`flex flex-col gap-14 lg:max-w-11/12 ${isAccentBackground ? "text-white" : ""}`}>
        <h2>{title}</h2>
        <ul className="list-disc list-inside flex flex-col gap-6 text-xl">
          {bullets.map(bullet => (
            <li key={bullet}>{bullet}</li>
          ))}
        </ul>
      </div>
    </section>
  )
}
