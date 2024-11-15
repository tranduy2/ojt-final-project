import { createBrowserRouter } from 'react-router-dom';
import SignIn from './pages/sign-in';
import NotFound from './pages/not-found';
import Payment from './pages/Payment';

const router = createBrowserRouter([
  {
    path: '/',
    element: <SignIn />,
    errorElement: <NotFound />,
    // children: [...publicRoutes, ...privateRoutes],
  },
  {
    path: '/Payment',
    element: <Payment />,
  },
]);

export default router;
