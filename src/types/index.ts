// Video Types
export interface Video {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  videoUrl: string;
  duration: number;
  views: number;
  likes: number;
  createdAt: Date;
  creatorId: string;
  creatorName: string;
  creatorAvatar: string;
  category: string;
  isFeatured?: boolean;
  isExclusive?: boolean;
  membershipNFT?: string;
}

// Creator Types
export interface Creator {
  id: string;
  name: string;
  avatar: string;
  bio: string;
  followers: number;
  isVerified: boolean;
  walletAddress: string;
  totalVideos: number;
  totalViews: number;
  createdAt: Date;
}

// Membership Types
export interface Membership {
  id: string;
  creatorId: string;
  name: string;
  price: number;
  currency: string;
  duration: number;
  perks: string[];
  nftContractAddress: string;
  description: string;
}

// Comment Types
export interface Comment {
  id: string;
  videoId: string;
  authorId: string;
  authorName: string;
  authorAvatar: string;
  text: string;
  likes: number;
  createdAt: Date;
  replies?: Comment[];
}

// Wallet Types
export interface WalletUser {
  address: string;
  name?: string;
  avatar?: string;
  balance: string;
}

// Feed Types
export interface FeedItem {
  type: 'video' | 'upload' | 'follow';
  data: Video | Creator | any;
  timestamp: Date;
}
