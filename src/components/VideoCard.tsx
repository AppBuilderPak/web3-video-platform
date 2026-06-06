'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Video } from '@/types';
import { formatViewCount, formatDate, formatDuration } from '@/lib/utils';
import { Lock, Play } from 'lucide-react';

interface VideoCardProps {
  video: Video;
  layout?: 'grid' | 'horizontal';
}

export default function VideoCard({ video, layout = 'grid' }: VideoCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  if (layout === 'horizontal') {
    return (
      <Link href={`/video/${video.id}`}>
        <div className="flex space-x-4 hover:opacity-80 transition-opacity cursor-pointer">
          {/* Thumbnail */}
          <div className="relative w-40 h-24 rounded-lg overflow-hidden flex-shrink-0 group">
            <img
              src={video.thumbnail}
              alt={video.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform"
            />
            <div className="absolute bottom-1 right-1 bg-black/80 text-white text-xs px-2 py-1 rounded">
              {formatDuration(video.duration)}
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 py-2">
            <h3 className="font-semibold text-white line-clamp-2 hover:text-primary transition-colors">
              {video.title}
            </h3>
            <Link href={`/creator/${video.creatorId}`}>
              <p className="text-sm text-gray-400 hover:text-white transition-colors">
                {video.creatorName}
              </p>
            </Link>
            <p className="text-xs text-gray-500 mt-1">
              {formatViewCount(video.views)} views • {formatDate(video.createdAt)}
            </p>
          </div>
        </div>
      </Link>
    );
  }

  // Grid layout (default)
  return (
    <Link href={`/video/${video.id}`}>
      <div
        className="group cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Thumbnail */}
        <div className="relative aspect-video rounded-xl overflow-hidden bg-dark-tertiary mb-3">
          <img
            src={video.thumbnail}
            alt={video.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
          />

          {/* Overlay Elements */}
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <div className="w-12 h-12 bg-white/80 rounded-full flex items-center justify-center group-hover:bg-white transition-colors">
              <Play size={24} className="text-dark ml-1" fill="currentColor" />
            </div>
          </div>

          {/* Duration Badge */}
          <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded">
            {formatDuration(video.duration)}
          </div>

          {/* Exclusive Badge */}
          {video.isExclusive && (
            <div className="absolute top-2 left-2 flex items-center space-x-1 bg-primary/90 text-white text-xs px-2 py-1 rounded">
              <Lock size={12} />
              <span>Exclusive</span>
            </div>
          )}

          {/* Featured Badge */}
          {video.isFeatured && (
            <div className="absolute top-2 right-2 bg-secondary/90 text-white text-xs px-2 py-1 rounded">
              Featured
            </div>
          )}
        </div>

        {/* Video Info */}
        <div className="flex space-x-3">
          {/* Creator Avatar */}
          <img
            src={video.creatorAvatar}
            alt={video.creatorName}
            className="w-9 h-9 rounded-full flex-shrink-0"
          />

          {/* Title & Metadata */}
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-white line-clamp-2 group-hover:text-primary transition-colors">
              {video.title}
            </h3>
            <Link href={`/creator/${video.creatorId}`}>
              <p className="text-sm text-gray-400 hover:text-white transition-colors">
                {video.creatorName}
              </p>
            </Link>
            <p className="text-xs text-gray-500 mt-1">
              {formatViewCount(video.views)} views • {formatDate(video.createdAt)}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}
