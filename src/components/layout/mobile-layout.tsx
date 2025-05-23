import type { ReactNode } from 'react';
import { motion } from 'motion/react';
import { fadeInOutVariants } from '@/constants';

interface MobileLayoutProps {
  children: ReactNode;
  headerTitle?: string;
  showBack?: boolean;
}

const MobileLayout = ({ children }: MobileLayoutProps) => {
  return (
    <motion.div
      variants={fadeInOutVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="min-h-screen bg-gray-100">
      <div className="max-w-md mx-auto min-h-screen bg-white shadow-lg flex flex-col">
        <div className="flex-1 overflow-y-auto">{children}</div>
        {/* <BottomNav /> */}
      </div>
    </motion.div>
  );
};

export default MobileLayout;
