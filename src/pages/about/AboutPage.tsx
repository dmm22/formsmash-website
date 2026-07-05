import AboutSection from "./components/AboutSection";
import PageIntro from "../../components/PageIntro";
import pressure from "./assets/pressure.png";

export default function AboutPage() {
  const whyIMadeItContent = `I created FormSmash because I'm actively looking for work myself, and I got tired of typing the same information over and over again when it's already in my resume.

Since I use the extension regularly, I run into the same issues and frustrations as everyone else. That gives me a lot of opportunities to test it, improve it, and fix bugs.`;

  const whyItsFreeToTryContent = `Because I find FormSmash genuinely useful myself, I decided to make it free to try. I wanted people to be able to see whether it helps them without creating an account, entering payment information, or committing to anything upfront.`;

  const feedbackWelcomeContent = `I welcome any feedback, bug reports, feature requests, or criticism. My goal is to keep improving FormSmash, not just for myself, but for everyone who uses it.`;

  const whatImHopingForContent = `Applying to jobs sucks. It's repetitive, time-consuming, and honestly pretty draining after a while. If FormSmash can make that process a little less frustrating and save people some time along the way, I'd consider that a win.`;

  return (
    <main className="flex flex-col gap-6 border-b border-border-primary p-4">
      <PageIntro src={pressure} alt="Pressure Gauge" title="About FormSmash" />
      <hr className="my-4 border-border-primary" />
      <section className="grid gap-1 rounded-lg">
        <div className="flex flex-col gap-12">
          <AboutSection title="Why I made it" content={whyIMadeItContent} />
          <AboutSection
            title="Why it's free to try"
            content={whyItsFreeToTryContent}
          />
          <AboutSection
            title="Feedback welcome"
            content={feedbackWelcomeContent}
          />
          <AboutSection
            title="What I'm hoping for"
            content={whatImHopingForContent}
          />
        </div>
        <p>
          For questions, bug reports, or feedback, <span>contact us</span>
        </p>
      </section>
    </main>
  );
}
