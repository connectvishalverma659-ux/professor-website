import { ResearchHighlight } from "@/types/ResearchHighlights";

type ResearchCardProps = {
  research: ResearchHighlight;
};

export default function ResearchHighlightCard({
  research,
}: ResearchCardProps) {
  return (
    <div className="font-[var(--font-playfair)] px-2 overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 backdrop-blur-sm ">
      <h3 className="text-xl font-semibold mb-3">
        {research.title}
      </h3>

      <p className="font-[var(--font-inter)] text-gray-600">
        {research.description}
      </p>
    </div>
  );
}