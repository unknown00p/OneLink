'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface GradientBgProps {
  children: React.ReactNode;
  variant?: 'default' | 'purple' | 'blue' | 'gradient';
}

export const GradientBg: React.FC<GradientBgProps> = ({ children, variant = 'default' }) => {
  const variants = {
    default: 'from-gray-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-black',
    purple: 'from-purple-50 via-pink-50 to-red-50 dark:from-purple-900/20 dark:via-pink-900/20 dark:to-red-900/20',
    blue: 'from-blue-50 via-cyan-50 to-teal-50 dark:from-blue-900/20 dark:via-cyan-900/20 dark:to-teal-900/20',
    gradient: 'from-indigo-50 via-purple-50 to-pink-50 dark:from-indigo-900/20 dark:via-purple-900/20 dark:to-pink-900/20',
  };

  return (
    <div className={`min-h-screen bg-gradient-to-br ${variants[variant]} relative overflow-hidden`}>
      <motion.div
        className="absolute inset-0 opacity-30"
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
        style={{
          backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(120, 119, 198, 0.3), transparent 50%), radial-gradient(circle at 80% 80%, rgba(120, 119, 198, 0.3), transparent 50%)',
        }}
      />
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};
