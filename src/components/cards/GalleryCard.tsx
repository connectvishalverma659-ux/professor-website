import { GalleryImage } from "@/types/gallery";
import Image from "next/image";

type GalleryCardProps = {
  gallery: GalleryImage;
};

export default function GalleryCard({
  gallery,
}: GalleryCardProps) {
  return (
    <div className="overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <Image
        src={gallery.image}
        alt={gallery.title}
        width={250}
        height={400}
        className="w-full aspect-[4/3] object-cover rounded-lg"
      />

      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">
          {gallery.title}
        </h3>

        <p className="text-sm text-gray-600">
          {gallery.description}
        </p>
      </div>
    </div>
  );
}