import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import { MainPage } from '@/pages/MainPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />,
  },
  {
    path: '*',
    element: <Navigate to='/' />,
  },
]);

export const AppRouter = () => <RouterProvider router={router} />;
