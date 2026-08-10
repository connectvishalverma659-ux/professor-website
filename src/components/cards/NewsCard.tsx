import { News } from "@/types/news";

type NewsCardProps = {
news: News;
};

export default function NewsCard({
news,
}: NewsCardProps) {
return ( <div className="overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 backdrop-blur-sm">

  <h3 className="font-[var(--font-playfair)] px-1 text-xl font-semibold mb-3">
    {news.title}
  </h3>

  <p className="font-[var(--font-inter)] px-2 text-sm text-gray-500 mb-3">
    {news.category} • {news.date}
  </p>

  <p className="font-[var(--font-inter)] px-2 text-gray-700">
    {news.description}
  </p>

</div>

);
}
