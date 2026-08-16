import { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import background from "../assets/background.png";
import logo from "../assets/logo.svg";
import logoWhite from "../assets/logo_white.svg";
import NavLinkItem from "./NavLinkItem";
import NavbarMobileMenu from "./NavbarMobileMenu";
import { navLinks, routes, type AppRoute } from "../routes";
import { useAnalytics } from "../contexts/AnalyticsContext";

export type NavBackgroundMode = "image" | "accent";

function resolveSectionNavBackgroundMode(sectionMode: string | null) {
  if (sectionMode === "accent") {
    return "accent";
  }

  if (sectionMode === "image") {
    return "image";
  }

  return undefined;
}

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const { sendEvent } = useAnalytics();

  const [backgroundMode, setBackgroundMode] =
    useState<NavBackgroundMode>("image");

  const navRef = useRef<HTMLElement>(null);

  function getNavBackgroundMode(navBottom: number) {
    const sections = document.querySelectorAll("[data-nav-background]");

    let activeMode: NavBackgroundMode = "image";

    sections.forEach((section) => {
      const sectionRect = section.getBoundingClientRect();

      if (sectionRect.top > navBottom) {
        return;
      }

      if (sectionRect.bottom <= navBottom) {
        return;
      }

      const resolvedMode = resolveSectionNavBackgroundMode(
        section.getAttribute("data-nav-background"),
      );

      if (!resolvedMode) {
        return;
      }

      activeMode = resolvedMode;
    });

    return activeMode;
  }

  function getNavLogoSrc(mode: NavBackgroundMode) {
    if (mode === "accent") {
      return logoWhite;
    }

    return logo;
  }

  function getNavTextColor(mode: NavBackgroundMode) {
    if (mode === "accent") {
      return "text-white";
    }

    return "text-text-primary";
  }

  function renderNavBackgroundElement(mode: NavBackgroundMode) {
    if (mode === "accent") {
      return (
        <div
          aria-hidden
          className="absolute inset-0 bg-accent-gradient transition-colors duration-300"
        />
      );
    }

    return (
      <div
        aria-hidden
        className="absolute inset-0 overflow-hidden bg-[#F0F6FF] transition-colors duration-300"
      >
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

  useEffect(() => {
    const nav = navRef.current;

    if (!nav) {
      return;
    }

    const syncNavBackground = () => {
      if (location.pathname !== "/") {
        setBackgroundMode("image");
        return;
      }

      const navBottom = nav.getBoundingClientRect().bottom;
      setBackgroundMode(getNavBackgroundMode(navBottom));
    };

    syncNavBackground();

    window.addEventListener("scroll", syncNavBackground, { passive: true });
    window.addEventListener("resize", syncNavBackground);

    return () => {
      window.removeEventListener("scroll", syncNavBackground);
      window.removeEventListener("resize", syncNavBackground);
    };
  }, [location.pathname]);

  const desktopLinks = navLinks.filter((link) => !link.mobileOnly);

  const handleNavLinkClicked = (link: AppRoute) => {
    sendEvent("nav_link_clicked", { label: link.label, path: link.path });
  };

  const handleHomeClicked = () => {
    handleNavLinkClicked(routes.home);
    navigate("/");
    window.scrollTo(0, 0);
  };

  return (
    <nav
      ref={navRef}
      className="fixed top-0 left-0 isolate z-50 flex h-18 w-screen items-center justify-center px-4 outline-none lg:px-0"
    >
      {renderNavBackgroundElement(backgroundMode)}

      <div
        className={`relative flex w-full items-center justify-between lg:mx-auto lg:max-w-[90dvw] ${getNavTextColor(backgroundMode)}`}
      >
        <button onClick={handleHomeClicked} className="flex items-center gap-3">
          <img
            src={getNavLogoSrc(backgroundMode)}
            alt="FormSmash Logo"
            className="h-7"
          />
          <span className="hidden font-[600] xl:inline">FormSmash</span>
        </button>

        <ul className="hidden items-center gap-18 md:flex">
          {desktopLinks.map((link) => (
            <li key={link.path}>
              <NavLinkItem
                link={link}
                currentPath={location.pathname}
                onNavLinkClicked={handleNavLinkClicked}
                onHomeClicked={handleHomeClicked}
              />
            </li>
          ))}
        </ul>

        <NavbarMobileMenu
          links={navLinks}
          backgroundMode={backgroundMode}
          currentPath={location.pathname}
          onNavLinkClicked={handleNavLinkClicked}
          onHomeClicked={handleHomeClicked}
        />
      </div>
    </nav>
  );
}
