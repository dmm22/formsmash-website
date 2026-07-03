import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { IoMdMenu } from "react-icons/io";
import background from "../assets/background.png";
import logo from "../assets/logo.png";

type NavLinkItem = {
  label: string;
  to: string;
  mobileOnly?: boolean;
};

type NavBackgroundMode = "image" | "accent";

const navLinks: NavLinkItem[] = [
  { label: "Home", to: "/", mobileOnly: true },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

const navBaseClasses =
  "fixed top-0 left-0 z-50 isolate w-screen p-4 xl:p-6 outline-none";

const mobileContextManuBaseClasses = `
  fixed 
  top-0 
  right-0 

  flex

  h-96 
  w-screen 

  flex-col 
  items-center 
  justify-center 
  gap-14 

  bg-accent-gradient 

  p-4 

  text-2xl 
  text-white 

  shadow-xl 

  transition-transform 
  duration-300 
  ease-in-out
`;

function resolveMobilePanelTransform(menuOpen: boolean) {
  if (menuOpen) {
    return "translate-y-0";
  }

  return "-translate-y-full";
}

function shouldDismissMenuOnOutsideClick(
  menuRoot: HTMLDivElement | null,
  target: Node,
  menuOpen: boolean,
) {
  if (!menuRoot || !menuOpen) {
    return false;
  }

  if (menuRoot.contains(target)) {
    return false;
  }

  return true;
}

function shouldUnmountMobilePanel(
  e: React.TransitionEvent<HTMLUListElement>,
  panel: HTMLUListElement | null,
  menuOpen: boolean,
) {
  if (e.target !== panel || e.propertyName !== "transform" || menuOpen) {
    return false;
  }

  return true;
}

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

    const sectionMode = section.getAttribute("data-nav-background");

    if (sectionMode === "accent") {
      activeMode = "accent";
      return;
    }

    if (sectionMode === "image") {
      activeMode = "image";
    }
  });

  return activeMode;
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
      className="absolute inset-0 overflow-hidden transition-colors duration-300"
      style={{ backgroundColor: "white" }}
    >
      <div
        className="pointer-events-none absolute top-0 left-0 w-screen bg-cover bg-center bg-no-repeat opacity-90"
        style={{
          backgroundImage: `url(${background})`,
          height: "100vh",
        }}
      />
    </div>
  );
}

function resolveMenuIconClass(
  menuOpen: boolean,
  navBackgroundMode: NavBackgroundMode,
) {
  if (menuOpen) {
    return "text-white";
  }

  if (navBackgroundMode === "accent") {
    return "text-white";
  }

  return "text-text-primary";
}

export default function Navbar() {
  const location = useLocation();

  const [menuOpen, setIsMenuOpen] = useState(false);
  const [menuMounted, setMenuMounted] = useState(false);
  const [backgroundMode, setBackgroundMode] =
    useState<NavBackgroundMode>("image");

  const navRef = useRef<HTMLElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLUListElement>(null);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const openMenu = () => {
    if (menuMounted && !menuOpen) {
      setIsMenuOpen(true);
      return;
    }

    setMenuMounted(true);
  };

  const toggleMenu = () => {
    if (menuOpen) {
      closeMenu();
      return;
    }

    openMenu();
  };

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

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const shouldDismiss = shouldDismissMenuOnOutsideClick(
        menuRef.current,
        event.target as Node,
        menuOpen,
      );

      if (!shouldDismiss) {
        return;
      }

      closeMenu();
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  useEffect(() => {
    if (!menuMounted) {
      return;
    }

    const frame = requestAnimationFrame(() => {
      setIsMenuOpen(true);
    });

    return () => cancelAnimationFrame(frame);
  }, [menuMounted]);

  const handlePanelTransitionEnd = (
    event: React.TransitionEvent<HTMLUListElement>,
  ) => {
    const shouldUnmount = shouldUnmountMobilePanel(
      event,
      panelRef.current,
      menuOpen,
    );

    if (!shouldUnmount) {
      return;
    }

    setMenuMounted(false);
  };

  const desktopLinks = navLinks.filter((link) => !link.mobileOnly);
  const mobileLinks = navLinks;

  return (
    <>
      <nav ref={navRef} className={navBaseClasses}>
        {renderNavBackgroundElement(backgroundMode)}

        <div
          className={`relative flex items-center justify-between ${getNavTextColor(backgroundMode)}`}
        >
          <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt="Formsmash Logo" />
            <span className="hidden font-semibold xl:inline">FormSmash</span>
          </Link>

          <ul className="hidden items-center gap-10 md:flex">
            {desktopLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className="transition-colors hover:text-accent"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div ref={menuRef} className="relative md:hidden">
            <button
              type="button"
              className="relative z-10 outline-none"
              onClick={toggleMenu}
              aria-expanded={menuOpen}
            >
              <IoMdMenu
                className={resolveMenuIconClass(menuOpen, backgroundMode)}
                size={32}
              />
            </button>

            {menuMounted && (
              <ul
                ref={panelRef}
                onTransitionEnd={handlePanelTransitionEnd}
                className={`${mobileContextManuBaseClasses} ${resolveMobilePanelTransform(menuOpen)}`}
              >
                {mobileLinks.map((link) => (
                  <li key={link.to}>
                    <Link
                      to={link.to}
                      onClick={closeMenu}
                      className="transition-colors hover:text-accent-hover"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}
