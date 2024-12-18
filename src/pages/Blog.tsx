import React, { useState } from 'react';
import BlogHero from '../components/blog/BlogHero';
import FeaturedArticle from '../components/blog/FeaturedArticle';
import ArticleGrid from '../components/blog/ArticleGrid';
import BlogHeader from '../components/blog/BlogHeader';
import { blogPosts } from '../data/blogData';
import { blogCategories, type BlogCategory } from '../utils/constants';
import { colors } from '../styles/colors';

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState<BlogCategory | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<'date' | 'popular'>('date');

  const featuredPost = blogPosts.find(post => post.featured);
  const filteredPosts = blogPosts
    .filter(post => !post.featured)
    .filter(post => {
      if (selectedCategory === 'all') return true;
      return post.categories.includes(selectedCategory as BlogCategory);
    })
    .filter(post => 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) => {
      if (sortBy === 'date') {
        return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime();
      }
      return 0;
    });

  return (
    <div className="min-h-screen pt-20">
      <BlogHero />

      {/* Blog Content */}
      <div 
        className="relative py-16"
        style={{ backgroundColor: colors.black.secondary }}
      >
        <div className="container mx-auto px-4">
          <BlogHeader
            categories={blogCategories}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            sortBy={sortBy}
            onSortChange={setSortBy}
          />

          {featuredPost && selectedCategory === 'all' && !searchQuery && (
            <FeaturedArticle post={featuredPost} />
          )}

          <ArticleGrid posts={filteredPosts} />
        </div>
      </div>
    </div>
  );
};

export default Blog;