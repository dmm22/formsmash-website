import maze from "./assets/maze.png";

export default function NotFoundPage() {
  return (
    <main className="flex h-screen flex-col items-center justify-center gap-4">
      <img src={maze} alt="Maze" className="max-w-3/5 lg:max-h-[20dvh]" />
      <div className="flex flex-col items-center gap-2">
        <h2 className="text-accent">Page Not Found</h2>
        <p className="w-2/3 text-center text-text-secondary">
          The page you are looking for does not exist. Redirecting to the home
          page in 5 seconds.
        </p>
      </div>
    </main>
  );
}
