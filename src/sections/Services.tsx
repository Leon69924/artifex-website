import { FadeIn } from "@/components/FadeIn";
import { ServiceCard } from "@/components/ServiceCard";

const services = [
  {
    title: "Power Hour",
    duration: "1 Stunde",
    price: "€300",
    description:
      "Video-Call mit konkretem Problem. Sofortige Empfehlung und Aktionsplan. Kein Overhead — Termin buchen, Problem lösen.",
  },
  {
    title: "AI Readiness Assessment",
    duration: "2-3 Tage",
    price: "ab €5.000",
    description:
      "Ist-Analyse, Gap-Analyse, Tool-Empfehlung und 90-Tage-Roadmap. Inklusive Team-Interviews und Code-Review. Am Ende wissen Sie genau, wo die größten AI-Hebel liegen.",
  },
  {
    title: "Monthly AI Advisory",
    duration: "Ongoing",
    price: "ab €3.000/Mo",
    description:
      "Ihr Fractional AI Officer. Weekly Sync, Async-Beratung, Workflow-Reviews und Tool-Evaluierung. 8-16h/Monat strategische AI-Begleitung für Ihr Dev-Team.",
  },
];

export function Services() {
  return (
    <section className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <h2 className="text-center text-4xl font-bold text-slate-900 md:text-5xl">
            Was wir anbieten
          </h2>
        </FadeIn>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {services.map((service, i) => (
            <FadeIn key={service.title} delay={i * 0.1}>
              <ServiceCard {...service} />
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.4}>
          <p className="mt-12 text-center text-lg text-slate-500">
            + Workshops für Ihr Dev-Team:{" "}
            <span className="font-mono font-semibold text-slate-700">
              €2.400/Tag
            </span>
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
