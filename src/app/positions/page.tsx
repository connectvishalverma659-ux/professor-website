import PageHeader from "@/components/PageHeader";
import PositionCard from "@/components/cards/PositionCard";
import { positions } from "@/data/positions";

export default function OpenPositionsPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">

      <PageHeader
        title="Open Positions"
        description="Join our research team and contribute to cutting-edge research."
      />

      <div className="mt-10 grid md:grid-cols-2 gap-6">

        {positions.map((position) => (
          <PositionCard
            key={position.id}
            position={position}
          />
        ))}

      </div>

    </div>
  );
}