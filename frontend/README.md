# LinkBio - Link-in-Bio + URL Shortener SaaS

A production-ready frontend for a modern Link-in-Bio and URL Shortener platform, built with Next.js, TypeScript, and Aceternity UI.

## Features

### Authentication
- Beautiful signup and login pages with form validation
- Loading states and error handling
- Gradient animations and spotlight effects

### Dashboard
- Responsive sidebar navigation
- Four main sections:
  - **My Bio Page**: Edit profile information, upload avatar, customize bio
  - **Links**: Manage links with drag-and-drop reordering
  - **Analytics**: Track clicks and performance with visual charts
  - **Settings**: Account settings, notifications, and preferences

### Link Management
- Add, edit, and delete links
- Drag-and-drop reordering
- Toggle link visibility (active/inactive)
- Auto-generated short codes
- Click tracking
- Copy short link to clipboard

### Public Bio Page
- Beautiful, animated bio page at `/{username}`
- Displays user avatar, name, and bio
- List of active links with hover effects
- Mobile-responsive design
- Smooth animations and transitions

### Analytics
- Total clicks tracking
- Per-link performance metrics
- Daily clicks visualization
- Top-performing links ranking
- Quick stats dashboard

## Tech Stack

- **Framework**: Next.js 13 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Aceternity UI (custom components with Framer Motion)
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **State Management**: React Hooks (useState, useEffect)

## Project Structure

```
├── app/
│   ├── page.tsx                 # Landing page
│   ├── login/page.tsx           # Login page
│   ├── signup/page.tsx          # Signup page
│   ├── dashboard/page.tsx       # Main dashboard
│   └── [username]/page.tsx      # Public bio page
├── components/
│   ├── aceternity/              # Aceternity UI components
│   │   ├── animated-button.tsx
│   │   ├── animated-card.tsx
│   │   ├── shimmer-effect.tsx
│   │   └── spotlight.tsx
│   └── dashboard/               # Dashboard components
│       ├── sidebar.tsx
│       ├── bio-editor.tsx
│       ├── link-manager.tsx
│       ├── analytics.tsx
│       └── settings.tsx
├── types/
│   └── index.ts                 # TypeScript type definitions
├── data/
│   └── mockData.ts              # Mock data for development
└── lib/
    └── utils.ts                 # Utility functions
```

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

### Build

```bash
npm run build
```

### Production

```bash
npm start
```

## Key Features

### Aceternity UI Components

Custom-built animated components with smooth transitions:
- **AnimatedButton**: Hover effects with shimmer animation
- **AnimatedCard**: Card component with elevation on hover
- **Spotlight**: Background spotlight effect for hero sections
- **ShimmerEffect**: Loading skeleton with shimmer animation

### Drag-and-Drop

Links can be reordered using drag-and-drop functionality powered by Framer Motion's Reorder component.

### Responsive Design

- Mobile-first approach
- Responsive sidebar (drawer on mobile, fixed on desktop)
- Optimized for all screen sizes
- Touch-friendly interactions

### Animations

Smooth, performant animations throughout:
- Page transitions
- Hover effects
- Loading states
- Micro-interactions

## Design Principles

- **Minimal**: Clean, uncluttered interface
- **Modern**: Contemporary design patterns and aesthetics
- **Creator-focused**: Built for content creators and influencers
- **Accessible**: Proper labels, focus states, and ARIA attributes
- **Performant**: Optimized for speed and smooth animations

## Mock Data

The application currently uses mock data for demonstration. To connect to a real backend:

1. Replace mock data imports with API calls
2. Implement authentication logic
3. Connect to database for data persistence
4. Set up analytics tracking

## Future Enhancements

- Real backend integration with Supabase
- Email verification
- Custom domain support
- Themes and customization
- Social media integrations
- Advanced analytics
- Team collaboration
- API for developers

## Design Inspiration

- Linktree
- Linear
- Vercel dashboard
- Stripe creator tools

## License

MIT
