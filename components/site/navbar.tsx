'use client';

import Link from 'next/link';

function AppleLogo({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="url(#navChromeGrad)">
      <defs>
        <linearGradient id="navChromeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f5f5f5" />
          <stop offset="35%" stopColor="#9a9a9a" />
          <stop offset="50%" stopColor="#e8e8e8" />
          <stop offset="65%" stopColor="#4a4a4a" />
          <stop offset="100%" stopColor="#d8d8d8" />
        </linearGradient>
      </defs>
      <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
    </svg>
  );
}

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-black/90 border-b border-white/10 font-sans antialiased">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <AppleLogo className="w-5 h-5" />
          <span className="text-sm tracking-[0.2em] uppercase text-chrome font-semibold">iPhone Museum</span>
        </Link>
        <div className="hidden md:flex items-center gap-8 text-xs tracking-[0.2em] uppercase text-zinc-400">
          {[
            { label: 'Home', href: '/' },
            { label: 'Timeline', href: '/timeline' },
            { label: 'Visionaries', href: '/people' },
            { label: 'Breakthroughs', href: '/innovations' },
            { label: 'Impact', href: '/impact' },
            { label: 'Present', href: '/present' },
          ].map((l) => (
            <Link key={l.label} href={l.href} className="hover:text-white transition-colors">{l.label}</Link>
          ))}
        </div>
      </div>
    </nav>
  );
}