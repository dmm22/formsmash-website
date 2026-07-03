import fillFormGif from "../assets/fill-form.gif"

export default function Hero() {
  return (
    <section className="p-4 lg:p-8 flex flex-col gap-18 justify-center items-center h-[80dvh] lg:flex-row lg:justify-items-center lg:h-screen">
      <div className="flex flex-col gap-4">
        <h1>Autoill job applications in one click</h1>
        <p className="text-text-tertiary">Autofill Workday, Greenhouse, LinkedIn, Indeed, and more in one click.</p>
        <button className="bg-orange-500 hover:bg-orange-600 text-lg text-white py-2.5 px-5 rounded-lg w-max">Try it for free</button>
      </div>
      <img src={fillFormGif} alt="Fill form gif" />
    </section>
  )
}
