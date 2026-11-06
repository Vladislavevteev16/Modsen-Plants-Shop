import { useMenu } from '@/hooks/useMenu';
import { useAppSelector } from '@/redux/store/hooks';
import { selectCartItems } from '@/redux/store/slices/cartSlice';

import { BurgerButton } from '../BurgerButton';
import { Navigation } from '../Navigation';
import { SearchBar } from '../SearchBar';
import { Logo } from '../ui/Logo';
import s from './Header.module.scss';

export const Header = () => {
  const { isMenuOpen, handleCloseMenu, handleToggleMenu } = useMenu();
  const cartQuantity = useAppSelector(selectCartItems).length;

  return (
    <header className={s.header}>
      <Logo />
      <Navigation cartCount={cartQuantity} isMenuOpen={isMenuOpen} handleClose={handleCloseMenu} />
      <SearchBar />
      <BurgerButton isMenuOpen={isMenuOpen} handleToggleMenu={handleToggleMenu} />
    </header>
  );
};
