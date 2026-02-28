import AboutHero from "./components/AboutHero";
import AboutBlocks from "./components/AboutBlocks";

export default function AboutPage() {
  return (
    <main className="relative min-h-screen pt-32 pb-24">
      <div className="absolute inset-0 -z-20 bg-[#0B1220]" />
      <div className="absolute inset-0 -z-10 hero-radial opacity-70" />

      <div className="mx-auto max-w-6xl px-6">
        <AboutHero />
        <AboutBlocks />
      </div>
    </main>
  );
}