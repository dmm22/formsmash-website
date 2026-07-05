import { Link } from "react-router-dom";
import AboutSection from "./components/AboutSection";
import SecondaryPageShell from "../../components/SecondaryPageShell";
import pressure from "./assets/pressure.png";
import { aboutSections } from "../../content/aboutContent";
import { routes } from "../../routes";

export default function AboutPage() {
  return (
    <SecondaryPageShell
      src={pressure}
      alt="Pressure Gauge"
      title="About FormSmash"
    >
      <hr className="my-4 border-border-primary" />
      <section className="grid gap-1 rounded-lg">
        <div className="flex flex-col gap-12">
          {aboutSections.map((section) => (
            <AboutSection
              key={section.title}
              title={section.title}
              content={section.content}
            />
          ))}
        </div>
        <p>
          For questions, bug reports, or feedback,{" "}
          <Link to={routes.contact.path}>contact us</Link>
        </p>
      </section>
    </SecondaryPageShell>
  );
}
