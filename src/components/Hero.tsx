import fillFormGif from "../assets/fill-form.gif";
import Gif from "./Gif";

export default function Hero() {
  const heroClasses = `
    h-screen

    flex
    flex-col
    items-center
    justify-center
    gap-18

    lg:h-screen
    lg:flex-row
    lg:justify-items-center
    lg:p-6
  `;

  return (
    <section data-nav-background="image" className={heroClasses}>
      <div className="flex flex-col items-center gap-4 lg:items-start">
        <h1 className="text-center lg:text-left">
          Never Type Your Resume Into Another Job Application Again
        </h1>

        <p className="text-center text-lg text-text-secondary lg:text-left">
          The Form Shouldn't Be the Hardest Part of Applying.
        </p>
        <button className="w-1/2 rounded-lg bg-orange-500 px-5 py-2.5 text-lg text-white hover:bg-orange-600">
          Try it for free
        </button>
      </div>
      <Gif src={fillFormGif} alt="Fill form gif" />
    </section>
  );
}
