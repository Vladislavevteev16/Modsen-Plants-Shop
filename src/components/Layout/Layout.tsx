import { Outlet } from 'react-router-dom';

import { Header } from '../Header';
import { Footer } from '../Footer';

import s from './Layout.module.scss';

export const Layout = () => {
  return (
    <div className={s.layout}>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};
