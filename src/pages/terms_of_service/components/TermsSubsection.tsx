import type { ReactNode } from "react";

type TermsSubsectionProps = {
  heading: string;
  children: ReactNode;
};

export default function TermsSubsection({
  heading,
  children,
}: TermsSubsectionProps) {
  return (
    <section>
      <h3 className="mt-6 mb-2 text-base font-semibold">{heading}</h3>
      {children}
    </section>
  );
}
