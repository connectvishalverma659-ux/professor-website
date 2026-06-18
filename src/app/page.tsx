import { homeData } from "@/data/home";
import ResearchCard from "@/components/cards/ResearchCard";
import { researchAreas } from "@/data/research";
import NewsCard from "@/components/cards/NewsCard";
import { newss } from "@/data/newss";
import { positions } from "@/data/positions";
import ResearchHighlights from "@/components/home/ResearchHighlights";
import LatestNews from "@/components/home/LatestNews";
import OpenPositionsPreview from "@/components/home/OpenPositionsPreview";

export default function Home() {
    const featuredResearch = researchAreas.slice(0, 3);
    const featuredNews = newss.slice(0, 3);
  return (
      
    <div className="">

      {/* Hero Section */}

     <div className="min-h-screen w-screen "
     style={{
    backgroundImage: "url('/images/backgrounds/herosection background 1.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }}
     >
      
      
      <div className="max-w-7xl mx-auto px-6 py-12 ">
      <section className="text-center py-16">
            
                <section className="py-20 text-right">
            
                  <h1 className="text-5xl font-bold mb-6">
                       {homeData.heroTitle}
                  </h1>
            
                  <p className="text-right max-w-3xl ml-auto text-lg text-gray-700 mb-8">
                    {homeData.heroDescription}
                  </p>
            
                  <div className="flex justify-end gap-4">
            
                    <a
                      href="/research"
                      className="px-6 py-3 font-bold rounded-lg hover:opacity-50"
                    >
                      Research
                    </a>
            
                    <a
                      href="/publications"
                      className="px-6 py-3 font-bold rounded-lg hover:opacity-50"
                    >
                      Publications
                    </a>
            
                  </div>
            
                </section>
             

      </section>
      </div> 
      </div> 
<div className="max-w-7xl mx-auto px-6 py-12">
      {/* Research Highlights */}
      
      <section className="py-16">
      
            <div className="flex justify-between items-center mb-8">
      
              <h2 className="text-3xl font-bold">
                Research Highlights
              </h2>
      
              <a
                href="/research"
                className="px-6 py-3 font-bold rounded-lg hover:opacity-50"
              >
                View All →
              </a>
      
            </div>
      
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      
              {featuredResearch.map((area) => (
                <ResearchCard
                  key={area.title}
                  research={area}
                />
              ))}
      
            </div>
      
          </section>

      {/* Latest News */}
      <section className="py-12">
<div className="flex justify-between items-center mb-8">

        <h2 className="text-3xl font-bold">
          Latest News
        </h2>

        <a
          href="/news"
          className="px-6 py-3 font-bold rounded-lg hover:opacity-50"
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

      {/* Open Positions */}
      <section className="py-12">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold">
          Open Positions
        </h2>


      </div>

      <div className="w-64 overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 backdrop-blur-sm ">
        <div className="space-y-4">

          {positions.map((position) => (
            <div
              key={position.id}
              className="flex justify-between pb-2"
            >
              <span>{position.type}</span>
              <span>{position.status}</span>
            </div>
          ))}
                 
        </div>

      </div>
                     <a
                   href="/positions"
                   className="gap-4 px-6 py-3 font-bold rounded-lg hover:opacity-50  ml-auto"
                     >
                     View Details →
              </a>
      </section>

    </div>
    </div>
  );
}