import PageHeader from "@/components/PageHeader";
import PublicationCard from "@/components/cards/PublicationCard";
import { publications } from "@/data/publications";

export default function PublicationsPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">

      <PageHeader
        title="Publications"
        description="Journal papers, conference papers, and research contributions."
      />

      <div className="wt-10 grid md:grid-cols-1 gap-6">

        {publications.map((publication) => (
          <PublicationCard
            key={publication.title}
            publication={publication}
          />
        ))}

      </div>  

    </div>
  );
}