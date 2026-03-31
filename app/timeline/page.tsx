export default function TimelinePage() {
  const entries: { year: string; model: string; innovation: string; impact: string }[] = [
    {
      year: "2007",
      model: "iPhone (1st gen)",
      innovation: "First multi-touch smartphone, eliminated physical keyboard",
      impact: "Revolutionary: created the entire smartphone app economy",
    },
    {
      year: "2008",
      model: "iPhone 3G",
      innovation: "3G connectivity, App Store launches",
      impact: "App Store opens — 500 apps on day one, now nearly 2 million",
    },
    {
      year: "2009",
      model: "iPhone 3GS",
      innovation: "Video recording, Voice Control",
      impact: "First iPhone to sell 1 million units in a single weekend",
    },
    {
      year: "2010",
      model: "iPhone 4",
      innovation: "Retina display, FaceTime, first Apple custom chip (A4)",
      impact: "Instagram launches same year — photography culture shifts forever",
    },
    {
      year: "2011",
      model: "iPhone 4s",
      innovation: "Siri AI assistant, 8MP camera, 1080p video",
      impact: "First AI assistant on a phone — Siri changes how humans interact with devices",
    },
    {
      year: "2012",
      model: "iPhone 5",
      innovation: "4G LTE, Lightning connector, 4-inch screen",
      impact: "Fastest iPhone ever at launch — set new benchmark for mobile speed",
    },
    {
      year: "2013",
      model: "iPhone 5s",
      innovation: "First 64-bit smartphone chip (A7), Touch ID fingerprint",
      impact: "64-bit mobile computing — years ahead of competition",
    },
    {
      year: "2014",
      model: "iPhone 6 / 6 Plus",
      innovation: "Larger screens (4.7\" & 5.5\"), Apple Pay",
      impact: "Apple Pay launches — mobile payments become mainstream",
    },
    {
      year: "2015",
      model: "iPhone 6s",
      innovation: "3D Touch, 12MP camera, 4K video",
      impact: "4K video in your pocket — democratized professional video",
    },
    {
      year: "2016",
      model: "iPhone 7",
      innovation: "Water resistance (IP67), removed headphone jack, AirPods born",
      impact: "AirPods launch — wireless audio becomes the new standard globally",
    },
    {
      year: "2017",
      model: "iPhone X",
      innovation: "OLED Super Retina display, Face ID, Neural Engine, no home button",
      impact: "Neural Engine chip — dedicated AI hardware in consumer hands for first time",
    },
    {
      year: "2018",
      model: "iPhone XS / XR",
      innovation: "Smart HDR, stronger Neural Engine, Liquid Retina display",
      impact: "Computational photography era begins — AI enhances every photo automatically",
    },
    {
      year: "2019",
      model: "iPhone 11",
      innovation: "Triple camera system, Ultra Wide lens, Night Mode",
      impact: "Night Mode — smartphone cameras surpass compact cameras for everyday use",
    },
    {
      year: "2020",
      model: "iPhone 12",
      innovation: "5G connectivity, MagSafe, OLED across lineup, flat-edge design",
      impact: "5G arrives — iPhone becomes infrastructure for next-generation connectivity",
    },
    {
      year: "2021",
      model: "iPhone 13 Pro",
      innovation: "ProMotion 120Hz, Cinematic Mode video, 3x optical zoom",
      impact: "Cinematic Mode — Hollywood-quality video in consumer hands",
    },
    {
      year: "2022",
      model: "iPhone 14 Pro",
      innovation: "48MP main camera, Dynamic Island, Always-On display, Emergency SOS via satellite",
      impact: "Satellite SOS — iPhone becomes a life-saving device beyond cell coverage",
    },
    {
      year: "2023",
      model: "iPhone 15",
      innovation: "USB-C replaces Lightning (EU compliance), Dynamic Island for all, titanium Pro",
      impact: "USB-C universality — Apple joins global standard after 11 years",
    },
    {
      year: "2024",
      model: "iPhone 16",
      innovation: "Apple Intelligence AI, Camera Control button, Wi-Fi 7, A18 chip",
      impact: "On-device AI era — privacy-first artificial intelligence reaches 2+ billion pockets",
    },
    {
      year: "2025",
      model: "iPhone 17 / Air",
      innovation: "Ultra-thin iPhone Air design, next-gen cameras, enhanced Apple Intelligence",
      impact: "Thinnest iPhone ever — form factor reimagined for the post-AI era",
    },
  ];

  return (
    <main className="min-h-screen bg-white text-black font-sans antialiased">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <header className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-extrabold">The iPhone Timeline</h1>
          <p className="mt-3 text-zinc-600">19 years of innovation, one device at a time.</p>
        </header>

        <section className="relative">
          {/* vertical line positioned to align with dots */}
          <div className="absolute left-20 top-0 bottom-0 w-px bg-zinc-200" aria-hidden="true" />

          <div className="space-y-10">
            {entries.map((e, idx) => (
              <article key={`${e.year}-${idx}`} className="relative flex items-start gap-6">
                {/* Year column */}
                <div className="w-20 text-right pr-4">
                  <p className="font-semibold">{e.year}</p>
                </div>

                {/* dot aligned to the vertical line */}
                <div className="absolute left-20 -translate-x-1/2 top-3 w-3 h-3 rounded-full bg-black" aria-hidden="true" />

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-xl font-semibold">{e.model}</h3>
                  <p className="mt-1 text-zinc-600">{e.innovation}</p>
                  <p className="mt-2 text-sm text-zinc-500 italic">{e.impact}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <footer className="mt-12 border-t border-zinc-200 pt-6 text-sm text-zinc-600">
          iPhone Evolution Museum © 2026 | A Digital Exhibit
        </footer>
      </div>
    </main>
  );
}
