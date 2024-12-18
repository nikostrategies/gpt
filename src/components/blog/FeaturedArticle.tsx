import React from 'react';
import { Clock, User } from 'lucide-react';
import type { BlogPost } from '../../types/blog';
import { colors } from '../../styles/colors';

interface FeaturedArticleProps {
  post: BlogPost;
}

const FeaturedArticle: React.FC<FeaturedArticleProps> = ({ post }) => {
  return (
    <div className="mb-16">
      <div className="relative aspect-[21/9] rounded-sm overflow-hidden">
        <img
          src={post.coverImage}
          alt={post.title}
          className="w-full h-full object-cover"
        />
        <div 
          className="absolute inset-0"
          style={{
            background: `linear-gradient(0deg,
              ${colors.black.primary} 0%,
              transparent 100%)`
          }}
        />
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="flex gap-4 mb-4">
            {post.categories.map(category => (
              <span
                key={category}
                className="text-sm px-3 py-1 rounded-sm bg-white/10"
                style={{ color: colors.silver.solid.primary }}
              >
                {category}
              </span>
            ))}
          </div>
          
          <h2 
            className="text-3xl md:text-4xl font-light tracking-wider mb-4"
            style={{ color: colors.silver.solid.primary }}
          >
            {post.title}
          </h2>
          
          <p 
            className="text-lg mb-6 max-w-3xl"
            style={{ color: colors.silver.solid.secondary }}
          >
            {post.excerpt}
          </p>
          
          <div 
            className="flex items-center gap-6"
            style={{ color: colors.silver.solid.secondary }}
          >
            <div className="flex items-center gap-2">
              <User size={16} />
              <span>{post.author.name}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={16} />
              <span>{post.readingTime} min read</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedArticle;