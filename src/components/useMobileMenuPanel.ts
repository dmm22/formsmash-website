import { useEffect, useRef, useState } from "react";

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
  event: React.TransitionEvent<HTMLUListElement>,
  panel: HTMLUListElement | null,
  menuOpen: boolean,
) {
  if (event.target !== panel || event.propertyName !== "transform" || menuOpen) {
    return false;
  }

  return true;
}

const useMobileMenuPanel = () => {
  const [menuOpen, setIsMenuOpen] = useState(false);
  const [menuMounted, setMenuMounted] = useState(false);

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

  const handlePanelKeyDown = (event: React.KeyboardEvent<HTMLUListElement>) => {
    if (event.key !== "Tab" || !panelRef.current) {
      return;
    }

    const focusableItems = panelRef.current.querySelectorAll("a");
    const firstItem = focusableItems[0];
    const lastItem = focusableItems[focusableItems.length - 1];

    if (!firstItem || !lastItem) {
      return;
    }

    if (!event.shiftKey && document.activeElement === lastItem) {
      event.preventDefault();
      firstItem.focus();
      return;
    }

    if (event.shiftKey && document.activeElement === firstItem) {
      event.preventDefault();
      lastItem.focus();
    }
  };

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

  useEffect(() => {
    if (!menuOpen) {
      return;
    }

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key !== "Escape") {
        return;
      }

      closeMenu();
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen || !panelRef.current) {
      return;
    }

    const frame = requestAnimationFrame(() => {
      const firstLink = panelRef.current?.querySelector("a");

      if (!firstLink) {
        return;
      }

      firstLink.focus();
    });

    return () => cancelAnimationFrame(frame);
  }, [menuOpen]);

  return {
    menuOpen,
    menuMounted,
    menuRef,
    panelRef,
    closeMenu,
    toggleMenu,
    handlePanelKeyDown,
    handlePanelTransitionEnd,
  };
};

export default useMobileMenuPanel;
