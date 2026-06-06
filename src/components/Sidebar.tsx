'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Home,
  TrendingUp,
  Bookmark,
  Heart,
  Settings,
  HelpCircle,
  ChevronDown,
} from 'lucide-react';
import { mockCreators } from '@/lib/mockData';

interface NavItem {
  label: string;
  icon: React.ReactNode;
  href: string;
}

const navItems: NavItem[] = [
  { label: 'Home', icon: <Home size={20} />, href: '/' },
  { label: 'Trending', icon: <TrendingUp size={20} />, href: '/trending' },
  { label: 'Saved', icon: <Bookmark size={20} />, href: '/saved' },
  { label: 'Liked', icon: <Heart size={20} />, href: '/liked' },
];

export default function Sidebar() {
  const pathname = usePathname();
  const [isSubscriptionsExpanded, setIsSubscriptionsExpanded] = useState(true);

  return (
    <aside className="hidden lg:block w-64 bg-dark-secondary border-r border-dark-tertiary fixed left-0 top-16 h-[calc(100vh-64px)] overflow-y-auto">
      <div className="p-4">
        {/* Main Navigation */}
        <nav className="space-y-2 mb-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center space-x-4 px-4 py-3 rounded-lg transition-colors ${
                pathname === item.href
                  ? 'bg-primary text-white'
                  : 'text-gray-300 hover:bg-dark-tertiary'
              }`}
            >
              {item.icon}
              <span className="font-medium">{item.label}</span>
            </Link>
          ))}
        </nav>

        <hr className="border-dark-tertiary my-4" />

        {/* Subscriptions */}
        <div className="mb-8">
          <button
            onClick={() => setIsSubscriptionsExpanded(!isSubscriptionsExpanded)}
            className="flex items-center justify-between w-full px-4 py-2 hover:bg-dark-tertiary rounded-lg transition-colors"
          >
            <span className="font-semibold text-gray-300">My Subscriptions</span>
            <ChevronDown
              size={18}
              className={`transition-transform ${isSubscriptionsExpanded ? 'rotate-180' : ''}`}
            />
          </button>

          {isSubscriptionsExpanded && (
            <div className="mt-2 space-y-1">
              {mockCreators.map((creator) => (
                <Link
                  key={creator.id}
                  href={`/creator/${creator.id}`}
                  className="flex items-center space-x-3 px-4 py-2 rounded-lg text-gray-300 hover:bg-dark-tertiary transition-colors"
                >
                  <img
                    src={creator.avatar}
                    alt={creator.name}
                    className="w-8 h-8 rounded-full"
                  />
                  <span className="text-sm">{creator.name}</span>
                  {creator.isVerified && (
                    <span className="text-primary text-xs">✓</span>
                  )}
                </Link>
              ))}
            </div>
          )}
        </div>

        <hr className="border-dark-tertiary my-4" />

        {/* Settings & Help */}
        <nav className="space-y-2">
          <Link
            href="/settings"
            className="flex items-center space-x-4 px-4 py-3 rounded-lg text-gray-300 hover:bg-dark-tertiary transition-colors"
          >
            <Settings size={20} />
            <span className="font-medium">Settings</span>
          </Link>
          <Link
            href="/help"
            className="flex items-center space-x-4 px-4 py-3 rounded-lg text-gray-300 hover:bg-dark-tertiary transition-colors"
          >
            <HelpCircle size={20} />
            <span className="font-medium">Help</span>
          </Link>
        </nav>
      </div>
    </aside>
  );
}
