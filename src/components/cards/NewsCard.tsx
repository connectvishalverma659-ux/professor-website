import { News } from "@/types/news";

type NewsCardProps = {
news: News;
};

export default function NewsCard({
news,
}: NewsCardProps) {
return ( <div className="border rounded-lg p-6 shadow-sm">

  <h3 className="text-xl font-semibold mb-3">
    {news.title}
  </h3>

  <p className="text-sm text-gray-500 mb-3">
    {news.category} • {news.date}
  </p>

  <p className="text-gray-700">
    {news.description}
  </p>

</div>

);
}
