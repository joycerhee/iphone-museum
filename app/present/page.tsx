'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function PresentPage() {
  const [m, setM] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const onMove = (e: MouseEvent) => setM({
      x: (e.clientX / window.innerWidth - 0.5) * 2,
      y: (e.clientY / window.innerHeight - 0.5) * 2,
    });
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  return (
    <main className="font-sans antialiased bg-black text-white pt-16 overflow-x-hidden">
      <style jsx global>{`
        @keyframes orb { 0%,100% { transform: translate(0,0) scale(1);} 50% { transform: translate(20px,-30px) scale(1.05);} }
        .text-chrome {
          background: linear-gradient(180deg, #fff 0%, #b8b8b8 40%, #4a4a4a 70%, #d8d8d8 100%);
          -webkit-background-clip: text; background-clip: text; color: transparent;
        }
      `}</style>

      {/* Hero with parallax orb */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute w-[60vw] h-[60vw] rounded-full blur-3xl opacity-40"
          style={{
            background: 'conic-gradient(from 0deg, #555, #f5f5f5, #2a2a2a, #d8d8d8, #555)',
            transform: `translate(${m.x * 40}px, ${m.y * 40}px)`,
            animation: 'orb 14s ease-in-out infinite',
            transition: 'transform 0.4s ease-out',
          }}
        />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <p className="text-xs tracking-[0.4em] text-zinc-400 mb-6 uppercase">Epilogue</p>
          <h1 className="text-7xl sm:text-9xl font-extrabold text-chrome leading-[0.85]">Present Day</h1>
          <p className="mt-8 text-xl text-zinc-300">Where we are now — and where the iPhone is taking us next.</p>
        </div>
      </section>

      {/* 2026 */}
      <section className="max-w-4xl mx-auto px-6 py-32">
        <p className="text-xs tracking-[0.4em] text-zinc-500 uppercase mb-6">Twenty Twenty-Six</p>
        <h2 className="text-5xl sm:text-7xl font-extrabold text-chrome leading-[0.95]">The iPhone at 19.</h2>
        <p className="mt-10 text-xl text-zinc-300 leading-relaxed">
          Nineteen years after Steve Jobs held up a glass rectangle, the iPhone has become the most successful
          consumer product in human history. Over 2.3 billion active iPhones now exist. The device in your
          pocket has more computing power than the machines that landed humans on the moon.
        </p>
        <p className="mt-6 text-xl text-zinc-400 leading-relaxed">
          The iPhone 17 and iPhone 17 Air are the thinnest, most intelligent, most capable iPhones ever made.
          Apple Intelligence runs on-device — keeping your data private while making your phone genuinely personal.
        </p>
      </section>

      {/* Stats */}
      <section className="border-y border-zinc-900 py-24">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-3 gap-12 text-center">
          {[
            { n: '2.3B', l: 'Active iPhones' },
            { n: '19', l: 'Years of innovation' },
            { n: '$1T+', l: 'Developer earnings' },
          ].map((s) => (
            <div key={s.l} className="group">
              <p className="text-7xl font-extrabold text-chrome group-hover:scale-110 transition-transform duration-500">{s.n}</p>
              <p className="mt-3 text-sm tracking-widest uppercase text-zinc-500">{s.l}</p>
            </div>
          ))}
        </div>
      </section>

      {/* What's next */}
      <section className="max-w-4xl mx-auto px-6 py-32">
        <h2 className="text-5xl sm:text-7xl font-extrabold text-chrome leading-[0.95]">What Comes Next.</h2>
        <p className="mt-10 text-xl text-zinc-300 leading-relaxed">
          On-device AI will grow more capable. Augmented reality will merge the digital and physical.
          The iPhone will continue evolving — not just as a communication device, but as an extension of human capability.
        </p>
        <p className="mt-6 text-xl text-zinc-400 leading-relaxed italic">
          The exhibit you have just walked through is not just a history. It is a preview.
        </p>
      </section>

      {/* End */}
      <section className="border-t border-zinc-900 py-32 text-center">
        <p className="text-xs tracking-[0.4em] uppercase text-zinc-500 mb-6">End of Exhibit</p>
        <h2 className="text-4xl sm:text-5xl font-extrabold text-chrome">Thank you for visiting.</h2>
        <p className="mt-4 text-zinc-400">The iPhone Evolution Museum — A Digital Exhibit</p>
        <Link
          href="/"
          className="mt-12 inline-block px-10 py-4 rounded-full text-black font-semibold hover:scale-105 transition-transform duration-500"
          style={{
            background: 'linear-gradient(145deg, #f5f5f5, #b8b8b8, #e8e8e8)',
            boxShadow: '0 20px 60px -15px rgba(200,200,200,0.4), inset 0 1px 0 rgba(255,255,255,0.4)',
          }}
        >
          Return to Lobby
        </Link>
      </section>
    </main>
  );
}
