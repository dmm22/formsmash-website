import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import background from "../assets/background.png";
import logo from "../assets/logo.svg";
import { routes } from "../routes";
import { useAnalytics } from "../contexts/AnalyticsContext";
import { openExternalUrl } from "../utils/urlUtils";

function getStickyTransformClass(isHomePage: boolean, isPastHero: boolean) {
  if (!isHomePage) {
    return "translate-y-0";
  }

  if (isPastHero) {
    return "translate-y-0";
  }

  return "-translate-y-full";
}

function getStickyTransitionClass(isHomePage: boolean) {
  if (!isHomePage) {
    return "";
  }

  return "transition-transform duration-300 ease-in-out";
}

function getStickyPointerClass(isHomePage: boolean, isPastHero: boolean) {
  if (!isHomePage) {
    return "";
  }

  if (isPastHero) {
    return "";
  }

  return "pointer-events-none";
}

const navShellClassName = `
  top-0 left-0 isolate z-50 flex h-18 w-screen items-center justify-center
  px-4 outline-none lg:px-0
`;

function NavBackground() {
  return (
    <div aria-hidden className="absolute inset-0 overflow-hidden bg-[#F0F6FF]">
      <div
        className="pointer-events-none absolute top-0 left-0 w-screen scale-[-1] bg-cover bg-center bg-no-repeat opacity-90"
        style={{
          backgroundImage: `url(${background})`,
          height: "100vh",
        }}
      />
    </div>
  );
}

type NavLogoProps = {
  onHomeClicked: () => void;
};

function NavLogo({ onHomeClicked }: NavLogoProps) {
  return (
    <button onClick={onHomeClicked} className="flex items-center gap-3">
      <img src={logo} alt="FormSmash Logo" className="h-8" />
      <span className="hidden text-lg font-[600] xl:inline">FormSmash</span>
    </button>
  );
}

type NavBarContentProps = {
  onHomeClicked: () => void;
  onContactClicked: () => void;
  onInstallClicked: () => void;
  showInstallButton: boolean;
};

function NavBarContent({
  onHomeClicked,
  onContactClicked,
  onInstallClicked,
  showInstallButton,
}: NavBarContentProps) {
  function renderInstallButton() {
    if (!showInstallButton) {
      return null;
    }

    return (
      <button
        onClick={onInstallClicked}
        className="rounded-lg bg-accent px-4 py-2 text-sm whitespace-nowrap text-white hover:bg-accent-hover"
      >
        Add to Chrome
      </button>
    );
  }

  return (
    <div className="relative mx-auto flex w-full items-center justify-between text-text-primary lg:max-w-[90dvw]">
      <NavLogo onHomeClicked={onHomeClicked} />
      <div className="flex items-center gap-12 lg:gap-20">
        <Link
          to={routes.contact.path}
          onClick={onContactClicked}
          className="text-sm transition-colors hover:text-accent"
        >
          {routes.contact.label}
        </Link>
        {renderInstallButton()}
      </div>
    </div>
  );
}

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const { sendEvent } = useAnalytics();

  const isHomePage = location.pathname === "/";

  const [isPastHero, setIsPastHero] = useState(false);

  useEffect(() => {
    if (!isHomePage) {
      setIsPastHero(false);
      return;
    }

    const hero = document.querySelector("[data-hero-section]");

    if (!hero) {
      return;
    }

    const syncPastHero = () => {
      setIsPastHero(hero.getBoundingClientRect().bottom <= 0);
    };

    syncPastHero();

    const observer = new IntersectionObserver(() => {
      syncPastHero();
    });

    observer.observe(hero);
    window.addEventListener("scroll", syncPastHero, { passive: true });
    window.addEventListener("resize", syncPastHero);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", syncPastHero);
      window.removeEventListener("resize", syncPastHero);
    };
  }, [isHomePage]);

  const handleHomeClicked = () => {
    sendEvent("nav_link_clicked", {
      label: routes.home.label,
      path: routes.home.path,
    });
    navigate("/");
    window.scrollTo(0, 0);
  };

  const handleInstallClicked = () => {
    sendEvent("cta_button_clicked");
    openExternalUrl(import.meta.env.VITE_CHROME_LISTING_URL);
  };

  const handleContactClicked = () => {
    sendEvent("nav_link_clicked", {
      label: routes.contact.label,
      path: routes.contact.path,
    });
  };

  function renderHeroNavbar() {
    if (!isHomePage) {
      return null;
    }

    return (
      <nav className={`absolute ${navShellClassName}`} aria-hidden={isPastHero}>
        <NavBackground />
        <NavBarContent
          onHomeClicked={handleHomeClicked}
          onContactClicked={handleContactClicked}
          onInstallClicked={handleInstallClicked}
          showInstallButton={false}
        />
      </nav>
    );
  }

  const stickyClassName = `
    fixed
    ${navShellClassName}
    border-b border-border-primary
    ${getStickyTransitionClass(isHomePage)}
    ${getStickyTransformClass(isHomePage, isPastHero)}
    ${getStickyPointerClass(isHomePage, isPastHero)}
  `;

  return (
    <>
      {renderHeroNavbar()}
      <nav
        className={stickyClassName}
        aria-hidden={isHomePage && !isPastHero}
      >
        <NavBackground />
        <NavBarContent
          onHomeClicked={handleHomeClicked}
          onContactClicked={handleContactClicked}
          onInstallClicked={handleInstallClicked}
          showInstallButton={true}
        />
      </nav>
    </>
  );
}
