import PageHeader from "@/components/PageHeader";
import ResearchCard from "@/components/cards/ResearchCard";
import { researchAreas } from "@/data/research";

export default function ResearchPage() {


  return (
    <div className="max-w-6xl mx-auto px-6 py-12">

      <PageHeader
        title="Research"
        description="Research areas, projects, and collaborations."
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">

        {researchAreas.map((area) => (
          <ResearchCard
            key={area.title}
            research={area}
          />
        ))}

      </div>

    </div>
  );
}