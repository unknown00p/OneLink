import { User, Link, Analytics } from '@/types';

export const mockUser: User = {
  id: '1',
  email: 'creator@example.com',
  username: 'creator',
  displayName: 'Sarah Chen',
  bio: 'Digital creator, designer & entrepreneur. Building beautiful things on the internet.',
  avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200',
  createdAt: new Date('2024-01-01'),
};

export const mockLinks: Link[] = [
  {
    id: '1',
    userId: '1',
    title: 'My Portfolio',
    url: 'https://example.com/portfolio',
    shortCode: 'abc123',
    position: 0,
    isActive: true,
    clicks: 1234,
    createdAt: new Date('2024-01-15'),
    updatedAt: new Date('2024-01-15'),
  },
  {
    id: '2',
    userId: '1',
    title: 'Latest Blog Post',
    url: 'https://example.com/blog/latest',
    shortCode: 'def456',
    position: 1,
    isActive: true,
    clicks: 856,
    createdAt: new Date('2024-01-20'),
    updatedAt: new Date('2024-01-20'),
  },
  {
    id: '3',
    userId: '1',
    title: 'YouTube Channel',
    url: 'https://youtube.com/@creator',
    shortCode: 'ghi789',
    position: 2,
    isActive: true,
    clicks: 2341,
    createdAt: new Date('2024-02-01'),
    updatedAt: new Date('2024-02-01'),
  },
  {
    id: '4',
    userId: '1',
    title: 'Shop My Designs',
    url: 'https://shop.example.com',
    shortCode: 'jkl012',
    position: 3,
    isActive: false,
    clicks: 432,
    createdAt: new Date('2024-02-10'),
    updatedAt: new Date('2024-02-10'),
  },
];

export const mockAnalytics: Analytics = {
  totalClicks: 4863,
  linksCount: 4,
  clicksByLink: [
    { linkId: '3', title: 'YouTube Channel', clicks: 2341 },
    { linkId: '1', title: 'My Portfolio', clicks: 1234 },
    { linkId: '2', title: 'Latest Blog Post', clicks: 856 },
    { linkId: '4', title: 'Shop My Designs', clicks: 432 },
  ],
  clicksByDate: [
    { date: '2024-01-01', clicks: 45 },
    { date: '2024-01-02', clicks: 67 },
    { date: '2024-01-03', clicks: 89 },
    { date: '2024-01-04', clicks: 123 },
    { date: '2024-01-05', clicks: 98 },
    { date: '2024-01-06', clicks: 156 },
    { date: '2024-01-07', clicks: 134 },
  ],
};
