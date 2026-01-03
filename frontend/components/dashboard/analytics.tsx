'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { AnimatedCard } from '@/components/aceternity/animated-card';
import { TrendingUp, MousePointerClick, Link as LinkIcon, Calendar } from 'lucide-react';
import { Analytics as AnalyticsType } from '@/types';

interface AnalyticsProps {
  analytics: AnalyticsType;
}

export const Analytics: React.FC<AnalyticsProps> = ({ analytics }) => {
  const [dateRange, setDateRange] = useState<'7d' | '30d' | '90d'>('7d');

  const stats = [
    {
      label: 'Total Clicks',
      value: analytics.totalClicks.toLocaleString(),
      icon: MousePointerClick,
      color: 'from-blue-600 to-blue-400',
      change: '+12.5%',
    },
    {
      label: 'Active Links',
      value: analytics.linksCount,
      icon: LinkIcon,
      color: 'from-purple-600 to-purple-400',
      change: '+2',
    },
    {
      label: 'Avg. Daily Clicks',
      value: Math.round(analytics.totalClicks / 30).toLocaleString(),
      icon: TrendingUp,
      color: 'from-green-600 to-green-400',
      change: '+8.2%',
    },
  ];

  const maxClicks = Math.max(...analytics.clicksByDate.map((d) => d.clicks));

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Analytics</h1>
          <p className="text-gray-600 dark:text-gray-400 mt-1">
            Track your link performance
          </p>
        </div>
        <div className="flex items-center space-x-2">
          {(['7d', '30d', '90d'] as const).map((range) => (
            <button
              key={range}
              onClick={() => setDateRange(range)}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                dateRange === range
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              {range === '7d' ? 'Last 7 days' : range === '30d' ? 'Last 30 days' : 'Last 90 days'}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <AnimatedCard key={stat.label} className="p-6">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">{stat.label}</p>
                  <p className="text-3xl font-bold text-gray-900 dark:text-white">{stat.value}</p>
                  <p className="text-sm text-green-600 mt-2">{stat.change} from last period</p>
                </div>
                <div className={`p-3 rounded-lg bg-gradient-to-br ${stat.color}`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
              </div>
            </AnimatedCard>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <AnimatedCard className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Clicks Over Time</h2>
            <Calendar className="w-5 h-5 text-gray-400" />
          </div>
          <div className="space-y-2">
            {analytics.clicksByDate.map((data, index) => (
              <div key={index} className="flex items-center space-x-3">
                <span className="text-xs text-gray-500 w-16">{data.date.slice(5)}</span>
                <div className="flex-1 bg-gray-100 dark:bg-gray-800 rounded-full h-8 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${(data.clicks / maxClicks) * 100}%` }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    className="h-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-end pr-2"
                  >
                    <span className="text-xs text-white font-medium">{data.clicks}</span>
                  </motion.div>
                </div>
              </div>
            ))}
          </div>
        </AnimatedCard>

        <AnimatedCard className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Top Links</h2>
            <TrendingUp className="w-5 h-5 text-gray-400" />
          </div>
          <div className="space-y-4">
            {analytics.clicksByLink.map((link, index) => (
              <div key={link.linkId} className="flex items-center space-x-4">
                <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 text-white font-bold text-sm">
                  {index + 1}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-gray-900 dark:text-white truncate">{link.title}</p>
                  <p className="text-sm text-gray-500">{link.clicks} clicks</p>
                </div>
                <div className="text-right">
                  <div className="text-sm font-medium text-gray-900 dark:text-white">
                    {((link.clicks / analytics.totalClicks) * 100).toFixed(1)}%
                  </div>
                  <div className="text-xs text-gray-500">of total</div>
                </div>
              </div>
            ))}
          </div>
        </AnimatedCard>
      </div>

      <AnimatedCard className="p-6">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Quick Stats</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
            <p className="text-2xl font-bold text-gray-900 dark:text-white">
              {analytics.clicksByLink.length}
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Links with clicks</p>
          </div>
          <div className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
            <p className="text-2xl font-bold text-gray-900 dark:text-white">
              {Math.round(analytics.totalClicks / analytics.linksCount)}
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Avg. per link</p>
          </div>
          <div className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
            <p className="text-2xl font-bold text-gray-900 dark:text-white">
              {analytics.clicksByLink[0]?.clicks || 0}
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Top performer</p>
          </div>
          <div className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
            <p className="text-2xl font-bold text-gray-900 dark:text-white">
              {Math.max(...analytics.clicksByDate.map((d) => d.clicks))}
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Best day</p>
          </div>
        </div>
      </AnimatedCard>
    </div>
  );
};
