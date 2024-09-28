import "lightgallery/css/lg-thumbnail.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lightgallery.css";

// import plugins if you need
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import LightGallery from "lightgallery/react";
import Image from "next/image";
import Link from "next/link";

const Gallery = ({ images, postId }: { images: string[]; postId: string }) => {
  return (
    <LightGallery
      speed={500}
      plugins={[lgThumbnail, lgZoom]}
      elementClassNames="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[10px]"
    >
      {images.map((img, i) => {
        let span = "col-span-3";
        if (images.length === 1) {
          span = "col-span-3";
        } else if (images.length === 2) {
          span = "col-span-2";
        } else if (images.length === 3) {
          span = i < 2 ? "col-span-2" : "col-span-3";
        } else if (images.length === 4) {
          span = "col-span-1";
        }

        return (
          <Link
            href={img}
            key={img}
            className={`rounded-[10px] w-full aspect-[150/75] ${span}`}
          >
            <Image
              width={600}
              height={300}
              alt={`${postId} Image ${i + 1}`} // Updated alt text for clarity
              src={img}
              className="rounded-[10px] w-full h-full object-cover"
            />
          </Link>
        );
      })}
    </LightGallery>
  );
};

export default Gallery;
