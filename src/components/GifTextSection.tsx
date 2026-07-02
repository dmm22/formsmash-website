import { useEffect, useRef } from "react"
import logo from "../assets/logo.png"

type GifTextSectionProps = {
  gif: string
  gifAlt: string
  title: React.ReactNode
  bullets: string[]
  isAccentBackground?: boolean
  setNavColorMode?: (colorMode: "light" | "dark") => void
}

export default function GifTextSection({ gif, gifAlt, title, bullets, isAccentBackground = false, setNavColorMode }: GifTextSectionProps) {
  const navTriggerRef = useRef<HTMLImageElement>(null)
  const baseClasses =
    "p-4 flex flex-col flex-col-reverse gap-18 justify-center items-center h-[80dvh] lg:grid lg:grid-cols-[1fr_1fr] lg:justify-items-center lg:h-screen"

  useEffect(() => {
    if (!isAccentBackground) return
    if (!setNavColorMode) return

    const trigger = navTriggerRef.current
    if (!trigger) return

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setNavColorMode("dark")
        return
      }

      setNavColorMode("light")
    })

    observer.observe(trigger)

    return () => {
      observer.disconnect()
      setNavColorMode("light")
    }
  }, [isAccentBackground, setNavColorMode])

  return (
    <section className={`relative${baseClasses} ${isAccentBackground ? "bg-accent text-text-primary" : ""}`}>
      <img src={gif} alt={gifAlt} className={`rounded-lg lg:max-w-11/12 ${isAccentBackground ? "lg:order-2" : ""}`} />
      <div className={`flex flex-col gap-14 lg:max-w-11/12 ${isAccentBackground ? "text-white" : ""}`}>
        <h2>{title}</h2>
        <ul className="list-disc list-inside flex flex-col gap-6 text-xl">
          {bullets.map(bullet => (
            <li key={bullet}>{bullet}</li>
          ))}
        </ul>
      </div>
      <img ref={navTriggerRef} src={logo} alt="Formsmash Logo" className="absolute bottom-0 invisible" />
    </section>
  )
}
