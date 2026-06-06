import type { Metadata } from 'next';
import { Navbar, Sidebar, Footer } from '@/components';
import '@/styles/globals.css';

export const metadata: Metadata = {
  title: 'Web3Video - Decentralized Video Platform',
  description:
    'A decentralized video-sharing platform built on Web3. Creator ownership, crypto monetization, and censorship resistance.',
  keywords: [
    'Web3',
    'Video',
    'Blockchain',
    'Crypto',
    'IPFS',
    'Decentralized',
    'Creator Economy',
  ],
  authors: [
    {
      name: "Pak's Digital Services",
      url: 'https://github.com/AppBuilderPak',
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Navbar />
        <div className="flex">
          <Sidebar />
          <main className="flex-1 lg:ml-64 min-h-[calc(100vh-64px)]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
              {children}
            </div>
          </main>
        </div>
        <Footer />
      </body>
    </html>
  );
}
