import { useEffect, useState } from 'react';

const MENU_OPEN = 'menu-open';

export const useMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const handleToggleMenu = () => setIsMenuOpen((prev) => !prev);

  const handleCloseMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    document.body.classList.toggle(MENU_OPEN, isMenuOpen);

    return () => {
      document.body.classList.remove(MENU_OPEN);
    };
  }, [isMenuOpen]);

  return { isMenuOpen, handleToggleMenu, handleCloseMenu };
};
