'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { AnimatedButton } from '@/components/aceternity/animated-button';
import { Spotlight } from '@/components/aceternity/spotlight';
import { ExternalLink } from 'lucide-react';
import { mockUser, mockLinks } from '@/data/mockData';

interface PageProps {
  params: {
    username: string;
  };
}

export default function BioPage({ params }: PageProps) {
  const user = mockUser;
  const activeLinks = mockLinks.filter((link) => link.isActive).sort((a, b) => a.position - b.position);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-black relative overflow-hidden">
      <Spotlight className="hidden md:block" fill="#8b5cf6" />

      <div className="relative z-10 min-h-screen flex items-center justify-center p-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-2xl"
        >
          <div className="text-center mb-8">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', stiffness: 200, damping: 15 }}
              className="inline-block mb-6"
            >
              <div className="relative">
                <div className="w-28 h-28 rounded-full overflow-hidden bg-gradient-to-br from-blue-600 to-purple-600 p-1">
                  <div className="w-full h-full rounded-full overflow-hidden bg-white dark:bg-gray-900">
                    {user.avatar ? (
                      <img src={user.avatar} alt={user.displayName} className="w-full h-full object-cover" />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-600 to-purple-600">
                        <span className="text-4xl font-bold text-white">
                          {user.displayName.charAt(0).toUpperCase()}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
                <motion.div
                  className="absolute -inset-1 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 opacity-20 blur-lg"
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.2, 0.3, 0.2],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                />
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-4xl font-bold text-gray-900 dark:text-white mb-3"
            >
              {user.displayName}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-lg text-gray-600 dark:text-gray-300 max-w-md mx-auto leading-relaxed"
            >
              {user.bio}
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="space-y-4"
          >
            {activeLinks.map((link, index) => (
              <motion.div
                key={link.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
              >
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group"
                >
                  <motion.div
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="relative bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-2 border-gray-200 dark:border-gray-800 rounded-2xl p-6 transition-all duration-200 hover:border-blue-500 dark:hover:border-purple-500 hover:shadow-xl overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600/0 via-purple-600/0 to-blue-600/0 group-hover:from-blue-600/5 group-hover:via-purple-600/5 group-hover:to-blue-600/5 transition-all duration-300" />

                    <div className="relative flex items-center justify-between">
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1 group-hover:text-blue-600 dark:group-hover:text-purple-400 transition-colors">
                          {link.title}
                        </h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400 truncate">
                          {link.url}
                        </p>
                      </div>
                      <motion.div
                        animate={{ x: [0, 4, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                        className="ml-4"
                      >
                        <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-blue-600 dark:group-hover:text-purple-400 transition-colors" />
                      </motion.div>
                    </div>

                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-purple-600 transform origin-left"
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.div>
                </a>
              </motion.div>
            ))}
          </motion.div>

          {activeLinks.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-center py-12"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 dark:bg-gray-800 mb-4">
                <ExternalLink className="w-8 h-8 text-gray-400" />
              </div>
              <p className="text-gray-600 dark:text-gray-400">No links available yet</p>
            </motion.div>
          )}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-center mt-12"
          >
            <a
              href="/signup"
              className="inline-flex items-center space-x-2 text-sm text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300 transition-colors"
            >
              <span>Create your own link-in-bio page</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
