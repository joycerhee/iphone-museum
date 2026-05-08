'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

const innovations = [
  { name: 'Multi-Touch', year: 2007, model: 'iPhone', desc: 'Replaced keyboards with glass you could pinch and swipe.', stat: 'Every smartphone today uses multi-touch.', image: 'multitouch.webp' },
  { name: 'App Store', year: 2008, model: 'iPhone 3G', desc: 'A marketplace where anyone could reach millions overnight.', stat: '$1T+ in developer earnings.', image: 'appstore.png' },
  { name: 'Retina Display', year: 2010, model: 'iPhone 4', desc: 'Pixel density beyond what the eye could resolve.', stat: 'Raised the bar for every screen made since.', image: 'retina.png' },
  { name: 'Siri', year: 2011, model: 'iPhone 4s', desc: 'The first AI assistant on a consumer phone.', stat: 'Predated Alexa by 3 years.', image: 'siri.webp' },
  { name: 'Touch ID', year: 2013, model: 'iPhone 5s', desc: 'Your fingerprint became your password.', stat: 'Unlocked the biometric era.', image: 'touchid.jpg' },
  { name: 'Face ID', year: 2017, model: 'iPhone X', desc: 'Dedicated AI hardware on a consumer chip.', stat: 'First neural processor in a mass-market phone.', image: 'faceid.jpg' },
  { name: '5G', year: 2020, model: 'iPhone 12', desc: 'Next-gen wireless arrived in your pocket.', stat: '1B 5G subscriptions within two years.', image: '5gconnectivity.jpg' },
  { name: 'Dynamic Island', year: 2022, model: 'iPhone 14 Pro', desc: 'Hardware became software. A flaw became a feature.', stat: 'Adopted lineup-wide in one generation.', image: 'dynamicisland.webp' },
  { name: 'Apple Intelligence', year: 2024, model: 'iPhone 16', desc: 'On-device generative AI, private by design.', stat: '2B+ devices in the personal AI era.', image: 'appleintelligence.jpg' },
];

export default function InnovationsPage() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const onScroll = () => {
      const center = el.scrollLeft + el.clientWidth / 2;
      const cards = el.querySelectorAll<HTMLElement>('[data-card]');
      let best = 0, dist = Infinity;
      cards.forEach((c, i) => {
        const d = Math.abs(c.offsetLeft + c.offsetWidth / 2 - center);
        if (d < dist) { dist = d; best = i; }
      });
      setActive(best);
    };
    el.addEventListener('scroll', onScroll, { passive: true });
    return () => el.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <main className="font-sans antialiased bg-black text-white pt-16 overflow-x-hidden">
      <style jsx global>{`
        .text-chrome {
          background: linear-gradient(180deg, #fff 0%, #b8b8b8 40%, #4a4a4a 70%, #d8d8d8 100%);
          -webkit-background-clip: text; background-clip: text; color: transparent;
        }
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { scrollbar-width: none; }
      `}</style>

      <section className="min-h-[50vh] flex items-center justify-center">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-xs tracking-[0.4em] text-zinc-500 mb-6 uppercase">Chapter Three</p>
          <h1 className="text-6xl sm:text-8xl font-extrabold text-chrome leading-[0.9]">Breakthroughs</h1>
          <p className="mt-8 text-xl text-zinc-400">Scroll sideways through the inventions that reshaped technology.</p>
        </div>
      </section>

      <div ref={scrollRef} className="no-scrollbar overflow-x-auto snap-x snap-mandatory flex gap-8 px-[20vw] py-20">
        {innovations.map((it, i) => (
          <article
            key={it.name}
            data-card
            className={`snap-center shrink-0 w-[60vw] md:w-[40vw] h-[60vh] rounded-3xl overflow-hidden relative border transition-all duration-700 ${
              active === i ? 'border-zinc-500 scale-100 opacity-100' : 'border-zinc-900 scale-90 opacity-50'
            }`}
          >
            <img src={`/breakthrough-images/${it.image}`} alt={it.name} className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-10">
              <p className="text-xs font-mono text-zinc-400 tracking-widest">{it.year} · {it.model}</p>
              <h2 className="mt-2 text-4xl font-extrabold text-chrome">{it.name}</h2>
              <p className="mt-3 text-zinc-300 leading-relaxed">{it.desc}</p>
              <p className="mt-4 text-sm italic text-zinc-500">{it.stat}</p>
            </div>
          </article>
        ))}
      </div>

      {/* Progress dots */}
      <div className="flex justify-center gap-2 pb-12">
        {innovations.map((_, i) => (
          <span key={i} className={`h-1 rounded-full transition-all duration-500 ${active === i ? 'w-12 bg-white' : 'w-2 bg-zinc-700'}`} />
        ))}
      </div>

      <section className="py-24 text-center border-t border-zinc-900">
        <p className="text-zinc-500 text-xs tracking-[0.3em] uppercase mb-4">Next Chapter</p>
        <Link href="/impact" className="text-3xl font-extrabold text-chrome hover:opacity-80 transition">Cultural Impact →</Link>
      </section>
    </main>
  );
}
