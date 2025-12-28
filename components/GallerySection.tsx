import Image from "next/image";

const images = [
  "/galeries/1.jpg",
  "/galeries/2.jpg",
  "/galeries/3.jpg",
  "/galeries/4.jpg",
  "/galeries/5.jpg",
  "/galeries/6.jpg",
];

// Gallery Masonry
export default function GallerySection() {
  return (
    <section
      id="galeri"
      className="bg-white px-[50px] py-[50px]"
    >
      <h2 className="mb-12 text-center font-serif text-4xl tracking-widest text-yellow-600">
        GALERI KENANGAN
      </h2>

      <div className="columns-2 md:columns-3 gap-6 space-y-6">
        {images.map((src, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-2xl"
          >
            <Image
              src={src}
              alt={`Galeri reuni ${index + 1}`}
              width={600}
              height={800}
              className="w-full rounded-2xl object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
