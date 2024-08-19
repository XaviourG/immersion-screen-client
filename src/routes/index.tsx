import { createBrowserRouter, Outlet, RouteObject, RouterProvider } from 'react-router-dom';
import LoginPage from '../pages/login';
import PublicLayout from '../layouts/public';
import UserLayout from '../layouts/user';

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

const USER_ROUTES: RouteObject[] = [
  {
    path: '',
    element: <UserLayout/>,
    children: [{
      path: '/session',
      element: <div>Session Manager</div>
    },
    {
      path: '/character',
      element:<div>Character Manager</div>
    },
    {
      path: '/scene',
      element: <div>Scene Manager</div>
    },
    {
      path: '/combat',
      element:<div>Combat Manager</div>
    }]
  }
]

const ROUTES = createBrowserRouter([
    {
      path: '/',
      element: <Outlet/>,
      children: [...PUBLIC_ROUTES, ...USER_ROUTES]
    },
  ]);

const Router = () => {
    return <RouterProvider router={ROUTES} />;
};

export default Router;