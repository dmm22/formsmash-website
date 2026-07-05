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
  function renderHeaderImage() {
    if (!src) {
      return null;
    }

    return <img src={src} alt={alt ?? ""} className="max-w-3/5" />;
  }

  function renderCaption() {
    if (!caption) {
      return null;
    }

    return <p className="text-text-secondary">{caption}</p>;
  }

  return (
    <>
      <main className="flex flex-col gap-6 p-4">
        <header className="flex flex-col items-center gap-4">
          {renderHeaderImage()}
          <h1 className="text-accent">{title}</h1>
          {renderCaption()}
        </header>
        <hr className="my-4 border-dashed border-border-primary" />
        {children}
      </main>
      <hr className="mx-4 my-6 border-dashed border-border-primary" />
    </>
  );
}
