import { Research } from "@/types/research";

type ResearchCardProps = {
  research: Research;
};

export default function ResearchCard({
  research,
}: ResearchCardProps) {
  return (
    <div className="overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 backdrop-blur-sm ">
      <h3 className="text-xl font-semibold mb-3">
        {research.title}
      </h3>

      <p className="text-gray-600">
        {research.description}
      </p>
    </div>
  );
}