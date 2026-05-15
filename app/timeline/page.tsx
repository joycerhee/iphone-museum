'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { HomeMuseum } from '@/components/HomeMuseum';

export default function TimelinePage() {
  return (
    <div className="font-sans antialiased">
      <section className="min-h-[50vh] flex items-center justify-center bg-black">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-xs tracking-[0.4em] text-zinc-500 mb-6 uppercase">Chapter One</p>
          <h1 className="text-6xl sm:text-8xl font-extrabold text-chrome leading-[0.9]">Timeline</h1>
          <p className="mt-8 text-xl text-zinc-400">
            Every iPhone from 2007 to 2025 — one scroll through 19 years of innovation.
          </p>
        </div>
      </section>

      <HomeMuseum />

      <section className="py-24 text-center border-t border-zinc-900 bg-black">
        <p className="text-zinc-500 text-xs tracking-[0.3em] uppercase mb-4">Next Chapter</p>
        <Link href="/people" className="text-3xl font-extrabold text-chrome hover:opacity-80 transition">
          Visionaries →
        </Link>
      </section>
    </div>
  );
}


