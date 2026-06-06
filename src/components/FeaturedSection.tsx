'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Video } from '@/types';
import { formatViewCount, formatDate, formatDuration } from '@/lib/utils';
import { Play, ChevronLeft, ChevronRight } from 'lucide-react';

interface FeaturedSectionProps {
  videos: Video[];
}

export default function FeaturedSection({ videos }: FeaturedSectionProps) {
  const featuredVideos = videos.filter((v) => v.isFeatured);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredVideos.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [featuredVideos.length]);

  if (featuredVideos.length === 0) return null;

  const video = featuredVideos[currentSlide];

  return (
    <div className="relative w-full h-96 rounded-2xl overflow-hidden group mb-12">
      {/* Background Image */}
      <img
        src={video.thumbnail}
        alt={video.title}
        className="w-full h-full object-cover"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />

      {/* Content */}
      <div className="absolute inset-0 flex items-center">
        <div className="w-full lg:w-1/2 px-8 sm:px-12">
          {/* Featured Badge */}
          <div className="inline-block bg-primary/80 text-white text-xs px-3 py-1 rounded-full mb-4 font-semibold">
            FEATURED
          </div>

          {/* Title */}
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 line-clamp-2">
            {video.title}
          </h2>

          {/* Description */}
          <p className="text-gray-300 mb-6 line-clamp-2 max-w-lg">
            {video.description}
          </p>

          {/* Creator Info */}
          <div className="flex items-center space-x-4 mb-6">
            <img
              src={video.creatorAvatar}
              alt={video.creatorName}
              className="w-10 h-10 rounded-full"
            />
            <div>
              <Link href={`/creator/${video.creatorId}`}>
                <p className="text-white font-semibold hover:text-primary transition-colors">
                  {video.creatorName}
                </p>
              </Link>
              <p className="text-gray-400 text-sm">
                {formatViewCount(video.views)} views
              </p>
            </div>
          </div>

          {/* CTA Button */}
          <Link href={`/video/${video.id}`}>
            <button className="flex items-center space-x-2 bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-full font-semibold transition-all">
              <Play size={20} fill="currentColor" />
              <span>Watch Now</span>
            </button>
          </Link>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={() =>
          setCurrentSlide(
            (prev) => (prev - 1 + featuredVideos.length) % featuredVideos.length
          )
        }
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all"
      >
        <ChevronLeft size={24} />
      </button>

      <button
        onClick={() =>
          setCurrentSlide((prev) => (prev + 1) % featuredVideos.length)
        }
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all"
      >
        <ChevronRight size={24} />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {featuredVideos.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentSlide ? 'bg-white w-8' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
