import AboutSection from "../components/AboutSection"
import PageHeader from "../components/PageHeader"

export default function AboutPage() {
  return (
    <main>
      <PageHeader image={<img src="" alt="" />} title="About FormSmash" />
      <section className="grid gap-1">
        <div>
          <AboutSection title="Why I made it" content="..." />
          <AboutSection title="Why it's free to try" content="..." />
          <AboutSection title="Feedback welcome" content="..." />
          <AboutSection title="What I'm hoping for" content="..." />
        </div>
        <p>
          For questions, bug reports, or feedback, <span>contact us</span>
        </p>
      </section>
    </main>
  )
}
