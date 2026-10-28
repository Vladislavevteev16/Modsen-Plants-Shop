import clsx from 'clsx';
import { NavLink } from 'react-router-dom';

import { PATH_NAME } from '@/constants/paths';

import s from './Navigation.module.scss';

type NavigationProps = {
  handleClose?: () => void;
  cartCount?: number;
  isMenuOpen: boolean;
};

const NAV_ITEMS = [
  { title: 'Home', path: PATH_NAME.HOME },
  { title: 'Shop', path: PATH_NAME.SHOP },
  { title: 'Cart', path: PATH_NAME.ORDER },
];

export const Navigation = ({ handleClose, cartCount = 3, isMenuOpen }: NavigationProps) => {
  return (
    <nav className={clsx(s.nav, { [s.isOpen]: isMenuOpen })}>
      <ul className={s.list}>
        {NAV_ITEMS.map(({ title, path }) => (
          <li key={title}>
            <NavLink
              to={`/${path}`}
              className={({ isActive }) => clsx(s.link, { [s.active]: isActive })}
              onClick={handleClose}
            >
              {title}
              {path === PATH_NAME.ORDER && cartCount > 0 && <span>({cartCount})</span>}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
