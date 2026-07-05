import type { ReactNode } from "react";

type SecondaryPageShellProps = {
  title: string;
  caption?: string;
  src?: string;
  alt?: string;
  children: ReactNode;
};

export default function SecondaryPageShell({
  src,
  alt,
  title,
  caption,
  children,
}: SecondaryPageShellProps) {
  return (
    <>
      <main className="flex flex-col gap-6 p-4">
        <header className="flex flex-col items-center gap-4 pt-8">
          {src && <img src={src} alt={alt ?? ""} className="max-w-3/5" />}
          <h1 className="text-accent">{title}</h1>
          {caption && <p className="text-text-secondary">{caption}</p>}
        </header>
        {children}
      </main>
      <hr className="mx-4 my-6 border border-border-primary" />
    </>
  );
}
