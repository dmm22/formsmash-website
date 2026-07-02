type ScrollEventName = "hero" | "battle_tested" | "try_it_out" | "contact" | "review" | "with_or_without" | "about"

type HeroSectionProps = {
  leftSide: React.ReactNode
  rightSide: React.ReactNode
  hasAccentBackground: boolean
  event: ScrollEventName
}

export default function HeroSection({ leftSide, rightSide, hasAccentBackground }: HeroSectionProps) {
  const baseClasses = "h-screen w-full grid grid-cols-[1fr_1fr] gap-4"

  //   when scrolled into view, log just like the old site

  return (
    <section className={`${baseClasses} ${hasAccentBackground ? "bg-accent" : ""}`}>
      {leftSide}
      {rightSide}
    </section>
  )
}
