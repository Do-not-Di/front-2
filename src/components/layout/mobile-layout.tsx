import type { ReactNode } from 'react';

interface MobileLayoutProps {
  children: ReactNode;
}

const MobileLayout = ({ children }: MobileLayoutProps) => {
  return (
    <div className='min-h-screen bg-gray-100'>
      <div className='max-w-md mx-auto min-h-screen bg-white shadow-lg'>
        {children}
      </div>
    </div>
  );
};

export default MobileLayout;
