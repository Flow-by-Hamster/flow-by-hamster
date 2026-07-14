export default function CTA() {
  return (
    <section className="px-10 py-[72px] text-center max-w-[640px] mx-auto">
      <h2 className="font-serif text-[42px] font-normal tracking-[-1.5px] leading-tight mb-4">
        Your business deserves better than{" "}
        <em className="italic text-[#993C1D]">a spreadsheet.</em>
      </h2>
      <p className="text-[15px] text-[#888780] font-light leading-[1.7] mb-9">
        Join 2,400+ service businesses already running on Hamster. Free to
        start, easy to grow.
      </p>
      <div className="flex gap-3 justify-center flex-wrap">
        <button className="btn-primary px-8 py-3.5 text-[15px]">
          Create your free account →
        </button>
        <button className="btn-outline px-8 py-3.5 text-[15px]">
          Book a demo
        </button>
      </div>
    </section>
  );
}
