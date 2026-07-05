import Hero from "./components/Hero";
import accuracy from "./assets/accuracy.gif";
import autofillData from "./assets/autofill-data.gif";
import install from "./assets/install.gif";
import FeatureShowcase from "./components/FeatureShowcase";
import WithOrWithoutSection from "./components/WithOrWithoutSection";

export default function HomePage() {
  return (
    <main>
      <Hero />

      <WithOrWithoutSection />

      <FeatureShowcase
        src={accuracy}
        alt="Accuracy"
        title={
          <h2 className="text-center">
            Battle Tested On{" "}
            <span className="text-accent">Real Applications</span>
          </h2>
        }
        bullets={[
          "Works on LinkedIn, Indeed, Greenhouse Jobs, Workday, and company career sites",
          "Continuously improved through real-world use",
          "Built to handle dropdowns, checkboxes, radio buttons, and more",
        ]}
      />

      <FeatureShowcase
        src={autofillData}
        alt="Autofill Data"
        title={<h2 className="text-center">Manage Your Autofill Data</h2>}
        bullets={[
          "Review and edit extracted information before using it",
          "Add answers that aren't included in your resume",
          "Save common responses once instead of typing them repeatedly",
          "Use the same autofill data across future applications",
        ]}
        isAccentBackground={true}
      />

      <FeatureShowcase
        src={install}
        alt="Install"
        title={<h2 className="text-center">Try Form Smash Today</h2>}
        bullets={[
          "No signup required",
          "No credit card needed",
          "No lengthy setup process",
        ]}
      />
    </main>
  );
}
