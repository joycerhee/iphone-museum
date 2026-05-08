'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

const impacts = [
  { year: 2008, value: 1100, suffix: 'B+', label: 'in app economy commerce', title: 'The Birth of the App Economy', body: 'The App Store created a new economic sector. Uber, Instagram, Snapchat — none would exist without it.' },
  { year: 2010, value: 1, suffix: 'M', label: 'Instagram users in 2 months', title: 'Photography Became Social', body: 'Instagram launched on iPhone. Visual culture was reborn in your pocket.' },
  { year: 2012, value: 87, suffix: '%', label: 'drop in compact camera sales', title: 'Death of the Point-and-Shoot', body: 'iPhone cameras became good enough. The compact camera market collapsed.' },
  { year: 2014, value: 12, suffix: 'B', label: 'Apple Pay transactions / year', title: 'Mobile Payments Go Mainstream', body: 'Tap to pay. The wallet vanished into the phone.' },
  { year: 2016, value: 3, suffix: 'rd', label: 'largest Apple product line', title: 'Wireless Audio Revolution', body: 'AirPods made wireless earbuds the global default in two years.' },
  { year: 2017, value: 30000, suffix: '', label: 'invisible dots scanned by Face ID', title: 'AI Enters Your Pocket', body: 'The Neural Engine made intelligence invisible infrastructure.' },
  { year: 2022, value: 100, suffix: '%', label: 'satellite SOS coverage on Earth', title: 'Emergency SOS from Space', body: 'For the first time, a consumer device could call for help from anywhere.' },
  { year: 2024, value: 2, suffix: 'B+', label: 'on-device AI pockets', title: 'The Personal AI Era', body: 'Apple Intelligence brought generative AI on-device. All private.' },
];

function Counter({ to, suffix }: { to: number; suffix: string }) {
  const [n, setN] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        const start = performance.now();
        const dur = 1400;
        const tick = (t: number) => {
          const p = Math.min((t - start) / dur, 1);
          setN(Math.floor(to * (1 - Math.pow(1 - p, 3))));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
        obs.disconnect();
      }
    }, { threshold: 0.5 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [to]);
  return <span ref={ref}>{n.toLocaleString()}{suffix}</span>;
}

export default function ImpactPage() {
  return (
    <main className="font-sans antialiased bg-black text-white pt-16 overflow-x-hidden">
      <style jsx global>{`
        .text-chrome {
          background: linear-gradient(180deg, #fff 0%, #b8b8b8 40%, #4a4a4a 70%, #d8d8d8 100%);
          -webkit-background-clip: text; background-clip: text; color: transparent;
        }
      `}</style>

      <section className="min-h-[60vh] flex items-center justify-center">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-xs tracking-[0.4em] text-zinc-500 mb-6 uppercase">Chapter Four</p>
          <h1 className="text-6xl sm:text-8xl font-extrabold text-chrome leading-[0.9]">Cultural Impact</h1>
          <p className="mt-8 text-xl text-zinc-400">How one device reshaped society — measured.</p>
        </div>
      </section>

      {impacts.map((it, i) => (
        <section key={it.title} className="relative border-t border-zinc-900">
          <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 py-32">
            <div className="md:sticky md:top-32 self-start">
              <p className="text-[10rem] sm:text-[14rem] font-extrabold text-chrome leading-none">{it.year}</p>
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-6xl font-extrabold text-white"><Counter to={it.value} suffix={it.suffix} /></p>
              <p className="mt-2 text-sm tracking-widest uppercase text-zinc-500">{it.label}</p>
              <h2 className="mt-10 text-4xl font-extrabold">{it.title}</h2>
              <p className="mt-4 text-lg text-zinc-400 leading-relaxed">{it.body}</p>
            </div>
          </div>
          {i < impacts.length - 1 && <div className="h-px w-1/2 mx-auto bg-gradient-to-r from-transparent via-zinc-700 to-transparent" />}
        </section>
      ))}

      <section className="py-24 text-center border-t border-zinc-900">
        <p className="text-zinc-500 text-xs tracking-[0.3em] uppercase mb-4">Final Chapter</p>
        <Link href="/present" className="text-3xl font-extrabold text-chrome hover:opacity-80 transition">Present Day →</Link>
      </section>
    </main>
  );
}
