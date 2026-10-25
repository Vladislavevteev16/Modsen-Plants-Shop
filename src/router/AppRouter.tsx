import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';

import { Layout } from '@/components/Layout';
import { PATH_NAME } from '@/constants/paths';
import { HomePage } from '@/pages/HomePage';
import { NotFoundPage } from '@/pages/NotFoundPage';
import { PlaceYourOrderPage } from '@/pages/PlaceYourOrderPage';
import { ShopPage } from '@/pages/ShopPage';

const router = createBrowserRouter([
  {
    path: PATH_NAME.MAIN,
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
