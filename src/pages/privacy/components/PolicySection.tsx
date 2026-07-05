import type { ReactNode } from "react";

type PolicySectionProps = {
  heading: string;
  children: ReactNode;
};

export default function PolicySection({ heading, children }: PolicySectionProps) {
  return (
    <section>
      <h2 className="mt-8 mb-2 text-lg font-semibold">{heading}</h2>
      {children}
    </section>
  );
}
