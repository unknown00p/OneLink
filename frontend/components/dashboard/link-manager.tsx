'use client';

import React, { useState } from 'react';
import { motion, Reorder } from 'framer-motion';
import { AnimatedCard } from '@/components/aceternity/animated-card';
import { Plus, GripVertical, ExternalLink, Trash2, Eye, EyeOff, Copy, Check } from 'lucide-react';
import { Link } from '@/types';

interface LinkManagerProps {
  links: Link[];
  onUpdate: (links: Link[]) => void;
}

export const LinkManager: React.FC<LinkManagerProps> = ({ links, onUpdate }) => {
  const [items, setItems] = useState(links);
  const [showAddForm, setShowAddForm] = useState(false);
  const [newLink, setNewLink] = useState({ title: '', url: '' });
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleReorder = (newOrder: Link[]) => {
    const updatedLinks = newOrder.map((link, index) => ({ ...link, position: index }));
    setItems(updatedLinks);
    onUpdate(updatedLinks);
  };

  const handleAddLink = () => {
    if (!newLink.title || !newLink.url) return;

    const link: Link = {
      id: Date.now().toString(),
      userId: '1',
      title: newLink.title,
      url: newLink.url,
      shortCode: Math.random().toString(36).substring(7),
      position: items.length,
      isActive: true,
      clicks: 0,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    const updated = [...items, link];
    setItems(updated);
    onUpdate(updated);
    setNewLink({ title: '', url: '' });
    setShowAddForm(false);
  };

  const handleToggleActive = (id: string) => {
    const updated = items.map((link) =>
      link.id === id ? { ...link, isActive: !link.isActive } : link
    );
    setItems(updated);
    onUpdate(updated);
  };

  const handleDelete = (id: string) => {
    const updated = items.filter((link) => link.id !== id);
    setItems(updated);
    onUpdate(updated);
  };

  const handleCopyShortLink = (shortCode: string, id: string) => {
    navigator.clipboard.writeText(`bio.link/s/${shortCode}`);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Links</h1>
          <p className="text-gray-600 dark:text-gray-400 mt-1">
            Manage your links and track performance
          </p>
        </div>
        <motion.button
          onClick={() => setShowAddForm(true)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all"
        >
          <Plus className="w-5 h-5" />
          <span>Add Link</span>
        </motion.button>
      </div>

      {showAddForm && (
        <AnimatedCard className="p-6">
          <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Add New Link</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Title
              </label>
              <input
                type="text"
                value={newLink.title}
                onChange={(e) => setNewLink({ ...newLink, title: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                placeholder="My awesome link"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                URL
              </label>
              <input
                type="url"
                value={newLink.url}
                onChange={(e) => setNewLink({ ...newLink, url: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                placeholder="https://example.com"
              />
            </div>
            <div className="flex space-x-3">
              <button
                onClick={handleAddLink}
                className="flex-1 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all"
              >
                Add Link
              </button>
              <button
                onClick={() => setShowAddForm(false)}
                className="px-4 py-2 bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg font-semibold hover:bg-gray-300 dark:hover:bg-gray-700 transition-all"
              >
                Cancel
              </button>
            </div>
          </div>
        </AnimatedCard>
      )}

      <Reorder.Group axis="y" values={items} onReorder={handleReorder} className="space-y-3">
        {items.map((link) => (
          <Reorder.Item key={link.id} value={link}>
            <AnimatedCard className="p-4 cursor-move" hover={false}>
              <div className="flex items-center space-x-4">
                <GripVertical className="w-5 h-5 text-gray-400 flex-shrink-0" />

                <div className="flex-1 min-w-0">
                  <div className="flex items-center space-x-2 mb-1">
                    <h3 className="font-semibold text-gray-900 dark:text-white truncate">
                      {link.title}
                    </h3>
                    {!link.isActive && (
                      <span className="px-2 py-0.5 bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-400 text-xs rounded">
                        Inactive
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 truncate">{link.url}</p>
                  <div className="flex items-center space-x-4 mt-2">
                    <span className="text-xs text-gray-500">{link.clicks} clicks</span>
                    <button
                      onClick={() => handleCopyShortLink(link.shortCode, link.id)}
                      className="flex items-center space-x-1 text-xs text-blue-600 hover:text-blue-700 transition-colors"
                    >
                      {copiedId === link.id ? (
                        <>
                          <Check className="w-3 h-3" />
                          <span>Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3 h-3" />
                          <span>bio.link/s/{link.shortCode}</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => handleToggleActive(link.id)}
                    className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                    title={link.isActive ? 'Hide link' : 'Show link'}
                  >
                    {link.isActive ? (
                      <Eye className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                    ) : (
                      <EyeOff className="w-5 h-5 text-gray-400" />
                    )}
                  </button>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                  >
                    <ExternalLink className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                  </a>
                  <button
                    onClick={() => handleDelete(link.id)}
                    className="p-2 rounded-lg hover:bg-red-50 dark:hover:bg-red-900/10 transition-colors"
                  >
                    <Trash2 className="w-5 h-5 text-red-600" />
                  </button>
                </div>
              </div>
            </AnimatedCard>
          </Reorder.Item>
        ))}
      </Reorder.Group>

      {items.length === 0 && !showAddForm && (
        <div className="text-center py-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 dark:bg-gray-800 mb-4">
            <Plus className="w-8 h-8 text-gray-400" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">No links yet</h3>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Create your first link to get started
          </p>
          <button
            onClick={() => setShowAddForm(true)}
            className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all"
          >
            Add Your First Link
          </button>
        </div>
      )}
    </div>
  );
};
