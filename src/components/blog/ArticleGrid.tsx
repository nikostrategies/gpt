import React from 'react';
import ArticlePreview from './ArticlePreview';
import type { BlogPost } from '../../types/blog';
import FadeInUp from '../animations/FadeInUp';

interface ArticleGridProps {
  posts: BlogPost[];
}

const ArticleGrid: React.FC<ArticleGridProps> = ({ posts }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {posts.map((post, index) => (
        <FadeInUp key={post.id} delay={index * 100}>
          <ArticlePreview post={post} />
        </FadeInUp>
      ))}
    </div>
  );
};

export default ArticleGrid;