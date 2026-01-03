'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { AnimatedCard } from '@/components/aceternity/animated-card';
import { Save, Mail, Lock, Bell, Trash2 } from 'lucide-react';

export const Settings: React.FC = () => {
  const [saving, setSaving] = useState(false);
  const [notifications, setNotifications] = useState({
    emailUpdates: true,
    weeklyReport: true,
    clickAlerts: false,
  });

  const handleSave = () => {
    setSaving(true);
    setTimeout(() => {
      setSaving(false);
    }, 1000);
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Settings</h1>
        <p className="text-gray-600 dark:text-gray-400 mt-1">
          Manage your account preferences
        </p>
      </div>

      <AnimatedCard className="p-6">
        <div className="flex items-center space-x-3 mb-6">
          <Mail className="w-6 h-6 text-blue-600" />
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Email Settings</h2>
        </div>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Email Address
            </label>
            <input
              type="email"
              defaultValue="creator@example.com"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            />
          </div>
          <button
            onClick={handleSave}
            className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all"
          >
            Update Email
          </button>
        </div>
      </AnimatedCard>

      <AnimatedCard className="p-6">
        <div className="flex items-center space-x-3 mb-6">
          <Lock className="w-6 h-6 text-purple-600" />
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Password</h2>
        </div>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Current Password
            </label>
            <input
              type="password"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              placeholder="••••••••"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              New Password
            </label>
            <input
              type="password"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              placeholder="••••••••"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Confirm New Password
            </label>
            <input
              type="password"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              placeholder="••••••••"
            />
          </div>
          <button
            onClick={handleSave}
            className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all"
          >
            Change Password
          </button>
        </div>
      </AnimatedCard>

      <AnimatedCard className="p-6">
        <div className="flex items-center space-x-3 mb-6">
          <Bell className="w-6 h-6 text-green-600" />
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Notifications</h2>
        </div>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-gray-900 dark:text-white">Email Updates</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Receive updates about your account</p>
            </div>
            <button
              onClick={() => setNotifications({ ...notifications, emailUpdates: !notifications.emailUpdates })}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                notifications.emailUpdates ? 'bg-blue-600' : 'bg-gray-300 dark:bg-gray-600'
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  notifications.emailUpdates ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-gray-900 dark:text-white">Weekly Report</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Get a summary of your link performance</p>
            </div>
            <button
              onClick={() => setNotifications({ ...notifications, weeklyReport: !notifications.weeklyReport })}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                notifications.weeklyReport ? 'bg-blue-600' : 'bg-gray-300 dark:bg-gray-600'
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  notifications.weeklyReport ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-gray-900 dark:text-white">Click Alerts</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Get notified when someone clicks your links</p>
            </div>
            <button
              onClick={() => setNotifications({ ...notifications, clickAlerts: !notifications.clickAlerts })}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                notifications.clickAlerts ? 'bg-blue-600' : 'bg-gray-300 dark:bg-gray-600'
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  notifications.clickAlerts ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
          </div>
        </div>
      </AnimatedCard>

      <AnimatedCard className="p-6 border-red-200 dark:border-red-900">
        <div className="flex items-center space-x-3 mb-4">
          <Trash2 className="w-6 h-6 text-red-600" />
          <h2 className="text-xl font-semibold text-red-600">Danger Zone</h2>
        </div>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Once you delete your account, there is no going back. Please be certain.
        </p>
        <button className="px-6 py-2 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition-all">
          Delete Account
        </button>
      </AnimatedCard>
    </div>
  );
};
