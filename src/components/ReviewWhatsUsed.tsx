import accuracyGif from "../assets/accuracy.gif"

export default function ReviewWhatsUsed() {
  return (
    <section className="flex items-center justify-center gap-24 h-screen">
      <img src={accuracyGif} alt="Accuracy GIF" className="rounded-lg" />
      <div className="flex flex-col gap-14">
        <h2>
          Battle Tested On <span>Real Applications</span>
        </h2>
        <ul className="list-disc list-inside flex flex-col gap-6 text-xl w-max">
          <li>Works on LinkedIn, Indeed, Greenhouse Jobs, Workday, and company career sites</li>
          <li>Continuously improved through real-world use</li>
          <li>Built to handle dropdowns, checkboxes, radio buttons, and more</li>
        </ul>
      </div>
    </section>
  )
}
