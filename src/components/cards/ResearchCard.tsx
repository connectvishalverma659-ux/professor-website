import { Research } from "@/types/research";

type ResearchCardProps = {
  research: Research;
};

export default function ResearchCard({
  research,
}: ResearchCardProps) {
  return (
    <div className="border rounded-lg p-6 shadow-sm">
      <h3 className="text-xl font-semibold mb-3">
        {research.title}
      </h3>

      <p className="text-gray-600">
        {research.description}
      </p>
    </div>
  );
}