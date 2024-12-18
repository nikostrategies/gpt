import type { BlogCategory } from '../utils/constants';

export interface Author {
  id: string;
  name: string;
  avatar: string;
  role: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  coverImage: string;
  publishedAt: string;
  readingTime: number;
  author: Author;
  categories: BlogCategory[];
  featured?: boolean;
}