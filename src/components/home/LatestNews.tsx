import NewsCard from "@/components/cards/NewsCard";
import { newss } from "@/data/newss";

export default function LatestNews() {

const featuredNews = [...newss]
  .sort(
    (a, b) =>
      new Date(b.date).getTime() -
      new Date(a.date).getTime()
  )
  .slice(0, 3);

  return (
    <section className="py-16">

      <div className="flex justify-between items-center mb-8">

        <h2 className="text-3xl font-bold">
          Latest News
        </h2>

        <a
          href="/news"
          className="text-blue-600 hover:underline"
        >
          View All →
        </a>

      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

        {featuredNews.map((news) => (
          <NewsCard
            key={news.id}
            news={news}
          />
        ))}

      </div>

    </section>
  );
}