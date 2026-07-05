import Hero from "../components/Hero";
import Gif from "../components/Gif";
import before from "../assets/before.gif";
import after from "../assets/after.gif";
import accuracy from "../assets/accuracy.gif";
import autofillData from "../assets/autofill-data.gif";
import install from "../assets/install.gif";

import FeatureShowcase from "../components/FeatureShowcase";

export default function HomePage() {
  const battleTestedTitle = (
    <h2 className="text-center">
      Battle Tested On <span className="text-accent">Real Applications</span>
    </h2>
  );

  const reviewWhatsUsedTitle = (
    <h2 className="text-center">Manage Your Autofill Data</h2>
  );

  const tryFormSmashTitle = (
    <h2 className="text-center">
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
    "No signup required",
    "No credit card needed",
    "No lengthy setup process",
  ];

  return (
    <main>
      <Hero />

      <section className="flex h-screen flex-col justify-evenly bg-accent-gradient p-4 text-white">
        <div className="flex flex-col items-center justify-center gap-4">
          <h2 className="text-2xl font-bold">Before Formsmash</h2>
          <p>(30 seconds)</p>
          <Gif src={before} alt="Before Formsmash" />
        </div>
        <div className="flex flex-col items-center justify-center gap-4">
          <h2 className="text-2xl font-bold">After Formsmash</h2>
          <p>(5 seconds)</p>
          <Gif src={after} alt="After Formsmash" />
        </div>
      </section>

      <FeatureShowcase
        src={accuracy}
        alt="Accuracy"
        title={battleTestedTitle}
        bullets={battleTestedBullets}
      />

      <FeatureShowcase
        src={autofillData}
        alt="Autofill Data"
        title={reviewWhatsUsedTitle}
        bullets={reviewWhatsUsedBullets}
        isAccentBackground={true}
      />

      <FeatureShowcase
        src={install}
        alt="Install"
        title={tryFormSmashTitle}
        bullets={tryFormSmashBullets}
      />
    </main>
  );
}
