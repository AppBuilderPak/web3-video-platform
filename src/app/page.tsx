'use client';

import React, { useState } from 'react';
import { VideoCard, CategoryFilter, FeaturedSection } from '@/components';
import { mockVideos } from '@/lib/mockData';

export default function Home() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredVideos =
    activeCategory === 'All'
      ? mockVideos
      : mockVideos.filter((video) => video.category === activeCategory);

  return (
    <div>
      {/* Featured Section */}
      <FeaturedSection videos={mockVideos} />

      {/* Category Filter */}
      <div className="mb-8">
        <CategoryFilter
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />
      </div>

      {/* Video Grid */}
      <div>
        <h2 className="text-2xl font-bold text-white mb-6">
          {activeCategory === 'All' ? 'Recommended for You' : activeCategory}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredVideos.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </div>
      </div>

      {/* Empty State */}
      {filteredVideos.length === 0 && (
        <div className="text-center py-16">
          <p className="text-gray-400 text-lg">
            No videos found in this category yet.
          </p>
        </div>
      )}
    </div>
  );
}
