import { useMenu } from '@/hooks/useMenu';

import { BurgerButton } from '../BurgerButton';
import { Navigation } from '../Navigation';
import { SearchBar } from '../SearchBar';
import { Logo } from '../ui/Logo';
import s from './Header.module.scss';

export const Header = () => {
  const { isMenuOpen, handleCloseMenu, handleToggleMenu } = useMenu();

  return (
    <header className={s.header}>
      <Logo />
      <Navigation isMenuOpen={isMenuOpen} handleClose={handleCloseMenu} />
      <SearchBar />
      <BurgerButton isMenuOpen={isMenuOpen} handleToggleMenu={handleToggleMenu} />
    </header>
  );
};
