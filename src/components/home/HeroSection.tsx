import { homeData } from "@/data/home";

export default function HeroSection() {
    return (
    <section className="py-20 text-center">

      <h1 className="text-5xl font-bold mb-6">
           {homeData.heroTitle}
      </h1>

      <p className="max-w-3xl mx-auto text-lg text-gray-700 mb-8">
        {homeData.heroDescription}
      </p>

      <div className="flex justify-center gap-4">

        <a
          href="/research"
          className="px-6 py-3 bg-black text-white rounded-lg"
        >
          View Research
        </a>

        <a
          href="/publications"
          className="px-6 py-3 border rounded-lg"
        >
          Publications
        </a>

      </div>

    </section>
  );
}