export default function ContactVideo() {
  return (
    <div className="relative">
      <div className="relative w-full overflow-hidden rounded-[28px] border border-white/10 bg-[#08111F] shadow-[0_0_0_1px_rgba(255,255,255,0.03),0_40px_120px_rgba(2,8,23,0.65)]">
        <div className="pointer-events-none absolute inset-0 z-10 rounded-[28px] ring-1 ring-inset ring-[#38BDF8]/15" />
        <div className="pointer-events-none absolute -left-16 top-10 h-40 w-40 rounded-full bg-[#38BDF8]/10 blur-3xl" />
        <div className="pointer-events-none absolute -right-16 bottom-10 h-40 w-40 rounded-full bg-[#A855F7]/10 blur-3xl" />

        <video
          autoPlay
          muted
          loop
          playsInline
          className="block aspect-video w-full object-cover"
        >
         <source src="/contact-hero.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  );
}