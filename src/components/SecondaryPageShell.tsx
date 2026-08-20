import type { ReactNode } from "react";

type SecondaryPageShellProps = {
  title: string;
  caption?: string;
  src?: string;
  alt?: string;
  excludeHr?: boolean;
  children: ReactNode;
};

export default function SecondaryPageShell({
  src,
  alt,
  title,
  caption,
  children,
  excludeHr = false,
}: SecondaryPageShellProps) {
  function renderHeaderImage() {
    if (!src) {
      return null;
    }

    return (
      <img src={src} alt={alt ?? ""} className="max-w-3/5 lg:max-h-[30dvh]" />
    );
  }

  function renderCaption() {
    if (!caption) {
      return null;
    }

    return <p className="text-text-secondary">{caption}</p>;
  }

  return (
    <>
      <main className="flex min-h-screen flex-col justify-center gap-6 p-4 lg:mx-auto lg:w-[90dvw]">
        <div className="z-40 min-h-18 w-full" />
        <header className="flex flex-col items-center gap-4">
          {renderHeaderImage()}
          <h2 className="text-accent">{title}</h2>
          {renderCaption()}
        </header>
        {!excludeHr && (
          <hr className="my-4 border-dashed border-border-primary" />
        )}
        {children}
      </main>
      <hr className="mx-4 my-6 border-dashed border-border-primary" />
    </>
  );
}
