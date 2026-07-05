import Hero from "./components/Hero";
import accuracy from "./assets/accuracy.gif";
import autofillData from "./assets/autofill-data.gif";
import install from "./assets/install.gif";
import FeatureShowcase from "./components/FeatureShowcase";
import WithOrWithoutSection from "./components/WithOrWithoutSection";
import {
  battleTestedBullets,
  reviewWhatsUsedBullets,
  tryFormSmashBullets,
} from "../../content/homeContent";

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

  return (
    <main>
      <Hero />

      <WithOrWithoutSection />

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
