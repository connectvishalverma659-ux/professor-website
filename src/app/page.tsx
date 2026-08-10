import { homeData } from "@/data/home";
import ResearchCard from "@/components/cards/ResearchCard";
import { researchAreas } from "@/data/research";
import NewsCard from "@/components/cards/NewsCard";
import { newss } from "@/data/newss";
import { positions } from "@/data/positions";
import LatestNews from "@/components/home/LatestNews";
import OpenPositionsPreview from "@/components/home/OpenPositionsPreview";
import ResearchHighlightCard from "@/components/cards/ResearchHighlights";
import { researchHighlightsArea } from "@/data/ResearchHighlights";
import QueryForm from "@/components/forms/QueryForm";

export default function Home() {
    const featuredResearch = researchHighlightsArea.slice(0, 4);
    const featuredNews = newss.slice(0, 3);
  return (
      
    <div className="">

      {/* Hero Section */}

     <div className="min-h-screen"
     style={{
    backgroundImage: "url('/images/backgrounds/herosection background 1.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }}
     >
      
      
      <div className="max-w-7xl mx-auto px-6 py-12 ">
      <section className="text-center py-16">
            
                <section className="relative py-0 text-right min-h-[500px]">

                    <h1 className="font-[var(--font-playfair)] text-5xl font-bold leading-tight md:text-6xl lg:text-7xl whitespace-pre-line">
                       {homeData.heroTitle}  
                     </h1>

                    <h2 className="font-[var(--font-playfair)] text-2xl font-bold leading-tight md:text-3xl lg:text-4xl whitespace-pre-line">
                       {homeData.heroTitle2}  
                     </h2>

                   <p className="py-10 font-[var(--font-inter)] text-lg leading-8 md:text-xl whitespace-pre-line">
                      {homeData.heroDescription}
                  </p>

                    {/* Bottom-right buttons */}
                  <div className="absolute bottom-6 right-6 flex gap-4">

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
                  <div className="my-12 h-[3px] w-full rounded-full bg-gray-300 shadow-[0_2px_0_rgba(255,255,255,0.8),0_-1px_0_rgba(0,0,0,0.15)]" />

      </div> 

<div className="max-w-7xl mx-auto px-6 py-12">
      {/* Research Highlights */}
      
      <section className="py-16">
      
            <div className="flex justify-between items-center mb-8">
      
              <h2 className="font-[var(--font-dm-serif)] text-3xl font-bold">
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
                <ResearchHighlightCard
                  key={area.title}
                  research={area}
                />
              ))}
      
            </div>
      
          </section>

          <div className="my-12 h-[3px] w-full rounded-full bg-gray-300 shadow-[0_2px_0_rgba(255,255,255,0.8),0_-1px_0_rgba(0,0,0,0.15)]" />

      {/* Latest News */}
      <section className="py-12">
<div className="flex justify-between items-center mb-8">

        <h2 className="font-[var(--font-dm-serif)] text-3xl font-bold">
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

      <div className="my-12 h-[3px] w-full rounded-full bg-gray-300 shadow-[0_2px_0_rgba(255,255,255,0.8),0_-1px_0_rgba(0,0,0,0.15)]" />


  {/* Query Form + Open Positions */}
  <section className="py-12">

    <div className="grid gap-10 lg:grid-cols-4">

      {/* LEFT - 2/3 */}
      <div className="lg:col-span-3">
        <QueryForm />
      </div>

      {/* RIGHT - 1/3 */}
      <div className="lg:col-span-1">

        <div className="mb-8 flex items-center justify-between">

          <h2 className="font-[var(--font-playfair)] text-3xl font-bold">
            Open Positions
          </h2>

          <a
            href="/positions"
            className="px-4 py-2 font-bold transition hover:opacity-50"
          >
            View Details →
          </a>

        </div>

        <div className="w-full rounded-lg p-6 shadow-md backdrop-blur-sm transition-shadow duration-300 hover:shadow-lg">

          <div className="space-y-4">

            {positions.map((position) => (
              <div
                key={position.id}
                className="flex items-center justify-between border-b pb-3 last:border-b-0"
              >
                <span>{position.type}</span>
                <span>{position.status}</span>
              </div>
            ))}

          </div>

        </div>

      </div>

    </div>

  </section>
</div>
</div>
  );
}