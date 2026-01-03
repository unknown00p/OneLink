'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface AnimatedCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export const AnimatedCard: React.FC<AnimatedCardProps> = ({
  children,
  className,
  hover = true,
}) => {
  return (
    <motion.div
      className={cn(
        'bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 overflow-hidden',
        className
      )}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      whileHover={hover ? { y: -4, boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1)' } : undefined}
    >
      {children}
    </motion.div>
  );
};
