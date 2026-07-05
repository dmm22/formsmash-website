import Gif from "../../../components/Gif";
import before from "../assets/before.gif";
import after from "../assets/after.gif";

export default function WithOrWithoutSection() {
  return (
    <section className="flex h-screen flex-col justify-evenly bg-accent-gradient p-4 text-white">
      <div className="flex flex-col items-center justify-center gap-4">
        <h2 className="text-2xl font-bold">Before FormSmash</h2>
        <p>(30 seconds)</p>
        <Gif src={before} alt="Before FormSmash" />
      </div>
      <div className="flex flex-col items-center justify-center gap-4">
        <h2 className="text-2xl font-bold">After FormSmash</h2>
        <p>(5 seconds)</p>
        <Gif src={after} alt="After FormSmash" />
      </div>
    </section>
  );
}
