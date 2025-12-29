import TimelineAcara from "./TimelineAcara";


export default function AcaraSection() {
  return (
    <section id="acara" className="bg-white px-4 md:px-[50px] py-8 md:py-[50px] mt-8 md:mt-[50px]">
      <h2 className="mb-8 md:mb-16 text-center font-serif text-2xl md:text-4xl tracking-widest text-yellow-600">
        RUNDOWN ACARA
      </h2>

      <TimelineAcara />
    </section>
  );
}
