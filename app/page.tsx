'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

function AppleLogo({ className = '', style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg viewBox="0 0 24 24" className={className} style={style} fill="url(#chromeGrad)">
      <defs>
        <linearGradient id="chromeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
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

export default function Home() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      setMouse({
        x: (e.clientX / window.innerWidth - 0.5) * 2,
        y: (e.clientY / window.innerHeight - 0.5) * 2,
      });
    };
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener('mousemove', onMove);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <main className="font-sans antialiased bg-black text-white selection:bg-white selection:text-black overflow-x-hidden">
      <style jsx global>{`
        @keyframes spin-slow { to { transform: rotate(360deg); } }
        @keyframes orb {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(40px, -30px) scale(1.05); }
          66% { transform: translate(-30px, 20px) scale(0.95); }
        }
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes fade-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes float-apple {
          0%, 100% { transform: translateY(0) rotate(-3deg); }
          50% { transform: translateY(-30px) rotate(3deg); }
        }
        .text-chrome {
          background: linear-gradient(180deg, #ffffff 0%, #b8b8b8 40%, #4a4a4a 70%, #d8d8d8 100%);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
        .shimmer-text {
          background: linear-gradient(90deg, #555 0%, #fff 50%, #555 100%);
          background-size: 200% 100%;
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          animation: shimmer 6s linear infinite;
        }
        .bg-chrome-radial {
          background: conic-gradient(from 0deg, #555, #f5f5f5, #2a2a2a, #d8d8d8, #4a4a4a, #f5f5f5, #555);
        }
        .animate-spin-slow { animation: spin-slow 24s linear infinite; }
        .animate-orb { animation: orb 18s ease-in-out infinite; }
        .animate-marquee { animation: marquee 40s linear infinite; }
        .animate-fade-up { animation: fade-up 0.9s cubic-bezier(0.2, 0.7, 0.2, 1) both; }
        .animate-float-apple { animation: float-apple 6s ease-in-out infinite; }
      `}</style>

      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-black/90 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <AppleLogo className="w-5 h-5" />
            <span className="text-sm tracking-[0.2em] uppercase text-chrome font-semibold">iPhone Museum</span>
          </div>
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

      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        {/* Glow halo behind apple */}
        <div
          className="absolute top-1/2 left-1/2 w-[800px] h-[800px] rounded-full bg-chrome-radial blur-3xl opacity-25 animate-orb pointer-events-none"
          style={{ transform: `translate(calc(-50% + ${mouse.x * 30}px), calc(-50% + ${mouse.y * 30}px))` }}
        />

        {/* Floating chrome Apple logo */}
        <div
          className="absolute top-1/2 left-1/2 pointer-events-none"
          style={{
            transform: `translate(calc(-50% + ${mouse.x * 60}px), calc(-50% + ${mouse.y * 60}px))`,
          }}
        >
          <div className="animate-float-apple">
            <AppleLogo
              className="w-[320px] h-[320px] drop-shadow-[0_0_60px_rgba(255,255,255,0.25)]"
              style={{ filter: 'drop-shadow(0 20px 40px rgba(180,180,180,0.4))' }}
            />
          </div>
        </div>

        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.06] pointer-events-none"
          style={{
            backgroundImage: 'linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)',
            backgroundSize: '80px 80px',
            transform: `translateY(${scrollY * 0.3}px)`,
          }}
        />

        <div
          className="relative max-w-5xl mx-auto px-6 text-center z-10"
          style={{
            transform: `translateY(${scrollY * -0.2}px)`,
            opacity: Math.max(0, 1 - scrollY / 600),
          }}
        >
          <p className="text-xs tracking-[0.5em] uppercase text-zinc-500 mb-8 animate-fade-up">
            <span className="inline-block w-8 h-px bg-zinc-700 align-middle mr-4" />
            The iPhone Evolution Museum
            <span className="inline-block w-8 h-px bg-zinc-700 align-middle ml-4" />
          </p>

          <h1 className="font-extrabold leading-[0.92] tracking-tight mb-8 animate-fade-up" style={{ animationDelay: '0.1s' }}>
            <span className="block text-6xl sm:text-7xl md:text-[8rem] text-chrome">The Device</span>
            <span className="block text-6xl sm:text-7xl md:text-[8rem] italic font-light shimmer-text">That Changed</span>
            <span className="block text-6xl sm:text-7xl md:text-[8rem] text-chrome">Everything.</span>
          </h1>

          <p className="text-lg sm:text-xl text-zinc-400 max-w-xl mx-auto mb-3 font-light animate-fade-up" style={{ animationDelay: '0.3s' }}>
            A curated journey through 19 years of innovation, culture, and revolution.
          </p>
          <p className="text-xs tracking-[0.3em] uppercase text-zinc-600 mb-12 animate-fade-up" style={{ animationDelay: '0.4s' }}>
            2.3B users · 57 countries · One device
          </p>

          <button
            onClick={() => document.getElementById('steve-section')?.scrollIntoView({ behavior: 'smooth' })}
            className="group relative inline-flex items-center gap-3 px-10 py-4 rounded-full hover:scale-[1.04] active:scale-[0.98] transition-all duration-500 animate-fade-up"
            style={{
              background: 'linear-gradient(145deg, #f5f5f5 0%, #b8b8b8 50%, #e8e8e8 100%)',
              boxShadow: '0 20px 60px -15px rgba(200,200,200,0.4), inset 0 1px 0 rgba(255,255,255,0.4), inset 0 -1px 0 rgba(0,0,0,0.2)',
              animationDelay: '0.5s',
            }}
          >
            <span className="relative text-black font-semibold tracking-wide">Begin the Exhibit</span>
            <span className="relative text-black transition-transform duration-300 group-hover:translate-x-1">→</span>
          </button>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-10">
          <span className="text-[10px] tracking-[0.4em] uppercase text-zinc-500">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-zinc-500 to-transparent animate-pulse" />
        </div>
      </section>

      {/* MARQUEE */}
      <div className="relative py-8 border-y border-white/10 overflow-hidden bg-black">
        <div className="flex gap-16 animate-marquee whitespace-nowrap">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex gap-16 items-center">
              {['2007 · Original', '2010 · Retina', '2013 · Touch ID', '2017 · Face ID', '2020 · 5G', '2022 · Dynamic Island', '2024 · Apple Intelligence'].map((s) => (
                <span key={s} className="text-2xl md:text-4xl font-extrabold text-chrome tracking-tight">
                  {s} <span className="text-zinc-700 ml-16">◆</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* STEVE JOBS */}
      <section id="steve-section" className="relative py-32 overflow-hidden">
        <div className="absolute top-1/2 right-0 w-[500px] h-[500px] rounded-full bg-chrome-radial blur-3xl opacity-10 animate-orb" />
        <div className="relative max-w-5xl mx-auto px-6 grid md:grid-cols-[auto_1fr] items-center gap-16">
          <div className="relative group">
            <div className="absolute -inset-3 rounded-full bg-chrome-radial blur-md opacity-70 group-hover:opacity-100 transition-all duration-700 animate-spin-slow" />
            <img src={`${basePath}/people-images/steve-jobs.jpg`} alt="Steve Jobs" className="relative w-56 h-56 md:w-72 md:h-72 rounded-full object-cover ring-1 ring-white/20" />
          </div>
          <div>
            <p className="text-xs tracking-[0.4em] uppercase text-zinc-500 mb-4">The Visionary</p>
            <h2 className="text-5xl sm:text-6xl font-extrabold mb-6 text-chrome">Steve Jobs</h2>
            <p className="text-lg text-zinc-400 leading-relaxed mb-4 font-light">
              On January 9, 2007, he walked onto a stage and held up a glass rectangle.
              &quot;Every once in a while, a revolutionary product comes along that changes everything,&quot; he said. He was right.
            </p>
            <p className="text-lg text-zinc-400 leading-relaxed mb-8 font-light">
              Jobs didn&apos;t just create a phone. He created the blueprint for how billions communicate, create, and experience the world.
            </p>
            <Link href="/people" className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-zinc-700 text-sm tracking-wide hover:border-white hover:bg-white hover:text-black transition-all duration-300">
              Explore the Visionaries <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* FOUR ERAS */}
      <section className="relative py-32 bg-zinc-950 border-y border-white/10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <p className="text-xs tracking-[0.4em] uppercase text-zinc-500 mb-4">Explore the Eras</p>
            <h2 className="text-5xl sm:text-6xl font-extrabold tracking-tight text-chrome">
              Four Chapters That<br/>Shaped the World
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { href: '/timeline#2007', img: '/eras-images/original.jpg', title: 'The Original', year: '2007', desc: 'The touchscreen that eliminated the keyboard and created an entire economy.', stat: '6M units sold in year one' },
              { href: '/timeline#2010', img: '/eras-images/retina.jpg', title: 'The Retina Era', year: '2010', desc: 'Instagram launches. Visual culture shifts forever. Photography becomes social.', stat: 'Instagram hit 1M users in 2 months' },
              { href: '/timeline#2017', img: '/eras-images/intellegience.avif', title: 'The Intelligence Era', year: '2017', desc: 'Face ID. Neural Engine. AI enters your pocket for the first time.', stat: 'First neural processor in a phone' },
              { href: '/timeline#2022', img: '/eras-images/dynamicisland.webp', title: 'The Pro Era', year: '2022', desc: '48MP. Dynamic Island. iPhone becomes a creative studio in your pocket.', stat: '#1 camera on Flickr' },
            ].map((era) => (
              <Link key={era.title} href={era.href} className="group relative block">
                <article className="relative bg-black rounded-2xl overflow-hidden border border-white/10 group-hover:border-white/40 h-full transition-all duration-500 group-hover:translate-y-[-4px]">
                  <div className="relative h-56 overflow-hidden">
                    <img src={`${basePath}${era.img}`} alt={era.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md text-white text-xs tracking-widest">{era.year}</div>
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-bold mb-3 text-chrome">{era.title}</h3>
                    <p className="text-zinc-400 leading-relaxed mb-6">{era.desc}</p>
                    <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                      <p className="text-xs tracking-wider uppercase text-zinc-500">{era.stat}</p>
                      <span className="text-zinc-500 group-hover:text-white group-hover:translate-x-1 transition-all">→</span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* QUOTE */}
      <section className="relative py-40 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-chrome-radial blur-3xl opacity-15 animate-orb" />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <AppleLogo className="w-12 h-12 mx-auto mb-8 opacity-50 animate-spin-slow" />
          <blockquote className="text-5xl sm:text-7xl font-light italic leading-tight mb-8 text-chrome">
            &quot;One more thing.&quot;
          </blockquote>
          <cite className="block text-xs tracking-[0.4em] uppercase text-zinc-500 not-italic">
            Steve Jobs · January 9, 2007
          </cite>
          <p className="mt-10 text-zinc-400 max-w-xl mx-auto font-light">
            These words preceded every major innovation. Each time, what followed changed how we think, work, and connect.
          </p>
        </div>
      </section>

      {/* EXPLORE */}
      <section className="relative py-32 bg-zinc-950 border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.4em] uppercase text-zinc-500 mb-4">Continue</p>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-chrome">Explore the Exhibit</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { href: '/timeline', title: 'Timeline', desc: 'Every iPhone from 2007 to 2025.', num: '01' },
              { href: '/innovations', title: 'Breakthroughs', desc: 'Innovations that changed industries.', num: '02' },
              { href: '/impact', title: 'Cultural Impact', desc: 'How one device reshaped society.', num: '03' },
              { href: '/present', title: 'Present Day', desc: 'Where we are — and what comes next.', num: '04' },
            ].map((item) => (
              <Link key={item.title} href={item.href} className="group relative block p-8 bg-black rounded-2xl border border-white/10 hover:border-white/40 transition-all duration-500 overflow-hidden">
                <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full bg-chrome-radial opacity-0 group-hover:opacity-30 blur-2xl transition-opacity duration-700" />
                <p className="relative text-xs tracking-widest text-zinc-500 mb-6">{item.num}</p>
                <h3 className="relative text-xl font-bold mb-2 group-hover:text-chrome group-hover:translate-x-1 transition-all">{item.title}</h3>
                <p className="relative text-sm text-zinc-500 leading-relaxed">{item.desc}</p>
                <div className="relative mt-6 text-zinc-500 group-hover:text-white transition-colors">→</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 py-10 bg-black">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs tracking-widest uppercase text-zinc-500">
          <div className="flex items-center gap-2">
            <AppleLogo className="w-4 h-4" />
            <p className="text-chrome font-semibold">iPhone Evolution Museum</p>
          </div>
          <p>© 2026 — A Digital Exhibit</p>
        </div>
      </footer>
    </main>
  );
}
