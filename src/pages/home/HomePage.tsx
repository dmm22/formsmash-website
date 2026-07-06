import Hero from "./components/Hero";
import testing from "./assets/testing.png";
import autofillData from "./assets/autofill-data.gif";
import door from "./assets/door.png";
import FeatureShowcase from "./components/FeatureShowcase";
import BeforeAfter from "./components/BeforeAfter";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <div className="border-b border-border-primary bg-accent-gradient">
        <BeforeAfter />
      </div>
      <div className="border-b border-border-primary">
        <FeatureShowcase
          src={testing}
          alt="Battle Tested"
          scrollEventName="battle_tested_section_viewed"
          title={
            <h2 className="text-center lg:text-start">
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
      </div>
      <div className="border-b border-border-primary bg-accent-gradient text-white">
        <FeatureShowcase
          src={autofillData}
          alt="Autofill Data"
          title={
            <h2 className="text-center lg:text-start">
              Manage Your Autofill Data
            </h2>
          }
          bullets={[
            "Review and edit extracted information before using it",
            "Add answers that aren't included in your resume",
            "Save common responses once instead of typing them repeatedly",
            "Use the same autofill data across future applications",
          ]}
          scrollEventName="manage_autofill_data_section_viewed"
          isRowReverse={true}
        />
      </div>

      <div className="border-b border-border-primary">
        <FeatureShowcase
          src={door}
          alt="Door"
          title={
            <h2 className="text-center lg:text-start">
              Try FormSmash For <span className="text-accent">Free</span> Today
            </h2>
          }
          bullets={[
            "No signup required",
            "No credit card needed",
            "No lengthy setup process",
          ]}
          scrollEventName="try_it_out_section_viewed"
        />
      </div>
    </main>
  );
}
