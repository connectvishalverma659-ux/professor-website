import { Position } from "@/types/position";

type PositionCardProps = {
  position: Position;
};

export default function PositionCard({
  position,
}: PositionCardProps) {
  return (
    <div className="overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 backdrop-blur-sm">
      <h3 className="text-xl font-semibold mb-3">
        {position.title}
      </h3>

      <p>
        <strong>Type:</strong> {position.type}
      </p>

      <p>
        <strong>Status:</strong> {position.status}
      </p>

      <p className="my-3">
        {position.description}
      </p>

      <a
        href={`mailto:${position.applyEmail}`}
        className="text-blue-600 underline"
      >
        Apply Now
      </a>
    </div>
  );
}