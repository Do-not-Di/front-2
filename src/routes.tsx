import { createBrowserRouter } from 'react-router';
import HomePage from './routes/home';
import MobileLayout from './components/layout/mobile-layout';
import ChatPage from './routes/chat';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <MobileLayout headerTitle='Gyeongju' showBack={false}>
        <HomePage />
      </MobileLayout>
    ),
  },
  {
    path: '/chat',
    element: (
      <MobileLayout headerTitle='Chat' showBack={true}>
        <ChatPage />
      </MobileLayout>
    ),
  },
]);

export default router;
