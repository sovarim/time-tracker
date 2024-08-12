import { RouteObject, useRoutes } from 'react-router-dom';
import { MainLayout } from '../layouts/main-layout';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <MainLayout />,
  },
];

const useAppRoutes = () => {
  return useRoutes(routes);
};

export const AppRoutes = () => {
  return useAppRoutes();
};
