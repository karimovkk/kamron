import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";
import ContactVideo from "./ContactVideo";

export default function ContactHero() {
  return (
    <section className="relative pt-32 pb-20">
      <div className="absolute inset-0 -z-20 bg-[#0B1220]" />
      <div className="absolute inset-0 -z-10 hero-radial opacity-70" />

      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div className="max-w-2xl">
            <ContactInfo />
            <div className="mt-8">
              <ContactForm />
            </div>
          </div>

          <div className="pt-0 lg:pt-[550px]">
            <ContactVideo />
          </div>
        </div>
      </div>
    </section>
  );
}