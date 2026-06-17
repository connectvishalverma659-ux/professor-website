import PageHeader from "@/components/PageHeader";
import NewsCard from "@/components/cards/NewsCard";
import { newss } from "@/data/newss";

export default function NewsPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">

      <PageHeader
        title="News & Announcements"
        description="Current News."
      />

      <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">

        {newss.map((news) => (
          <NewsCard
            key={news.id}
            news={news}
          />
        ))}

      </div>

    </div>
  );
}