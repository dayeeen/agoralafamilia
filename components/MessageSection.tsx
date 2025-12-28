import Image from "next/image";

const testimonials = [
  {
    name: "Rizki Setiawan",
    role: "Alumni 2012",
    message:
      "Reuni ini bikin inget lagi masa-masa sekolah yang simpel tapi berkesan. Terima kasih panitia, acaranya hangat banget.",
    avatar: "/person/rizki.png",
  },
  {
    name: "Dina Agustina",
    role: "Alumni 2012",
    message:
      "Datang dengan ekspektasi biasa, pulang dengan hati penuh kenangan. Semoga bisa rutin tiap tahun.",
    avatar: "/person/dina.png",
  },
  {
    name: "Pak Endang",
    role: "Wakasek Kesiswaan",
    message:
      "Saya bangga melihat alumni SMPN 2 Panumbangan tetap menjaga silaturahmi dan rasa kekeluargaan.",
    avatar: "/person/pakendang.png",
  },
  {
    name: "Om Rizki",
    role: "Alumni 2017",
    message:
      "Acara yang luar biasa! Senang bisa bertemu kembali dengan para alumni dan berbagi cerita tentang perjalanan hidup masing-masing.",
    avatar: "/person/om.png",
  },
];

export default function MessageSection() {
  return (
    <section
      id="pesan"
      className="bg-neutral-50"
    >
      <h2 className="mb-4 text-center font-serif text-4xl tracking-widest text-yellow-600">
        PESAN & KESAN
      </h2>

      <p className="mb-12 text-center text-lg text-neutral-600">
        Cerita dan kesan dari alumni serta guru tercinta
      </p>

      <div className="flex gap-6 overflow-x-auto pb-4 scroll-smooth no-scrollbar">
        {testimonials.map((item, index) => (
          <div
            key={index}
            className="rounded-2xl bg-neutral-100 p-6 shadow-sm"
          >
            <div className="flex items-center gap-4 pb-2">
              <div className="relative h-12 w-12 overflow-hidden rounded-full">
                <Image
                  src={item.avatar}
                  alt={item.name}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="pb-2">
                <p className="text-m font-semibold text-neutral-800">
                  {item.name}
                </p>
                <p className="text-s text-neutral-500 w-50">
                  {item.role}
                </p>
              </div>
            </div>
            <p className="text-lg text-neutral-700 leading-relaxed">
              “{item.message}”
            </p>

          </div>
        ))}
      </div>
    </section>
  );
}
