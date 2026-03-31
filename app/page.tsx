export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black font-sans antialiased">
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* NAV */}
        <nav className="flex items-center justify-between py-4">
          <div className="text-lg font-medium">iPhone Evolution Museum</div>
        </nav>

        {/* HERO */}
        <header className="pt-8 pb-12">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
            The Device That Changed Everything.
          </h1>
          <p className="mt-4 text-zinc-600 text-lg max-w-2xl">
            A curated journey through 19 years of iPhone innovation.
          </p>
          <p className="mt-3 text-zinc-500 text-sm">Trusted by 2.3 billion users across 57 countries.</p>
          <div className="mt-6">
            <a
              href="/timeline"
              className="inline-block bg-black text-white border border-black px-5 py-3 rounded-md text-sm font-semibold"
            >
              Explore the Timeline
            </a>
          </div>
        </header>

        <hr className="border-t border-zinc-200 my-8" />

        {/* ERA CARDS */}
        <section id="timeline" aria-label="iPhone eras" className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* 2007 */}
          <article className="space-y-4">
            <div className="bg-zinc-100 rounded-2xl h-48" aria-hidden="true" />
            <div>
              <h3 className="text-xl font-semibold">2007 — The Original</h3>
              <p className="text-zinc-600">The touchscreen that eliminated the keyboard.</p>
              <p className="mt-2 text-zinc-500 text-sm italic">Adoption: early adopters sparked a mobile revolution — millions of first-generation users.</p>
            </div>
          </article>

          {/* 2010 */}
          <article className="space-y-4">
            <div className="bg-zinc-100 rounded-2xl h-48" aria-hidden="true" />
            <div>
              <h3 className="text-xl font-semibold">2010 — The Retina Era</h3>
              <p className="text-zinc-600">Instagram launches. Visual culture shifts forever.</p>
              <p className="mt-2 text-zinc-500 text-sm italic">Cultural moment: photography becomes social — hundreds of millions engaging visually.</p>
            </div>
          </article>

          {/* 2017 */}
          <article className="space-y-4">
            <div className="bg-zinc-100 rounded-2xl h-48" aria-hidden="true" />
            <div>
              <h3 className="text-xl font-semibold">2017 — The Intelligence Era</h3>
              <p className="text-zinc-600">Face ID. Neural Engine. AI enters your pocket.</p>
              <p className="mt-2 text-zinc-500 text-sm italic">Adoption: machine intelligence on device accelerated everyday AI experiences for hundreds of millions.</p>
            </div>
          </article>

          {/* 2022 */}
          <article className="space-y-4">
            <div className="bg-zinc-100 rounded-2xl h-48" aria-hidden="true" />
            <div>
              <h3 className="text-xl font-semibold">2022 — The Pro Era</h3>
              <p className="text-zinc-600">48MP. Dynamic Island. iPhone becomes a creative studio.</p>
              <p className="mt-2 text-zinc-500 text-sm italic">Social proof: creators and professionals adopted pro-grade tools on pocket devices.</p>
            </div>
          </article>
        </section>

        {/* QUOTE */}
        <section className="mt-12 bg-zinc-50 border border-zinc-100 rounded-xl py-10 px-6 text-center">
          <blockquote className="text-2xl italic text-zinc-800">“One more thing.”</blockquote>
          <cite className="block mt-3 text-zinc-500">— Steve Jobs, January 9, 2007</cite>
        </section>

        {/* ABOUT */}
        <section className="mt-10 max-w-3xl">
          <h4 className="sr-only">About the Exhibit</h4>
          <p className="text-zinc-700">This digital exhibit reveals how design, engineering, and culture converged to remake everyday life. Visitors will trace technological breakthroughs, social adoption, and the creative practices that followed.</p>
        </section>

        {/* FOOTER */}
        <footer className="mt-12 border-t border-zinc-200 pt-6 text-sm text-zinc-600">
          iPhone Evolution Museum © 2026 | A Digital Exhibit
        </footer>
      </div>
    </main>
  );
}
