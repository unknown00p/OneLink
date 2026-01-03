'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { LayoutDashboard, Link as LinkIcon, BarChart3, Settings, LogOut, Menu, X } from 'lucide-react';
import { DashboardTab } from '@/types';
import { cn } from '@/lib/utils';

interface SidebarProps {
  activeTab: DashboardTab;
  onTabChange: (tab: DashboardTab) => void;
  isMobileOpen: boolean;
  onMobileToggle: () => void;
}

const menuItems = [
  { id: 'bio' as DashboardTab, label: 'My Bio Page', icon: LayoutDashboard },
  { id: 'links' as DashboardTab, label: 'Links', icon: LinkIcon },
  { id: 'analytics' as DashboardTab, label: 'Analytics', icon: BarChart3 },
  { id: 'settings' as DashboardTab, label: 'Settings', icon: Settings },
];

export const Sidebar: React.FC<SidebarProps> = ({ activeTab, onTabChange, isMobileOpen, onMobileToggle }) => {
  return (
    <>
      <button
        onClick={onMobileToggle}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-white dark:bg-gray-900 rounded-lg shadow-lg border border-gray-200 dark:border-gray-800"
      >
        {isMobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      <aside
        className={cn(
          'fixed inset-y-0 left-0 z-40 w-64 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800 flex flex-col transition-transform duration-300',
          'lg:static lg:translate-x-0',
          isMobileOpen ? 'translate-x-0' : '-translate-x-full'
        )}
      >
        <div className="p-6 border-b border-gray-200 dark:border-gray-800">
          <div className="flex items-center space-x-2">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-lg">
              <LinkIcon className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              LinkBio
            </span>
          </div>
        </div>

        <nav className="flex-1 p-4 space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;

            return (
              <button
                key={item.id}
                onClick={() => {
                  onTabChange(item.id);
                  if (window.innerWidth < 1024) {
                    onMobileToggle();
                  }
                }}
                className={cn(
                  'w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all',
                  isActive
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                )}
              >
                <Icon className="w-5 h-5" />
                <span className="font-medium">{item.label}</span>
              </button>
            );
          })}
        </nav>

        <div className="p-4 border-t border-gray-200 dark:border-gray-800">
          <button className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-red-600 hover:bg-red-50 dark:hover:bg-red-900/10 transition-all">
            <LogOut className="w-5 h-5" />
            <span className="font-medium">Log out</span>
          </button>
        </div>
      </aside>

      {isMobileOpen && (
        <div
          onClick={onMobileToggle}
          className="lg:hidden fixed inset-0 bg-black/50 z-30"
        />
      )}
    </>
  );
};
