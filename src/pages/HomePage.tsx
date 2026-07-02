import accuracyGif from "../assets/accuracy.gif"
import autofillDataGif from "../assets/autofill-data.gif"
import GifTextSection from "../components/GifTextSection"
import installGif from "../assets/install.gif"

export default function HomePage() {
  const renderBattleTestedSection = () => {
    const title = (
      <>
        Battle Tested On <span className="text-accent">Real Applications</span>
      </>
    )
    const bullets = [
      "Works on LinkedIn, Indeed, Greenhouse Jobs, Workday, and company career sites",
      "Continuously improved through real-world use",
      "Built to handle dropdowns, checkboxes, radio buttons, and more",
    ]

    return <GifTextSection gif={accuracyGif} gifAlt="Accuracy GIF" title={title} bullets={bullets} />
  }

  const renderReviewWhatsUsedSection = () => {
    const title = <>Review What FormSmash Uses To Fill Applications</>
    const bullets = [
      "Review and edit extracted information before using it",
      "Add answers that aren't included in your resume",
      "Save common responses once instead of typing them repeatedly",
      "Use the same autofill data across future applications",
    ]

    return (
      <GifTextSection
        gif={autofillDataGif}
        gifAlt="Review what FormSmash uses to fill applications"
        title={title}
        bullets={bullets}
        isAccentBackground
      />
    )
  }

  const renderTryFormSmashSection = () => {
    const title = (
      <>
        Try FormSmash in <span className="text-accent">Under a Minute</span>
      </>
    )
    const bullets = ["No account creation", "No credit card", "No lengthy setup process"]

    return <GifTextSection gif={installGif} gifAlt="Try FormSmash in under a minute" title={title} bullets={bullets} />
  }

  return (
    <main className="w-full">
      {renderBattleTestedSection()}
      {renderReviewWhatsUsedSection()}
      {renderTryFormSmashSection()}
    </main>
  )
}
