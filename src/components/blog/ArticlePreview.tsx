import React from 'react';
import { Clock, User } from 'lucide-react';
import type { BlogPost } from '../../types/blog';
import { colors } from '../../styles/colors';

interface ArticlePreviewProps {
  post: BlogPost;
}

const ArticlePreview: React.FC<ArticlePreviewProps> = ({ post }) => {
  return (
    <article className="group">
      <div className="relative aspect-[16/9] rounded-sm overflow-hidden mb-4">
        <img
          src={post.coverImage}
          alt={post.title}
          className="w-full h-full object-cover transition-transform duration-500
                   group-hover:scale-105"
        />
      </div>
      
      <div className="flex gap-2 mb-3">
        {post.categories.slice(0, 2).map(category => (
          <span
            key={category}
            className="text-xs px-2 py-1 rounded-sm bg-white/5"
            style={{ color: colors.silver.solid.secondary }}
          >
            {category}
          </span>
        ))}
      </div>
      
      <h3 
        className="text-xl font-light tracking-wide mb-3 
                   transition-colors duration-300 group-hover:text-blue-400"
        style={{ color: colors.silver.solid.primary }}
      >
        {post.title}
      </h3>
      
      <p 
        className="text-sm mb-4 line-clamp-3"
        style={{ color: colors.silver.solid.secondary }}
      >
        {post.excerpt}
      </p>
      
      <div 
        className="flex items-center gap-4 text-sm"
        style={{ color: colors.silver.solid.secondary }}
      >
        <div className="flex items-center gap-2">
          <User size={14} />
          <span>{post.author.name}</span>
        </div>
        <div className="flex items-center gap-2">
          <Clock size={14} />
          <span>{post.readingTime} min read</span>
        </div>
      </div>
    </article>
  );
};

export default ArticlePreview;