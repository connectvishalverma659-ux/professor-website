import { Publication } from "@/types/publication";

type PublicationCardProps = {
  publication: Publication;
};

export default function PublicationCard({
  publication,
}: PublicationCardProps) {
  return (
    <div className="overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 backdrop-blur-sm">

      <h3 className="px-2 text-xl font-semibold mb-3">
        {publication.title}
      </h3>

      <p className="px-2 text-gray-600 mb-4">
        <strong>Date:</strong> {publication.year}
      </p>

      <p className="px-2 text-gray-600 mb-2">
        <strong>Journal:</strong> {publication.journal}
      </p>
      
      <a
         href={publication.link}
         target="_blank"
            rel="noopener noreferrer"
        className="text-blue-600 "
      >
          <button className="px-6 py-3 font-bold rounded-lg hover:opacity-50">
            View Publication
          </button>
        
      </a>

    </div>
  );
}
