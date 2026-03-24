import { siteConfig } from "@/lib/site";

const routeCards = [
  {
    title: "Main Exhibition Route",
    description:
      "The first foundation pass sets up a main narrative path so later museum pages can guide visitors through one clear story rather than a pile of disconnected screens.",
  },
  {
    title: "Companion Surfaces",
    description:
      "This project will support supporting routes for evidence, people, institutions, and interpretive guides without collapsing everything into the homepage.",
  },
  {
    title: "Spec-Driven Delivery",
    description:
      "The repository is structured so design and implementation decisions stay attached to specs, sprints, and QA artifacts instead of disappearing into chat history.",
  },
];

export function HomeShell() {
  return (
    <main className="page-shell">
      <section className="hero-card">
        <div className="hero-grid">
          <div>
            <p className="eyebrow">Museum117 Foundation</p>
            <h1 className="hero-title">Story-led museum site foundation</h1>
            <p className="hero-copy">{siteConfig.description}</p>
          </div>

          <div className="route-grid" aria-label="Foundation directions">
            {routeCards.map((card) => (
              <article key={card.title} className="route-card">
                <p className="eyebrow">In View</p>
                <h2>{card.title}</h2>
                <p>{card.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
