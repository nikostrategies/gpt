import React from 'react';
import { Search } from 'lucide-react';
import { blogCategories } from '../../utils/constants';
import { colors } from '../../styles/colors';

interface BlogHeaderProps {
  categories: typeof blogCategories;
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  sortBy: 'date' | 'popular';
  onSortChange: (sort: 'date' | 'popular') => void;
}

const BlogHeader: React.FC<BlogHeaderProps> = ({
  categories,
  selectedCategory,
  onCategoryChange,
  searchQuery,
  onSearchChange,
  sortBy,
  onSortChange
}) => {
  return (
    <div className="mb-12 space-y-6">
      {/* Categories */}
      <div className="flex flex-wrap gap-4 justify-center">
        <button
          onClick={() => onCategoryChange('all')}
          className={`px-4 py-2 rounded-sm transition-all duration-300
                     ${selectedCategory === 'all' 
                       ? 'bg-white/10' 
                       : 'hover:bg-white/5'}`}
          style={{ color: colors.silver.solid.primary }}
        >
          All
        </button>
        {categories.map(category => (
          <button
            key={category}
            onClick={() => onCategoryChange(category)}
            className={`px-4 py-2 rounded-sm transition-all duration-300
                       ${selectedCategory === category 
                         ? 'bg-white/10' 
                         : 'hover:bg-white/5'}`}
            style={{ color: colors.silver.solid.primary }}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Search and Sort */}
      <div className="flex flex-col sm:flex-row gap-4 justify-between items-center">
        <div className="relative w-full sm:w-64">
          <Search 
            className="absolute left-3 top-1/2 transform -translate-y-1/2"
            size={18}
            style={{ color: colors.silver.solid.secondary }}
          />
          <input
            type="text"
            placeholder="Search articles..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full pl-10 pr-4 py-2 rounded-sm bg-white/5 
                     border border-white/10 focus:outline-none focus:border-white/20"
            style={{ color: colors.silver.solid.primary }}
          />
        </div>

        <select
          value={sortBy}
          onChange={(e) => onSortChange(e.target.value as 'date' | 'popular')}
          className="px-4 py-2 rounded-sm bg-white/5 border border-white/10 
                   focus:outline-none focus:border-white/20"
          style={{ color: colors.silver.solid.primary }}
        >
          <option value="date">Latest</option>
          <option value="popular">Popular</option>
        </select>
      </div>
    </div>
  );
};

export default BlogHeader;