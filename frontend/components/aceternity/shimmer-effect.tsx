'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface ShimmerEffectProps {
  className?: string;
}

export const ShimmerEffect: React.FC<ShimmerEffectProps> = ({ className }) => {
  return (
    <div className={cn('relative overflow-hidden bg-gray-200 dark:bg-gray-800 rounded-lg', className)}>
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
        animate={{ x: ['-100%', '100%'] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
      />
    </div>
  );
};

export const SkeletonLoader: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div className={cn('space-y-4', className)}>
      <ShimmerEffect className="h-12 w-3/4" />
      <ShimmerEffect className="h-8 w-full" />
      <ShimmerEffect className="h-8 w-5/6" />
    </div>
  );
};
