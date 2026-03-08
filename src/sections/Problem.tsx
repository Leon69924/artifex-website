import { FadeIn } from "@/components/FadeIn";

export function Problem() {
  return (
    <section className="bg-slate-50 px-6 py-24 md:py-32">
      <div className="mx-auto max-w-3xl">
        <FadeIn>
          <h2 className="text-center text-4xl font-bold text-slate-900 md:text-5xl">
            Das Problem
          </h2>
        </FadeIn>

        <FadeIn delay={0.1}>
          <p className="mt-10 text-center text-xl text-slate-600">
            <span className="font-mono text-indigo-500">92%</span> aller
            Entwickler nutzen AI-Tools.
            <br />
            Aber nur <span className="font-mono text-indigo-500">30%</span>{" "}
            vertrauen den Ergebnissen.
          </p>
        </FadeIn>

        <div className="mt-12 grid gap-12 md:grid-cols-2">
          <FadeIn delay={0.2}>
            <h3 className="text-lg font-semibold text-slate-700">
              Für Software-Teams:
            </h3>
            <ul className="mt-4 space-y-3 text-lg text-slate-600">
              <li className="flex gap-3">
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-sm bg-indigo-500" />
                Copilot und ChatGPT Copy-Paste ist kein Workflow
              </li>
              <li className="flex gap-3">
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-sm bg-indigo-500" />
                Projekte dauern genauso lang wie vorher
              </li>
              <li className="flex gap-3">
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-sm bg-indigo-500" />
                Kein strukturierter Prozess für AI-gestützte Entwicklung
              </li>
              <li className="flex gap-3">
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-sm bg-indigo-500" />
                Quality Gates und Reviews fehlen komplett
              </li>
            </ul>
          </FadeIn>

          <FadeIn delay={0.3}>
            <h3 className="text-lg font-semibold text-slate-700">
              Für Unternehmen ohne Dev-Team:
            </h3>
            <ul className="mt-4 space-y-3 text-lg text-slate-600">
              <li className="flex gap-3">
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-sm bg-indigo-500" />
                Digitalisierung scheitert am fehlenden Entwicklerteam
              </li>
              <li className="flex gap-3">
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-sm bg-indigo-500" />
                Excel und veraltete Systeme bremsen das Wachstum
              </li>
              <li className="flex gap-3">
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-sm bg-indigo-500" />
                Agenturen bauen Software, aber befähigen nicht
              </li>
            </ul>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
