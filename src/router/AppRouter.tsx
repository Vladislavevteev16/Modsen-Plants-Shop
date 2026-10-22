import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';

import { Layout } from '@/components/Layout/Layout';

import { HomePage } from '@/pages/HomePage';
import { ShopPage } from '@/pages/ShopPage';
import { PlaceYourOrderPage } from '@/pages/PlaceYourOrderPage';
import { NotFoundPage } from '@/pages/NotFoundPage';

import { PATH_NAME } from '@/constants';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Navigate to={PATH_NAME.HOME} replace /> },
      { path: PATH_NAME.SHOP, element: <ShopPage /> },
      { path: PATH_NAME.ORDER, element: <PlaceYourOrderPage /> },
    ],
  },
  { path: PATH_NAME.HOME, element: <HomePage /> },
  { path: '*', element: <NotFoundPage /> },
]);

export const AppRouter = () => {
  return <RouterProvider router={router} />;
};
