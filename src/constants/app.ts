// App Constants

export const SITE_TITLE = 'Jordan Bhar - Developer Portfolio';
export const SITE_DESCRIPTION = 'Premium developer portfolio showcasing mobile development, cloud engineering, and AI infrastructure expertise.';

export const Logo_Path = '../../../public/assets/icons/logo.png';

export const Images = {
  aboutMe: '../../../public/assets/images/AboutMe.jpg',
};

// Social Links
export const SOCIAL_LINKS = {
  github: 'https://github.com',
  linkedin: 'https://linkedin.com',
  twitter: 'https://twitter.com',
  email: 'jordan.bhar@icloud.com',
};

// Navigation Items
export const NAV_ITEMS = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

// Color Constants (matching Tailwind config)
export const COLORS = {
  // Dark backgrounds
  'dark-primary': '#0B0D10',
  'dark-secondary': '#111827',
  'card-dark': '#161B22',
  'card-darker': '#1A1D24',

  // Accents
  'accent-teal': '#14B8A6',
  'accent-cyan': '#06B6D4',
  'accent-light-cyan': '#22D3EE',

  // Text
  'text-primary': '#F8FAFC',
  'text-secondary': '#CBD5E1',
  'text-muted': '#94A3B8',
  'text-faint': '#475569',

  // Borders
  'border-light': '#334155',
  'border-dark': '#1E293B',
};

// Animation Durations (milliseconds)
export const ANIMATIONS = {
  fast: 200,
  normal: 400,
  slow: 600,
  verySlow: 1000,
};

// Three.js Configuration
export const THREE_CONFIG = {
  // Cloud Nodes
  nodeCount: 12,
  nodeSize: { min: 0.4, max: 1.0 },

  // Particles
  particleCount: 500,
  particleSize: 0.15,

  // Connection Lines
  connectionDistance: 10,

  // Lighting
  ambientIntensity: 0.5,
  directionalIntensity: 0.8,
  pointLightIntensity: 0.4,
};

// Breakpoints (pixels)
export const BREAKPOINTS = {
  mobile: 320,
  tablet: 768,
  desktop: 1024,
  ultraWide: 1920,
};

// Responsive classes for media queries
export const RESPONSIVE = {
  mobile: '(max-width: 767px)',
  tablet: '(min-width: 768px) and (max-width: 1023px)',
  desktop: '(min-width: 1024px)',
  ultraWide: '(min-width: 1920px)',
};
