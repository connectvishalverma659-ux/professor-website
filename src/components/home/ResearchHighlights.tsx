import ResearchCard from "@/components/cards/ResearchCard";
import { researchAreas } from "@/data/research";

export default function ResearchHighlights() {

  const featuredResearch = researchAreas.slice(0, 3);

  return (
    <section className="py-16">

      <div className="flex justify-between items-center mb-8">

        <h2 className="text-3xl font-bold">
          Research Highlights
        </h2>

        <a
          href="/research"
          className="text-blue-600 hover:underline"
        >
          View All →
        </a>

      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

        {featuredResearch.map((area) => (
          <ResearchCard
            key={area.title}
            research={area}
          />
        ))}

      </div>

    </section>
  );
}