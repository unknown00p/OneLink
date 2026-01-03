# Architecture Overview

## Component Architecture

### Aceternity UI Components (`components/aceternity/`)

Custom-built animated components that form the foundation of the UI:

#### Core Components
- **AnimatedButton**: Button with hover shimmer effect and scale animations
- **AnimatedCard**: Card component with hover elevation and fade-in animations
- **Spotlight**: Background spotlight effect for hero sections
- **ShimmerEffect**: Loading skeleton with animated shimmer
- **EmptyState**: Reusable empty state component with icon, title, and action
- **GradientBg**: Animated gradient background wrapper

### Dashboard Components (`components/dashboard/`)

Feature-specific components for the dashboard:

#### Sidebar
- Responsive navigation (drawer on mobile, fixed on desktop)
- Active tab highlighting
- Smooth transitions

#### BioEditor
- Profile image upload
- Display name and bio editing
- Username management
- Preview link to public page

#### LinkManager
- Drag-and-drop reordering with Framer Motion Reorder
- Add/edit/delete links
- Toggle visibility
- Short code generation
- Click tracking
- Copy to clipboard

#### Analytics
- Total clicks display
- Per-link performance charts
- Daily clicks visualization
- Top performers ranking
- Quick stats cards

#### Settings
- Email and password management
- Notification preferences
- Account deletion (danger zone)

## Page Structure

### Landing Page (`app/page.tsx`)
- Hero section with animated spotlight
- Feature cards
- Call-to-action buttons
- Responsive navigation

### Authentication Pages
- **Login** (`app/login/page.tsx`): Email/password login with validation
- **Signup** (`app/signup/page.tsx`): User registration with username preview

### Dashboard (`app/dashboard/page.tsx`)
- Sidebar navigation
- Tab-based content switching
- State management for user and links
- Mobile-responsive layout

### Public Bio Page (`app/[username]/page.tsx`)
- Dynamic route for user profiles
- Avatar display
- Bio information
- List of active links with animations
- Mobile-optimized

## Data Flow

### Mock Data (`data/mockData.ts`)
Currently using mock data for:
- User information
- Links collection
- Analytics data

### State Management
- Local component state with `useState`
- Props drilling for shared state
- No global state library (kept simple)

### Future: Real Data Integration
- Replace mock imports with API calls
- Use React Query or SWR for data fetching
- Implement Supabase for backend
- Add real-time updates

## Styling Architecture

### Tailwind CSS
- Utility-first approach
- Custom color system with gradients
- Dark mode support
- Responsive breakpoints

### Custom Utilities (`lib/utils.ts`)
- `cn()`: Merge Tailwind classes with clsx

### Design Tokens
- **Colors**: Blue-purple gradient theme
- **Spacing**: 8px system
- **Typography**: Inter font family
- **Shadows**: Layered elevation system
- **Animations**: Framer Motion for smooth transitions

## Animation Strategy

### Framer Motion
- Page transitions with fade/slide
- Hover effects on interactive elements
- Drag-and-drop reordering
- Stagger animations for lists
- Spring physics for natural movement

### Performance
- Use `whileHover` and `whileTap` for micro-interactions
- Optimize with `layoutId` for shared element transitions
- Lazy load heavy animations
- Respect reduced motion preferences

## TypeScript Types (`types/index.ts`)

### Core Interfaces
- **User**: Profile information
- **Link**: Link data structure
- **Analytics**: Performance metrics
- **DashboardTab**: Tab union type

### Type Safety
- Strict mode enabled
- Props interfaces for all components
- Type guards for data validation

## Responsive Design

### Breakpoints
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

### Mobile-First
- Start with mobile layout
- Progressive enhancement for larger screens
- Touch-friendly interactions
- Sidebar becomes drawer on mobile

## Accessibility

### Best Practices
- Semantic HTML elements
- ARIA labels for icons
- Keyboard navigation support
- Focus states on interactive elements
- Color contrast compliance
- Screen reader friendly

## Performance Optimization

### Code Splitting
- Next.js automatic code splitting
- Dynamic imports for heavy components
- Route-based splitting

### Image Optimization
- Next.js Image component (future)
- Lazy loading
- Responsive images

### Bundle Size
- Current bundle: ~80KB shared JS
- Per-page bundles: 2-9KB
- Tree-shaking enabled
- Production optimizations

## Future Enhancements

### Backend Integration
- Supabase authentication
- Real-time database
- File storage for avatars
- Edge functions for analytics

### Advanced Features
- Custom domains
- Theme customization
- Social media integrations
- A/B testing for links
- QR code generation
- Team collaboration
- API access

### Performance
- Server-side rendering for bio pages
- Edge caching
- Image CDN
- Progressive Web App
