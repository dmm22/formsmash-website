import Hero from "./components/Hero";
import accuracy from "./assets/accuracy.gif";
import autofillData from "./assets/autofill-data.gif";
import install from "./assets/install.gif";
import FeatureShowcase from "./components/FeatureShowcase";
import BeforeAndAfter from "./components/BeforeAndAfter";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <div className="bg-accent-gradient">
        <BeforeAndAfter />
      </div>
      <FeatureShowcase
        src={accuracy}
        alt="Accuracy"
        scrollEventName="battle_tested_section_viewed"
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
      <div className="bg-accent-gradient text-white">
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
          scrollEventName="manage_autofill_data_section_viewed"
        />
      </div>

      <FeatureShowcase
        src={install}
        alt="Install"
        title={<h2 className="text-center">Try FormSmash Today</h2>}
        bullets={[
          "No signup required",
          "No credit card needed",
          "No lengthy setup process",
        ]}
        scrollEventName="try_it_out_section_viewed"
      />
    </main>
  );
}
