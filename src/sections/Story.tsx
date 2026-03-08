import { FadeIn } from "@/components/FadeIn";

export function Story() {
  return (
    <section className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-2xl">
        <FadeIn>
          <p className="text-center text-2xl font-bold leading-loose text-slate-900 md:text-3xl">
            Wir haben ein ERP mit 3 Millionen Zeilen Code gebaut.
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <p className="mt-8 text-center text-xl leading-relaxed text-slate-600 md:text-2xl">
            50+ Module. Mobile App. Kubernetes über zwei Rechenzentren.
            <br />
            In 14 Monaten. Mit AI-Workflows statt klassischer Entwicklung.
          </p>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className="mt-8 text-center text-xl leading-relaxed text-slate-600 md:text-2xl">
            Nicht Copy-Paste aus ChatGPT —
            <br />
            sondern orchestrierte Workflows mit Kontext,
            <br />
            Quality Gates und automatisierten Reviews.
          </p>
        </FadeIn>

        <FadeIn delay={0.3}>
          <p className="mt-8 text-center text-xl font-medium leading-relaxed text-slate-900 md:text-2xl">
            Jetzt zeigen wir Software-Teams
            <br />
            wie sie das auch können.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
