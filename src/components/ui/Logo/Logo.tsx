import { Link } from 'react-router-dom';

import LogoIcon from '@/assets/logo-icon.svg?react';
import { PATH_NAME } from '@/constants/paths';

import s from './Logo.module.scss';

export const Logo = () => {
  return (
    <Link to={PATH_NAME.MAIN}>
      <LogoIcon className={s.logo} />
    </Link>
  );
};
