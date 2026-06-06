'use client';

import React from 'react';
import { categories } from '@/lib/mockData';

interface CategoryFilterProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export default function CategoryFilter({
  activeCategory,
  onCategoryChange,
}: CategoryFilterProps) {
  return (
    <div className="flex space-x-2 overflow-x-auto pb-4 scrollbar-hide">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={`px-4 py-2 rounded-full font-semibold whitespace-nowrap transition-all flex-shrink-0 ${
            activeCategory === category
              ? 'bg-white text-dark'
              : 'bg-dark-tertiary text-white hover:bg-dark-tertiary/80'
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
