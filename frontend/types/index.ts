export interface User {
  id: string;
  email: string;
  username: string;
  displayName: string;
  bio: string;
  avatar: string | null;
  createdAt: Date;
}

export interface Link {
  id: string;
  userId: string;
  title: string;
  url: string;
  shortCode: string;
  position: number;
  isActive: boolean;
  clicks: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface Analytics {
  totalClicks: number;
  linksCount: number;
  clicksByLink: {
    linkId: string;
    title: string;
    clicks: number;
  }[];
  clicksByDate: {
    date: string;
    clicks: number;
  }[];
}

export interface SocialLink {
  id: string;
  platform: string;
  url: string;
  icon: string;
}

export type DashboardTab = 'bio' | 'links' | 'analytics' | 'settings';
