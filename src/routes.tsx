import { createBrowserRouter, Outlet } from 'react-router';
import { AnimatePresence } from 'motion/react';
import HomePage from './routes/home';
import MobileLayout from './components/layout/mobile-layout';
import ChatPage from './routes/chat';
import DetailPage from './routes/detail';
import { useLocation } from 'react-router';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <AnimatePresence mode="wait">
        <AppOutlet />
      </AnimatePresence>
    ),
    children: [
      {
        path: '/',
        element: (
          <MobileLayout>
            <HomePage />
          </MobileLayout>
        ),
      },
      {
        path: '/chat',
        element: (
          <MobileLayout headerTitle="Chat" showBack={true}>
            <ChatPage />
          </MobileLayout>
        ),
      },
      {
        path: '/detail',
        element: (
          <MobileLayout headerTitle="Chat" showBack={true}>
            <DetailPage />
          </MobileLayout>
        ),
      },
    ],
  },
]);

function AppOutlet() {
  const pathname = useLocation();
  return <Outlet key={pathname.pathname} />;
}

export default router;
