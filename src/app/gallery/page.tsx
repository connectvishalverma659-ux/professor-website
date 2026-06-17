import PageHeader from "@/components/PageHeader";
import GalleryCard from "@/components/cards/GalleryCard";
import { gallery } from "@/data/gallery";
export default function GalleryPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
    
          <PageHeader
            title="Gallery"
            description="Photos from conferences, workshops, research activities, and laboratory events."
          />

          <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            
                  {gallery.map((item) => (
                       <GalleryCard
                          key={item.id}
                          gallery={item}
                        />
                          ))}
          </div>
    

    </div>
 
 
  );
}