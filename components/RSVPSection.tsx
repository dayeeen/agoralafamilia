import Link from "next/link";

export default function RSVPSection() {
  return (
    <section id="rsvp" className="mt-8 md:mt-[50px] mx-auto px-4 md:px-0">
      <div className="mx-auto max-w-4xl rounded-3xl bg-neutral-100 p-5 md:p-10 shadow-sm w-full">
        <h2 className="text-center font-serif text-2xl md:text-4xl tracking-widest text-yellow-600">
          RSVP / DAFTAR
        </h2>
        <p className="mt-3 md:mt-4 text-center text-base md:text-lg text-neutral-600">
          Konfirmasi kehadiran kamu biar panitia bisa menyiapkan konsumsi dan
          tempat dengan rapi.
        </p>

        <div className="mt-8 md:mt-10 grid gap-4 grid-cols-1 md:grid-cols-3">
          <div className="rounded-2xl bg-white/60 p-5">
            <p className="text-xs tracking-widest text-neutral-500">TANGGAL</p>
            <p className="mt-1 font-medium text-neutral-800">Sabtu, 12 Juli 2025</p>
          </div>
          <div className="rounded-2xl bg-white/60 p-5">
            <p className="text-xs tracking-widest text-neutral-500">WAKTU</p>
            <p className="mt-1 font-medium text-neutral-800">09.00 WIB – Selesai</p>
          </div>
          <div className="rounded-2xl bg-white/60 p-5">
            <p className="text-xs tracking-widest text-neutral-500">LOKASI</p>
            <p className="mt-1 font-medium text-neutral-800">Aula SMPN 2 Panumbangan</p>
          </div>
        </div>

        <div className="mt-8 md:mt-10 flex flex-col items-center justify-center gap-3 md:flex-row">
          <Link
            href="https://bit.ly/PendaftaranReuniNedupa"
            target="_blank"
            className="w-full rounded-xl bg-yellow-600 px-4 py-3 text-center text-xs md:text-sm font-semibold text-white hover:bg-yellow-700 transition"
          >
            Konfirmasi Kehadiran
          </Link>

          <Link
            href="https://maps.google.com/?q=SMPN+2+Panumbangan"
            target="_blank"
            className="w-full rounded-xl bg-neutral-200 px-4 py-3 text-center text-xs md:text-sm font-semibold text-neutral-800 hover:bg-neutral-300 transition"
          >
            Lihat Lokasi
          </Link>

          <Link
            href="https://wa.me/62XXXXXXXXXXX"
            target="_blank"
            className="w-full rounded-xl bg-neutral-800 px-4 py-3 text-center text-xs md:text-sm font-semibold text-white hover:bg-black transition"
          >
            Hubungi Panitia
          </Link>
        </div>

        <p className="mt-6 text-center text-xs text-neutral-500">
          *Link WhatsApp bisa diganti ke grup WA kalau kamu sudah punya link invite.
        </p>
      </div>
    </section>
  );
}
