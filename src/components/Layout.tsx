import background from "../assets/background.png";
import Navbar from "./Navbar";

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-10"
        style={{ backgroundColor: "white" }}
      >
        <div
          className="h-full w-full bg-cover bg-center bg-no-repeat opacity-90"
          style={{ backgroundImage: `url(${background})` }}
        />
      </div>
      <Navbar />
      <div className="p-4 xl:p-6">{children}</div>
    </>
  );
}
