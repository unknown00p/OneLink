'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Spotlight } from '@/components/aceternity/spotlight';
import { AnimatedButton } from '@/components/aceternity/animated-button';
import { Link as LinkIcon, BarChart3, Zap, Star } from 'lucide-react';

export default function Home() {
  const features = [
    {
      icon: LinkIcon,
      title: 'One Link, Infinite Possibilities',
      description: 'Share all your important links in one beautiful, customizable page.',
    },
    {
      icon: Zap,
      title: 'Lightning Fast URL Shortener',
      description: 'Create short, memorable links that track clicks and performance.',
    },
    {
      icon: BarChart3,
      title: 'Powerful Analytics',
      description: 'Get detailed insights into your link performance and audience.',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-black relative overflow-hidden">
      <Spotlight className="hidden md:block" fill="#3b82f6" />

      <nav className="relative z-20 container mx-auto px-4 py-6 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-lg">
            <LinkIcon className="w-6 h-6 text-white" />
          </div>
          <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            LinkBio
          </span>
        </div>
        <div className="flex items-center space-x-4">
          <Link
            href="/login"
            className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white font-medium transition-colors"
          >
            Log in
          </Link>
          <Link
            href="/signup"
            className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all"
          >
            Sign up
          </Link>
        </div>
      </nav>

      <main className="relative z-10 container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
            className="inline-flex items-center space-x-2 px-4 py-2 bg-blue-100 dark:bg-blue-900/30 rounded-full mb-8"
          >
            <Star className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
              Trusted by 10,000+ creators
            </span>
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            One link for
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              everything you create
            </span>
          </h1>

          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Build your personal brand with a beautiful link-in-bio page. Share your content, grow your audience, and track your success.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link href="/signup">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold text-lg hover:shadow-2xl transition-all"
              >
                Get Started Free
              </motion.button>
            </Link>
            <Link href="/creator">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto px-8 py-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-xl font-semibold text-lg border-2 border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-purple-500 transition-all"
              >
                View Demo
              </motion.button>
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm p-8 rounded-2xl border border-gray-200 dark:border-gray-800 hover:border-blue-500 dark:hover:border-purple-500 transition-all hover:shadow-xl"
              >
                <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-3 rounded-xl inline-block mb-4">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-center mt-20"
        >
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Join thousands of creators who trust LinkBio
          </p>
          <div className="flex items-center justify-center space-x-8 opacity-50">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="w-12 h-12 bg-gray-300 dark:bg-gray-700 rounded-full" />
            ))}
          </div>
        </motion.div>
      </main>

      <footer className="relative z-10 border-t border-gray-200 dark:border-gray-800 mt-20">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-lg">
                <LinkIcon className="w-5 h-5 text-white" />
              </div>
              <span className="text-lg font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                LinkBio
              </span>
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              © 2024 LinkBio. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
