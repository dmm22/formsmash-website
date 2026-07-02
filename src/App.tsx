import accuracyGif from "./assets/accuracy.gif"
import fillFormGif from "./assets/fill-form.gif"
import GifTextSection from "./components/GifTextSection"

export default function App() {
  const renderBattleTestedSection = () => {
    const title = (
      <h2>
        Battle Tested On <span className="text-marketing-accent">Real Applications</span>
      </h2>
    )
    const bullets = [
      "Works on LinkedIn, Indeed, Greenhouse Jobs, Workday, and company career sites",
      "Continuously improved through real-world use",
      "Built to handle dropdowns, checkboxes, radio buttons, and more",
    ]

    return <GifTextSection gif={accuracyGif} gifAlt="Accuracy GIF" title={title} bullets={bullets} />
  }

  const renderReviewWhatsUsedSection = () => {
    const title = <h2>Review What FormSmash Uses To Fill Applications</h2>
    const bullets = [
      "Review and edit extracted information before using it",
      "Add answers that aren't included in your resume",
      "Save common responses once instead of typing them repeatedly",
      "Use the same autofill data across future applications",
    ]

    return (
      <GifTextSection gif={fillFormGif} gifAlt="Review what FormSmash uses to fill applications" title={title} bullets={bullets} isAccentBackground />
    )
  }

  return (
    <main className="w-full">
      {renderBattleTestedSection()}
      {renderReviewWhatsUsedSection()}
    </main>
  )
}
