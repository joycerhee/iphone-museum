'use client';

import Link from 'next/link';
import { useState } from 'react';

const people = [
  { name: 'Steve Jobs', role: 'Co-founder & Visionary', years: '1976 – 2011', stat: 'Reached 2.3 billion users worldwide',
    contributions: ['Unveiled the original iPhone in 2007.', 'Insisted on multi-touch when others demanded keyboards.', 'Created the App Store ecosystem.'], img: 'steve-jobs.jpg' },
  { name: 'Tim Cook', role: 'CEO & Operations Architect', years: '2011 – Present', stat: 'Grew iPhone revenue from $47B to $200B+',
    contributions: ['Scaled iPhone production globally.', 'Led Apple to become the first $3T company.', 'Championed privacy as a fundamental right.'], img: 'TimCook.jpg' },
  { name: 'Jony Ive', role: 'Chief Design Officer', years: '1992 – 2019', stat: 'Designed every iPhone through iPhone X',
    contributions: ['Created the unibody aluminum design language.', 'Eliminated the home button on iPhone X.', 'Made technology feel human.'], img: 'jonyive.webp' },
  { name: 'Scott Forstall', role: 'Head of iOS Software', years: '1997 – 2012', stat: 'Built the OS running on 1B+ devices',
    contributions: ['Led iOS from concept to global standard.', 'Oversaw the App Store SDK.', 'Pioneered multi-touch gestures.'], img: 'scottforstall.jpg' },
];

export default function PeoplePage() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  const [flipped, setFlipped] = useState<number | null>(null);

  return (
    <main className="font-sans antialiased bg-black text-white pt-16 overflow-x-hidden">
      <style jsx global>{`
        .text-chrome {
          background: linear-gradient(180deg, #fff 0%, #b8b8b8 40%, #4a4a4a 70%, #d8d8d8 100%);
          -webkit-background-clip: text; background-clip: text; color: transparent;
        }
        .perspective { perspective: 1500px; }
        .preserve-3d { transform-style: preserve-3d; }
        .backface-hidden { backface-visibility: hidden; -webkit-backface-visibility: hidden; }
      `}</style>

      <section className="min-h-[60vh] flex items-center justify-center">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-xs tracking-[0.4em] text-zinc-500 mb-6 uppercase">Chapter Two</p>
          <h1 className="text-6xl sm:text-8xl font-extrabold text-chrome leading-[0.9]">Visionaries</h1>
          <p className="mt-8 text-xl text-zinc-400">The people who imagined the impossible — then built it. <span className="text-zinc-600">Tap a card.</span></p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-24 grid grid-cols-1 md:grid-cols-2 gap-8">
        {people.map((p, i) => (
          <div key={p.name} className="perspective h-[460px]" onClick={() => setFlipped(flipped === i ? null : i)}>
            <div
              className="relative w-full h-full preserve-3d transition-transform duration-700 cursor-pointer"
              style={{ transform: flipped === i ? 'rotateY(180deg)' : 'rotateY(0)' }}
            >
              {/* Front */}
              <div className="absolute inset-0 backface-hidden rounded-3xl border border-zinc-800 bg-gradient-to-br from-zinc-900 to-black p-10 flex flex-col justify-between hover:border-zinc-600 transition-colors">
                <div>
                  <img src={`${basePath}/people-images/${p.img}`} alt={p.name} className="w-24 h-24 rounded-full object-cover ring-1 ring-zinc-700" />
                  <h2 className="mt-6 text-4xl font-extrabold text-chrome">{p.name}</h2>
                  <p className="mt-2 text-zinc-400">{p.role}</p>
                  <p className="mt-1 text-sm font-mono text-zinc-600">{p.years}</p>
                </div>
                <p className="text-xs tracking-[0.3em] uppercase text-zinc-500">Tap to reveal →</p>
              </div>
              {/* Back */}
              <div className="absolute inset-0 backface-hidden rounded-3xl border border-zinc-700 bg-gradient-to-br from-white to-zinc-300 text-black p-10 flex flex-col justify-between" style={{ transform: 'rotateY(180deg)' }}>
                <div>
                  <p className="text-xs tracking-[0.3em] uppercase text-zinc-600 mb-4">Contributions</p>
                  <ul className="space-y-3">
                    {p.contributions.map((c, j) => (
                      <li key={j} className="text-zinc-800 flex gap-3"><span className="text-zinc-500">0{j + 1}</span>{c}</li>
                    ))}
                  </ul>
                </div>
                <p className="text-sm italic text-zinc-700">{p.stat}</p>
              </div>
            </div>
          </div>
        ))}
      </section>

      <section className="py-24 text-center border-t border-zinc-900">
        <p className="text-zinc-500 text-xs tracking-[0.3em] uppercase mb-4">Next Chapter</p>
        <Link href="/innovations" className="text-3xl font-extrabold text-chrome hover:opacity-80 transition">Breakthroughs →</Link>
      </section>
    </main>
  );
}
