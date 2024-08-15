import { createBrowserRouter, Outlet, RouteObject, RouterProvider } from 'react-router-dom';
import LoginPage from '../pages/login';
import PublicLayout from '../layouts/public';

const PUBLIC_ROUTES: RouteObject[] = [
  {
    path: '',
    element: <PublicLayout/>,
    children: [{
      path: '/login',
      element: <LoginPage/>
    }]
  }
]

const ROUTES = createBrowserRouter([
    {
      path: '/',
      element: <Outlet/>,
      children: [...PUBLIC_ROUTES]
    },
  ]);

const Router = () => {
    return <RouterProvider router={ROUTES} />;
};

export default Router;