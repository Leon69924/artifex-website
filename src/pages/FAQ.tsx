import { useState } from "react";
import { FadeIn } from "@/components/FadeIn";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "Das funktioniert doch nur bei einfachen Sachen?",
    answer:
      "Stimmt teilweise — und das sagen wir offen. AI ersetzt keine Compiler-Entwickler. Aber 80% aller Business-Software ist Datenmanagement, Prozessabbildung und Integration. Und dafür brauchen Sie kein Dev-Team. Für die anderen 20% holen Sie Spezialisten.",
  },
  {
    question: "Wie wartet man das langfristig?",
    answer:
      "Mit AI. Genauso wie wir es gebaut haben. Die AI kennt die gesamte Codebase, die Knowledge Base, die Architektur. Wartung ist sogar einfacher als Neuentwicklung — weil der Kontext schon da ist. Wir warten unser ERP seit über einem Jahr so.",
  },
  {
    question: "Braucht man bald gar keine Entwickler mehr?",
    answer:
      "Für komplexe Algorithmen, ML, Compiler, Embedded — doch. Für Business-Software, interne Tools, CRUD-Anwendungen, Prozessautomatisierung — immer weniger. Die Frage ist nicht ob, sondern wann Ihr Unternehmen das nutzt.",
  },
  {
    question: "Ist das sicher und compliant?",
    answer:
      "Für Standard-Sicherheit (Authentication, Verschlüsselung, Input-Validation) — ja, AI macht das zuverlässig. Für branchenspezifische Compliance (GoBD, DSGVO, KassenSichV) holen wir Fachleute dazu. Das kommunizieren wir transparent.",
  },
];

const worksWell = [
  "CRUD-Anwendungen (ERPs, Portale, Dashboards, Admin-Tools)",
  "API-Integrationen und Daten-Synchronisation",
  "Infrastruktur-Setup (Kubernetes, CI/CD, Monitoring)",
  "Prozessautomatisierung und Workflows",
  "Mobile Apps (Expo / React Native)",
  "MCP-Server für bestehende Tools",
];

const limits = [
  "Hochkomplexe Algorithmen (ML-Modelle, Compiler, Echtzeit-Physik)",
  "Branchenspezifische Compliance (muss manuell verifiziert werden)",
  "UI/UX Design (wird zunehmend besser durch AI-Design-Tool-Integrationen)",
  "Security-Audits (braucht menschliche Spezialisten)",
  "Legacy-System-Migration (je nach Komplexität)",
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-slate-200">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between py-5 text-left"
      >
        <span className="pr-4 font-medium text-slate-900">{question}</span>
        <span
          className={cn(
            "shrink-0 text-xl text-slate-400 transition-transform duration-200",
            open && "rotate-45"
          )}
        >
          +
        </span>
      </button>
      <div
        className={cn(
          "grid transition-all duration-200",
          open ? "grid-rows-[1fr] pb-5" : "grid-rows-[0fr]"
        )}
      >
        <div className="overflow-hidden">
          <p className="text-slate-600">{answer}</p>
        </div>
      </div>
    </div>
  );
}

export function FAQ() {
  return (
    <main className="pt-24">
      {/* Hero */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-3xl">
          <FadeIn>
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-indigo-500">
              FAQ
            </p>
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              Häufige Fragen
            </h1>
            <p className="text-lg text-slate-600">
              Die wichtigsten Fragen — und ehrliche Antworten.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="bg-slate-50 px-6 py-20">
        <div className="mx-auto max-w-3xl">
          <FadeIn>
            <div className="rounded-xl border border-slate-200 bg-white px-6">
              {faqs.map((faq) => (
                <FAQItem key={faq.question} {...faq} />
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Transparency Section */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-3xl">
          <FadeIn>
            <h2 className="mb-10 text-2xl font-bold text-slate-900">
              Ehrliche Einschätzung: Was geht — und was nicht
            </h2>
          </FadeIn>

          <div className="grid gap-8 sm:grid-cols-2">
            <FadeIn delay={0.1}>
              <div className="rounded-xl border border-green-200 bg-green-50 p-6">
                <h3 className="mb-4 font-semibold text-green-800">
                  Wo AI gut funktioniert
                </h3>
                <ul className="space-y-2">
                  {worksWell.map((item) => (
                    <li key={item} className="flex gap-2 text-sm text-green-700">
                      <span className="mt-0.5 shrink-0">&#10003;</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="rounded-xl border border-amber-200 bg-amber-50 p-6">
                <h3 className="mb-4 font-semibold text-amber-800">
                  Wo AI an Grenzen stößt
                </h3>
                <ul className="space-y-2">
                  {limits.map((item) => (
                    <li key={item} className="flex gap-2 text-sm text-amber-700">
                      <span className="mt-0.5 shrink-0">&#9888;</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-50 px-6 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <FadeIn>
            <h2 className="mb-4 text-2xl font-bold text-slate-900">
              Noch Fragen?
            </h2>
            <p className="mb-8 text-slate-600">
              In einem kostenlosen 30-Minuten-Gespräch klären wir, ob und wie
              AI-Enhanced Development für Ihr Unternehmen funktioniert.
            </p>
            <a
              href="#/"
              onClick={() => setTimeout(() => document.getElementById("kontakt")?.scrollIntoView({ behavior: "smooth" }), 100)}
              className="inline-block rounded-lg bg-indigo-500 px-6 py-3 font-medium text-white transition-colors hover:bg-indigo-600"
            >
              Gespräch vereinbaren
            </a>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
