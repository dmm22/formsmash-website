import { Link } from "react-router-dom";
import type { AppRoute } from "../routes";

type NavLinkItemProps = {
  link: AppRoute;
  currentPath: string;
  onNavLinkClicked: (link: AppRoute) => void;
  onHomeClicked: () => void;
  onNavigate?: () => void;
  className?: string;
};

function resolveAriaCurrent(currentPath: string, path: string) {
  if (currentPath !== path) {
    return undefined;
  }

  return "page" as const;
}

export default function NavLinkItem({
  link,
  currentPath,
  onNavLinkClicked,
  onHomeClicked,
  onNavigate,
  className = "transition-colors hover:text-accent",
}: NavLinkItemProps) {
  const handleClick = () => {
    onNavLinkClicked(link);

    if (link.path === "/") {
      onHomeClicked();
    }

    if (!onNavigate) {
      return;
    }

    onNavigate();
  };

  return (
    <Link
      to={link.path}
      onClick={handleClick}
      aria-current={resolveAriaCurrent(currentPath, link.path)}
      className={className}
    >
      {link.label}
    </Link>
  );
}
