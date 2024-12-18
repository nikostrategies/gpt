// Navigation items used across components
export const navItems = ['About', 'Services', 'Projects', 'Blog', 'Contact'];

// Helper function to get path from nav item
export const getPathFromNavItem = (item: string): string => {
  return `/${item.toLowerCase()}`;
};

export const blogCategories = [
  'Industry News',
  'Best Practices',
  'Sustainability',
  'Case Studies',
  'Expert Insights',
  'Local Updates'
] as const;

export type BlogCategory = typeof blogCategories[number];