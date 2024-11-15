import { createBrowserRouter } from 'react-router-dom';
import NotFound from './pages/not-found';
import HomePage from './pages/home-page';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
    errorElement: <NotFound />,
    // children: [...publicRoutes, ...privateRoutes],
  },
]);

export default router;
