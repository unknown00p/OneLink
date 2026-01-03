'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { AnimatedCard } from '@/components/aceternity/animated-card';
import { Camera, Save, ExternalLink } from 'lucide-react';
import { User } from '@/types';

interface BioEditorProps {
  user: User;
  onSave: (user: User) => void;
}

export const BioEditor: React.FC<BioEditorProps> = ({ user, onSave }) => {
  const [formData, setFormData] = useState({
    displayName: user.displayName,
    bio: user.bio,
    username: user.username,
  });
  const [saving, setSaving] = useState(false);

  const handleSave = () => {
    setSaving(true);
    setTimeout(() => {
      onSave({ ...user, ...formData });
      setSaving(false);
    }, 1000);
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">My Bio Page</h1>
          <p className="text-gray-600 dark:text-gray-400 mt-1">
            Customize your public profile
          </p>
        </div>
        <a
          href={`/${user.username}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-all"
        >
          <span className="text-sm font-medium">View public page</span>
          <ExternalLink className="w-4 h-4" />
        </a>
      </div>

      <AnimatedCard className="p-6">
        <h2 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">Profile Information</h2>

        <div className="space-y-6">
          <div className="flex items-center space-x-6">
            <div className="relative group">
              <div className="w-24 h-24 rounded-full overflow-hidden bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
                {user.avatar ? (
                  <img src={user.avatar} alt="Avatar" className="w-full h-full object-cover" />
                ) : (
                  <span className="text-3xl font-bold text-white">
                    {user.displayName.charAt(0).toUpperCase()}
                  </span>
                )}
              </div>
              <label
                htmlFor="avatar-upload"
                className="absolute inset-0 flex items-center justify-center bg-black/50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
              >
                <Camera className="w-6 h-6 text-white" />
              </label>
              <input
                id="avatar-upload"
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
              />
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-gray-700 dark:text-gray-300">Profile Photo</p>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                Click to upload a new photo (JPG, PNG, max 2MB)
              </p>
            </div>
          </div>

          <div>
            <label htmlFor="displayName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Display Name
            </label>
            <input
              id="displayName"
              type="text"
              value={formData.displayName}
              onChange={(e) => setFormData({ ...formData, displayName: e.target.value })}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              placeholder="Your name"
            />
          </div>

          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Username
            </label>
            <div className="flex items-center space-x-2">
              <span className="text-gray-500 dark:text-gray-400">bio.link/</span>
              <input
                id="username"
                type="text"
                value={formData.username}
                onChange={(e) => setFormData({ ...formData, username: e.target.value.toLowerCase() })}
                className="flex-1 px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                placeholder="yourname"
              />
            </div>
          </div>

          <div>
            <label htmlFor="bio" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Bio
            </label>
            <textarea
              id="bio"
              value={formData.bio}
              onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
              rows={4}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
              placeholder="Tell your visitors about yourself..."
            />
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
              {formData.bio.length} / 160 characters
            </p>
          </div>

          <motion.button
            onClick={handleSave}
            disabled={saving}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full sm:w-auto flex items-center justify-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Save className="w-5 h-5" />
            <span>{saving ? 'Saving...' : 'Save Changes'}</span>
          </motion.button>
        </div>
      </AnimatedCard>
    </div>
  );
};
