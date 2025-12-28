// components/GallerySection.tsx
export default function GallerySection() {
  return (
    <section id="gallery" className="py-20 px-6">
      <h2 className="text-3xl font-semibold text-center mb-10">
        Dokumentasi Reuni
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div
            key={i}
            className="aspect-[4/3] rounded-2xl overflow-hidden bg-gray-200"
          >
            <img
              src={`/images/doc/${i}.JPG`}
              alt={`Dokumentasi ${i}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

    </section>
  );
}
