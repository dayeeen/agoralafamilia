// components/MessageSection.tsx
export default function MessageSection() {
  return (
    <section className="py-20 px-6 max-w-4xl mx-auto">
      <h2 className="text-3xl font-semibold mb-6">
        Kesan & Pesan
      </h2>

      <form className="grid gap-4">
        <input
          type="text"
          placeholder="Nama"
          className="border rounded-lg px-4 py-3"
        />
        <input
          type="text"
          placeholder="Angkatan"
          className="border rounded-lg px-4 py-3"
        />
        <textarea
          placeholder="Pesan"
          rows={4}
          className="border rounded-lg px-4 py-3"
        />
        <button className="self-start px-6 py-3 rounded-full bg-black text-white">
          Kirim Pesan
        </button>
      </form>
    </section>
  );
}
