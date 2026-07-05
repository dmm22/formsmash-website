import Hero from "../components/Hero";
import Gif from "../components/Gif";
import before from "../assets/before.gif";
import after from "../assets/after.gif";
import FeatureShowcase from "../components/FeatureShowcase";

export default function HomePage() {
  const battleTestedTitle = (
    <h2>
      Battle Tested On <span className="text-accent">Real Applications</span>
    </h2>
  );

  const reviewWhatsUsedTitle = (
    <h2>Review What FormSmash Uses To Fill Applications</h2>
  );

  const tryFormSmashTitle = (
    <h2>
      Try FormSmash in <span className="text-accent">Under a Minute</span>
    </h2>
  );

  const battleTestedBullets = [
    "Works on LinkedIn, Indeed, Greenhouse Jobs, Workday, and company career sites",
    "Continuously improved through real-world use",
    "Built to handle dropdowns, checkboxes, radio buttons, and more",
  ];

  const reviewWhatsUsedBullets = [
    "Review and edit extracted information before using it",
    "Add answers that aren't included in your resume",
    "Save common responses once instead of typing them repeatedly",
    "Use the same autofill data across future applications",
  ];

  const tryFormSmashBullets = [
    "No account creation",
    "No credit card",
    "No lengthy setup process",
  ];

  return (
    <main>
      <Hero />

      <hr className="border-b border-text-secondary xl:-mx-6" />

      <section className="flex h-screen flex-col justify-evenly bg-accent-gradient p-4 text-text-primary">
        <div className="flex flex-col items-center justify-center gap-4">
          <h2 className="text-2xl font-bold">Before Formsmash</h2>
          <Gif src={before} alt="Before Formsmash" />
        </div>
        <div className="flex flex-col items-center justify-center gap-4">
          <h2 className="text-2xl font-bold">After Formsmash</h2>
          <Gif src={after} alt="After Formsmash" />
        </div>
      </section>

      <hr className="border-b border-text-secondary xl:-mx-6" />

      <FeatureShowcase
        src={before}
        alt="Before Formsmash"
        title={battleTestedTitle}
        bullets={battleTestedBullets}
      />

      <hr className="border-b border-text-secondary xl:-mx-6" />

      <FeatureShowcase
        src={after}
        alt="After Formsmash"
        title={reviewWhatsUsedTitle}
        bullets={reviewWhatsUsedBullets}
      />

      <hr className="border-b border-text-secondary xl:-mx-6" />

      <FeatureShowcase
        src={before}
        alt="Before Formsmash"
        title={tryFormSmashTitle}
        bullets={tryFormSmashBullets}
      />
    </main>
  );
}
