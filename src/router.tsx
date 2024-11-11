import { createBrowserRouter, Outlet } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Outlet />,
    // errorElement: <NotFound />,
    // children: [...publicRoutes, ...privateRoutes],
  },
]);

export default router;
