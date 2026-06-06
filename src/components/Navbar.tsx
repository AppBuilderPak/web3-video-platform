'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Search,
  Menu,
  X,
  Upload,
  Bell,
  Settings,
  LogOut,
} from 'lucide-react';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <nav className="sticky top-0 z-50 bg-dark-secondary border-b border-dark-tertiary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">▶</span>
            </div>
            <span className="hidden sm:inline font-bold text-xl">Web3Video</span>
          </Link>

          {/* Search Bar - Hidden on Mobile */}
          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search videos..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2 rounded-full bg-dark-tertiary text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary transition-all"
              />
              <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white">
                <Search size={18} />
              </button>
            </div>
          </div>

          {/* Right Navigation */}
          <div className="flex items-center space-x-4">
            {/* Upload Button - Hidden on Mobile */}
            <button className="hidden sm:flex items-center space-x-2 px-4 py-2 bg-primary hover:bg-primary/90 rounded-full font-semibold transition-colors">
              <Upload size={18} />
              <span>Upload</span>
            </button>

            {/* Notifications */}
            <button className="relative p-2 hover:bg-dark-tertiary rounded-full transition-colors">
              <Bell size={20} />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>

            {/* Profile Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsProfileDropdownOpen(!isProfileDropdownOpen)}
                className="w-10 h-10 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center hover:opacity-80 transition-opacity"
              >
                <span className="text-white font-semibold">P</span>
              </button>

              {/* Dropdown Menu */}
              {isProfileDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-dark-secondary border border-dark-tertiary rounded-lg shadow-lg py-2">
                  <Link
                    href="/profile"
                    className="block px-4 py-2 hover:bg-dark-tertiary transition-colors"
                  >
                    My Profile
                  </Link>
                  <Link
                    href="/studio"
                    className="block px-4 py-2 hover:bg-dark-tertiary transition-colors"
                  >
                    Creator Studio
                  </Link>
                  <Link
                    href="/settings"
                    className="flex items-center space-x-2 px-4 py-2 hover:bg-dark-tertiary transition-colors"
                  >
                    <Settings size={16} />
                    <span>Settings</span>
                  </Link>
                  <hr className="border-dark-tertiary my-2" />
                  <button className="w-full flex items-center space-x-2 px-4 py-2 hover:bg-dark-tertiary transition-colors text-red-400">
                    <LogOut size={16} />
                    <span>Disconnect Wallet</span>
                  </button>
                </div>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 hover:bg-dark-tertiary rounded-full transition-colors"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden pb-4 border-t border-dark-tertiary">
            <div className="mt-4 px-2">
              <div className="relative mb-4">
                <input
                  type="text"
                  placeholder="Search videos..."
                  className="w-full px-4 py-2 rounded-full bg-dark-tertiary text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              </div>
            </div>
            <Link
              href="/upload"
              className="flex items-center space-x-2 px-4 py-2 hover:bg-dark-tertiary transition-colors"
            >
              <Upload size={18} />
              <span>Upload Video</span>
            </Link>
            <Link
              href="/studio"
              className="block px-4 py-2 hover:bg-dark-tertiary transition-colors"
            >
              Creator Studio
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
