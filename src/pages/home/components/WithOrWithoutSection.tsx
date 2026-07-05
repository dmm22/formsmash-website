import Gif from "../../../components/Gif";
import beforeGif from "../assets/before.gif";
import afterGif from "../assets/after.gif";

export default function WithOrWithoutSection() {
  const containerClasses = `
    flex 
    flex-col-reverse
    gap-18 
    justify-center 
    items-center 

    

    xl:grid 
    xl:grid-cols-[1fr_1fr] 
    xl:justify-items-center 

    bg-accent-gradient

    text-white
    
    -mx-4 p-4 xl:-mx-6 xl:p-6
  `;

  return (
    <section data-nav-background="accent" className={containerClasses}>
      <div>
        <h3 className="text-center">Without FormSmash (30s)</h3>
        <Gif src={beforeGif} alt="Without FormSmash" />
      </div>
      <div>
        <h3 className="text-center font-[800]">With FormSmash (5s)</h3>
        <Gif src={afterGif} alt="With FormSmash" />
      </div>
    </section>
  );
}
