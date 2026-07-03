import fillFormGif from "../assets/fill-form.gif";

export default function Hero() {
  return (
    <section
      data-nav-background="image"
      className="flex h-[80dvh] items-center flex-col justify-center gap-18 lg:h-screen lg:flex-row lg:justify-items-center lg:p-8"
    >
      <div className="flex flex-col gap-4">
        <h1>Autoill job applications in one click</h1>
        <p className="text-text-tertiary">
          Autofill Workday, Greenhouse, LinkedIn, Indeed, and more in one click.
        </p>
        <button className="w-max rounded-lg bg-orange-500 px-5 py-2.5 text-lg text-white hover:bg-orange-600">
          Try it for free
        </button>
      </div>
      <img src={fillFormGif} alt="Fill form gif" />
    </section>
  );
}
