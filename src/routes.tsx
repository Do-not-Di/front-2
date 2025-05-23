import { createBrowserRouter } from 'react-router';
import HomePage from './routes/home';
import MobileLayout from './components/layout/mobile-layout';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <MobileLayout>
        <HomePage />
      </MobileLayout>
    ),
  },
]);

export default router;
