'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface SpotlightProps {
  className?: string;
  fill?: string;
}

export const Spotlight: React.FC<SpotlightProps> = ({ className, fill = 'white' }) => {
  return (
    <motion.div
      className={cn('absolute -top-40 left-0 md:left-60 md:-top-20', className)}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="relative w-[80vw] h-[80vh] max-w-6xl">
        <div
          className="absolute inset-0 blur-3xl"
          style={{
            background: `radial-gradient(circle, ${fill} 0%, transparent 70%)`,
            opacity: 0.15,
          }}
        />
      </div>
    </motion.div>
  );
};
