import { IoMdMenu } from "react-icons/io";
import NavLinkItem from "./NavLinkItem";
import useMobileMenuPanel from "./useMobileMenuPanel";
import type { NavBackgroundMode } from "./Navbar";
import type { AppRoute } from "../routes";

type NavbarMobileMenuProps = {
  links: AppRoute[];
  backgroundMode: NavBackgroundMode;
  currentPath: string;
  onNavLinkClicked: (link: AppRoute) => void;
  onHomeClicked: () => void;
};

const mobileContextMenuBaseClasses = `
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

function resolveMenuButtonLabel(menuOpen: boolean) {
  if (menuOpen) {
    return "Close menu";
  }

  return "Open menu";
}

export default function NavbarMobileMenu({
  links,
  backgroundMode,
  currentPath,
  onNavLinkClicked,
  onHomeClicked,
}: NavbarMobileMenuProps) {
  const {
    menuOpen,
    menuMounted,
    menuRef,
    panelRef,
    closeMenu,
    toggleMenu,
    handlePanelKeyDown,
    handlePanelTransitionEnd,
  } = useMobileMenuPanel();

  function renderMobilePanel() {
    if (!menuMounted) {
      return null;
    }

    return (
      <ul
        ref={panelRef}
        onKeyDown={handlePanelKeyDown}
        onTransitionEnd={handlePanelTransitionEnd}
        className={`${mobileContextMenuBaseClasses} ${resolveMobilePanelTransform(menuOpen)}`}
      >
        {links.map((link) => (
          <li key={link.path}>
            <NavLinkItem
              link={link}
              currentPath={currentPath}
              onNavLinkClicked={onNavLinkClicked}
              onHomeClicked={onHomeClicked}
              onNavigate={closeMenu}
            />
          </li>
        ))}
      </ul>
    );
  }

  return (
    <div ref={menuRef} className="relative md:hidden">
      <button
        className="relative z-10 outline-none"
        onClick={toggleMenu}
        aria-expanded={menuOpen}
        aria-label={resolveMenuButtonLabel(menuOpen)}
      >
        <IoMdMenu
          className={resolveMenuIconClass(menuOpen, backgroundMode)}
          size={32}
        />
      </button>

      {renderMobilePanel()}
    </div>
  );
}
