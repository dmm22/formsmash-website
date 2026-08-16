import type { ReactNode } from "react";
import background from "../assets/background.png";
import Navbar from "./Navbar";
import Footer from "./Footer";

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-10 bg-[#F0F6FF]"
      >
        <div
          className="h-full w-full scale-[-1] bg-cover bg-center bg-no-repeat opacity-90"
          style={{ backgroundImage: `url(${background})` }}
        />
      </div>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
