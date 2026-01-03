'use client';

import React, { useState } from 'react';
import { Sidebar } from '@/components/dashboard/sidebar';
import { BioEditor } from '@/components/dashboard/bio-editor';
import { LinkManager } from '@/components/dashboard/link-manager';
import { Analytics } from '@/components/dashboard/analytics';
import { Settings } from '@/components/dashboard/settings';
import { DashboardTab } from '@/types';
import { mockUser, mockLinks, mockAnalytics } from '@/data/mockData';

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState<DashboardTab>('bio');
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [user, setUser] = useState(mockUser);
  const [links, setLinks] = useState(mockLinks);

  const renderContent = () => {
    switch (activeTab) {
      case 'bio':
        return <BioEditor user={user} onSave={setUser} />;
      case 'links':
        return <LinkManager links={links} onUpdate={setLinks} />;
      case 'analytics':
        return <Analytics analytics={mockAnalytics} />;
      case 'settings':
        return <Settings />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-black flex">
      <Sidebar
        activeTab={activeTab}
        onTabChange={setActiveTab}
        isMobileOpen={isMobileOpen}
        onMobileToggle={() => setIsMobileOpen(!isMobileOpen)}
      />

      <main className="flex-1 lg:ml-64 p-4 lg:p-8">
        <div className="max-w-6xl mx-auto">
          {renderContent()}
        </div>
      </main>
    </div>
  );
}
