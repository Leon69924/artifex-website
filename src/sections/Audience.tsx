import { FadeIn } from "@/components/FadeIn";
import { ArrowRight } from "lucide-react";

const audiences = [
  {
    title: "Software-Agenturen",
    description:
      "Dev-Team vorhanden, aber AI-Workflows fehlen. Projekte sollen schneller und effizienter werden.",
  },
  {
    title: "Geschäftsführer",
    description:
      "Die digitalisieren wollen, aber kein Dev-Team haben.",
  },
  {
    title: "IT-Leiter & CTOs",
    description:
      "Die AI produktiv einsetzen wollen, statt nur darüber zu reden.",
  },
];

export function Audience() {
  return (
    <section className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-2xl">
        <FadeIn>
          <h2 className="text-center text-4xl font-bold text-slate-900 md:text-5xl">
            Für wen ist das?
          </h2>
        </FadeIn>

        <div className="mt-16 space-y-10">
          {audiences.map((audience, i) => (
            <FadeIn key={audience.title} delay={i * 0.1}>
              <div className="flex gap-4">
                <ArrowRight className="mt-1 h-6 w-6 shrink-0 text-indigo-500" />
                <div>
                  <h3 className="text-xl font-bold text-slate-900">
                    {audience.title}
                  </h3>
                  <p className="mt-1 text-lg text-slate-500">
                    {audience.description}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
