import { Outlet } from 'react-router-dom';

import { Footer } from '../Footer';
import { Header } from '../Header';
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
