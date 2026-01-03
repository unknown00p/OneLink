'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface AnimatedButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  variant?: 'primary' | 'secondary' | 'ghost';
}

export const AnimatedButton: React.FC<AnimatedButtonProps> = ({
  children,
  href,
  onClick,
  className,
  variant = 'primary',
}) => {
  const baseStyles = 'relative px-6 py-3 rounded-lg font-medium transition-all duration-200 overflow-hidden group';

  const variantStyles = {
    primary: 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-lg hover:scale-105',
    secondary: 'bg-white/10 backdrop-blur-sm text-white border border-white/20 hover:bg-white/20',
    ghost: 'bg-transparent text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800',
  };

  const Component = href ? motion.a : motion.button;

  return (
    <Component
      href={href}
      onClick={onClick}
      className={cn(baseStyles, variantStyles[variant], className)}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
    >
      <span className="relative z-10">{children}</span>
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0"
        initial={{ x: '-100%' }}
        whileHover={{ x: '100%' }}
        transition={{ duration: 0.6 }}
      />
    </Component>
  );
};
