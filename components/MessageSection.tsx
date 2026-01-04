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

function TestiCard({ item }: { item: (typeof testimonials)[number] }) {
  return (
    <div className="w-[320px] flex-shrink-0 rounded-2xl  p-5 shadow-sm">
      <div className="flex items-center gap-3 pb-3">
        <div className="relative h-10 w-10 overflow-hidden rounded-full">
          <Image src={item.avatar} alt={item.name} fill className="object-cover" />
        </div>
        <div>
          <p className="text-sm font-semibold text-neutral-800">{item.name}</p>
          <p className="text-xs text-neutral-500">{item.role}</p>
        </div>
      </div>

      <p className="text-sm leading-relaxed text-neutral-700">“{item.message}”</p>
    </div>
  );
}

export default function MessageSection() {
  // split jadi 2 baris
  const topRow = testimonials.filter((_, i) => i % 2 === 0);
  const bottomRow = testimonials.filter((_, i) => i % 2 !== 0);

  // perbesar basis konten biar lebar selalu cukup (hindari space kosong)
  const baseRepeat = 3; // ulangi konten per baris 3x lalu gandakan untuk loop mulus
  const topBase = Array.from({ length: baseRepeat }, () => topRow).flat();
  const bottomBase = Array.from({ length: baseRepeat }, () => bottomRow).flat();
  // duplikasi basis untuk loop seamless (start == end)
  const topLoop = [...topBase, ...topBase];
  const bottomLoop = [...bottomBase, ...bottomBase];

  return (
    <section id="pesan" className="px-4 md:px-0 py-8 mt-8 md:py-[50px]">
  <h2 className="mb-4 text-center font-serif text-2xl md:text-4xl tracking-widest text-yellow-600">
    PESAN & KESAN
  </h2>

  <p className="mb-8 md:mb-12 text-center text-base md:text-lg text-neutral-600">
    Cerita dan kesan dari alumni serta guru tercinta
  </p>

  {/* ✅ Fade pakai MASK, bukan overlay */}
  <div
    className="
      marquee-wrap relative overflow-hidden
      [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]
      [-webkit-mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]
    "
  >
    <div className="space-y-6">
      {/* ROW ATAS */}
      <div className="marquee-row overflow-hidden">
        <div className="marquee marquee-left gap-6 py-1">
          {topLoop.map((item, idx) => (
            <TestiCard key={`top-${idx}`} item={item} />
          ))}
        </div>
      </div>

      {/* ROW BAWAH */}
      <div className="marquee-row overflow-hidden">
        <div className="marquee marquee-right gap-6 py-1">
          {bottomLoop.map((item, idx) => (
            <TestiCard key={`bot-${idx}`} item={item} />
          ))}
        </div>
      </div>
    </div>
  </div>
</section>

  );
}
