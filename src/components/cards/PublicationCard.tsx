import { Publication } from "@/types/publication";

type PublicationCardProps = {
  publication: Publication;
};

export default function PublicationCard({
  publication,
}: PublicationCardProps) {
  return (
    <div className="overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 backdrop-blur-sm">

      <h3 className="text-xl font-semibold mb-3">
        {publication.title}
      </h3>

      <p className="text-gray-600 mb-2">
        <strong>Journal:</strong> {publication.journal}
      </p>

      <p className="text-gray-600 mb-4">
        <strong>Year:</strong> {publication.year}
      </p>

      <a
        href={`mailto:${publication.link}`}
        className="text-blue-600 underline"
      >
        View Publication
      </a>

    </div>
  );
}
