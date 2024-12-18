import type { BlogPost } from '../types/blog';

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'The Future of Sustainable Construction: Trends to Watch',
    slug: 'future-sustainable-construction-trends',
    excerpt: 'Explore emerging trends in sustainable construction, from innovative materials to energy-efficient design practices that are shaping the future of our industry.',
    content: '...',
    coverImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    publishedAt: '2024-03-10T09:00:00Z',
    readingTime: 5,
    author: {
      id: 'john-doe',
      name: 'John Doe',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      role: 'Senior Project Manager'
    },
    categories: ['Sustainability', 'Industry News'],
    featured: true
  },
  {
    id: '2',
    title: 'Essential Best Practices for Modern Home Construction',
    slug: 'essential-best-practices-modern-home-construction',
    excerpt: 'Learn about the critical best practices that ensure quality, efficiency, and longevity in modern home construction projects.',
    content: '...',
    coverImage: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80',
    publishedAt: '2024-03-08T09:00:00Z',
    readingTime: 4,
    author: {
      id: 'jane-smith',
      name: 'Jane Smith',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      role: 'Construction Specialist'
    },
    categories: ['Best Practices', 'Expert Insights']
  },
  {
    id: '3',
    title: 'Vancouver Building Code Updates: What You Need to Know',
    slug: 'vancouver-building-code-updates',
    excerpt: 'Stay informed about the latest updates to Vancouver\'s building codes and how they affect your construction projects.',
    content: '...',
    coverImage: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    publishedAt: '2024-03-05T09:00:00Z',
    readingTime: 6,
    author: {
      id: 'mike-johnson',
      name: 'Mike Johnson',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      role: 'Regulatory Compliance Manager'
    },
    categories: ['Local Updates', 'Best Practices']
  },
  {
    id: '4',
    title: 'Emerging Trends in Commercial Space Design 2024',
    slug: 'commercial-space-trends-2024',
    excerpt: 'Discover how hybrid workspaces, smart building technology, and sustainable design are revolutionizing commercial construction in British Columbia.',
    content: '...',
    coverImage: 'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    publishedAt: '2024-03-12T10:30:00Z',
    readingTime: 7,
    author: {
      id: 'sarah-chen',
      name: 'Sarah Chen',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      role: 'Commercial Design Director'
    },
    categories: ['Industry News', 'Case Studies']
  },
  {
    id: '5',
    title: 'BC Building Code 2024: Technology Integration & Energy Efficiency',
    slug: 'bc-building-code-2024-tech-updates',
    excerpt: 'An in-depth look at the latest BC Building Code updates focusing on smart building systems, energy efficiency requirements, and technological innovations.',
    content: '...',
    coverImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    publishedAt: '2024-03-15T08:45:00Z',
    readingTime: 8,
    author: {
      id: 'david-park',
      name: 'David Park',
      avatar: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      role: 'Building Technology Specialist'
    },
    categories: ['Local Updates', 'Industry News', 'Best Practices']
  }
];