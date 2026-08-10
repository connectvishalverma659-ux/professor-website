import { positions } from "@/data/positions";

export default function OpenPositionsPreview() {
  return (
    <section className="py-16">

      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold">
          Open Positions
        </h2>

        <a
          href="/positions"
          className="text-blue-600 hover:underline"
        >
          View Details →
        </a>
      </div>

      <div className="border rounded-lg p-6">
        <div className="font-[var(--font-inter)] space-y-4">

          {positions.map((position) => (
            <div
              key={position.id}
              className="font-[var(--font-inter)] flex justify-between border-b pb-2"
            >
              <span>{position.type}</span>
              <span>{position.status}</span>
            </div>
          ))}

        </div>
      </div>

    </section>
  );
}