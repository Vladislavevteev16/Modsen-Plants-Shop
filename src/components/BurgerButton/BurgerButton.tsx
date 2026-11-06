import CloseIcon from '@/assets/cross-icon.svg?react';
import MenuIcon from '@/assets/menu-icon.svg?react';

import s from './BurgerButton.module.scss';

type BurgerButtonProps = {
  isMenuOpen: boolean;
  handleToggleMenu: () => void;
};

export const BurgerButton = ({ isMenuOpen, handleToggleMenu }: BurgerButtonProps) => {
  return (
    <button type="button" className={s.burgerBtn} onClick={handleToggleMenu}>
      {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
    </button>
  );
};
