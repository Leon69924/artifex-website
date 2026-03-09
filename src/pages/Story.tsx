import { FadeIn } from "@/components/FadeIn";

export function StoryPage() {
  return (
    <main className="pt-24">
      {/* Hero */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-3xl">
          <FadeIn>
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-indigo-500">
              Unsere Geschichte
            </p>
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              Zwei Nicht-Programmierer.
              <br />
              Ein ERP. Eine Mission.
            </h1>
          </FadeIn>
        </div>
      </section>

      {/* Die Firma */}
      <section className="bg-slate-50 px-6 py-20">
        <div className="mx-auto max-w-3xl">
          <div className="space-y-6 leading-relaxed text-slate-700">
            <FadeIn>
              <h2 className="mb-4 text-2xl font-bold text-slate-900">
                Eine Manufaktur seit 1796
              </h2>
            </FadeIn>

            <FadeIn delay={0.05}>
              <p>
                Die Wilhelm Schweizer Zinnmanufaktur in Dießen am Ammersee stellt seit
                über 230 Jahren handbemalte Zinnfiguren her — Märchenmotive,
                Weihnachtsschmuck, bayerische Tradition. Rund 83 Mitarbeiter, 1.810
                Produkte, Weihnachtsmärkte in Nürnberg, Hamburg und Köln. Ein
                Familienunternehmen, das Handwerk und Tradition lebt.
              </p>
            </FadeIn>

            <FadeIn delay={0.1}>
              <p>
                Joan Arau führt das Unternehmen als Geschäftsführer, Leon Tropp
                verantwortet als Co-CEO die operativen Prozesse und die IT. Zusammen
                treiben sie die digitale Transformation einer Firma voran, die älter
                ist als die meisten Technologieunternehmen der Welt.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Das Problem */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-3xl">
          <div className="space-y-6 leading-relaxed text-slate-700">
            <FadeIn>
              <h2 className="mb-4 text-2xl font-bold text-slate-900">
                Das Problem
              </h2>
            </FadeIn>

            <FadeIn delay={0.05}>
              <p>
                Das Herzstück jeder produzierenden Firma ist ihr ERP-System. Bei WSZ
                lief seit Jahrzehnten eine veraltete 4D-Lösung — ein Relikt aus den
                90ern. Kein Multi-Currency für internationale Kunden. Keine Anbindung
                an den Onlineshop. Keine mobile Lagerverwaltung. Sieben Lagerhäuser,
                aber kein System das sie verbindet.
              </p>
            </FadeIn>

            <FadeIn delay={0.1}>
              <p>
                Die Alternativen waren ernüchternd: SAP — unbezahlbar und oversized
                für ein KMU. Eine Software-Agentur — sechsstellige Budgets und
                monatelange Abhängigkeit. Fertige Cloud-ERPs — zu starr für die
                speziellen Prozesse einer Zinnmanufaktur mit B2B-Großhandel,
                Weihnachtsmärkten und tschechischer Malerei-Tochter.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Die Gründer */}
      <section className="bg-slate-50 px-6 py-20">
        <div className="mx-auto max-w-3xl">
          <div className="space-y-6 leading-relaxed text-slate-700">
            <FadeIn>
              <h2 className="mb-4 text-2xl font-bold text-slate-900">
                Die Ausgangslage
              </h2>
            </FadeIn>

            <FadeIn delay={0.05}>
              <p>
                Leon kommt aus der Volkswirtschaftslehre, nicht aus der Informatik.
                IT-affin — Linux, Netzwerke, Systemadministration — aber keine Zeile
                Code geschrieben. Joan hat Business-Erfahrung und etwas Python, aber
                kein Frontend, keine Infrastruktur, kein DevOps. Klassische
                Softwareentwicklung war schlicht keine Option.
              </p>
            </FadeIn>

            <FadeIn delay={0.1}>
              <p>
                Was sie hatten: Ein klares Verständnis der Geschäftsprozesse. Die
                Fähigkeit, komplexe Systeme zu denken. Und den Willen, einen komplett
                neuen Weg zu gehen.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Der Weg */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-3xl">
          <div className="space-y-6 leading-relaxed text-slate-700">
            <FadeIn>
              <h2 className="mb-4 text-2xl font-bold text-slate-900">
                Der Weg
              </h2>
            </FadeIn>

            <FadeIn delay={0.05}>
              <p>
                Im Januar 2025 starteten sie mit einer Hypothese: Wenn AI heute Code
                generieren kann — dann muss man nicht programmieren können, um Software
                zu bauen. Man muss wissen was man bauen will, wie man es strukturiert,
                und wie man Qualität sicherstellt.
              </p>
            </FadeIn>

            <FadeIn delay={0.1}>
              <p>
                Die ersten Wochen waren eine steile Lernkurve. Nicht Programmieren
                lernen — sondern AI-Orchestrierung. Wie gibt man einer AI genug
                Kontext? Wie verhindert man dass sie Fehler einbaut? Wie baut man
                Modul für Modul ein System auf, das am Ende zusammenpasst?
              </p>
            </FadeIn>

            <FadeIn delay={0.15}>
              <p>
                Die Antwort war kein einzelnes Tool, sondern ein ganzes System:
                Eine Knowledge Base die der AI die Architektur erklärt.
                Quality Gates die jeden Commit prüfen. Hooks die gefährliche
                Aktionen verhindern. Multi-Agent Workflows bei denen mehrere AIs
                parallel an Features arbeiten. Alles selbst entwickelt, aus der
                Praxis heraus.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Das Ergebnis */}
      <section className="bg-slate-900 px-6 py-20">
        <div className="mx-auto max-w-3xl">
          <div className="space-y-6 leading-relaxed text-slate-300">
            <FadeIn>
              <h2 className="mb-4 text-2xl font-bold text-white">
                Das Ergebnis
              </h2>
            </FadeIn>

            <FadeIn delay={0.05}>
              <p>
                14 Monate und 10.323 Commits später: Ein vollständiges ERP mit über
                50 Django-Modulen. Lagerverwaltung mit Barcode-Scanning über sieben
                Standorte. Eine Mobile App für iOS und Android. Multi-Currency in EUR,
                USD und GBP. Multi-Language in Deutsch, Englisch und Tschechisch.
              </p>
            </FadeIn>

            <FadeIn delay={0.1}>
              <p>
                Integrationen mit Shopware, Sendcloud, BuchhaltungsButler und
                Ready2Order. Über 80 API-Endpoints. Ein Kubernetes-Cluster mit neun
                Nodes über zwei Rechenzentren mit automatischem Failover. Vollständig
                automatisierte CI/CD-Pipeline — Git Push bis Production Deployment.
              </p>
            </FadeIn>

            <FadeIn delay={0.15}>
              <p className="font-medium text-white">
                3.133.249 Zeilen Code. Verifiziert mit cloc. In Produktion bei einer
                echten Firma mit echten Aufträgen, echten Kunden und einer
                230-jährigen Geschichte.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Die Mission */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-3xl">
          <div className="space-y-6 leading-relaxed text-slate-700">
            <FadeIn>
              <h2 className="mb-4 text-2xl font-bold text-slate-900">
                Die Mission
              </h2>
            </FadeIn>

            <FadeIn delay={0.05}>
              <p>
                Was bei WSZ funktioniert hat, ist kein Einzelfall — es ist eine neue
                Art Software zu bauen. Die Fähigkeit heißt nicht Programmieren. Sie
                heißt AI-Orchestrierung: Wissen was möglich ist, Projekte
                strukturieren, Qualität sichern, Systeme verbinden.
              </p>
            </FadeIn>

            <FadeIn delay={0.1}>
              <p>
                Artifex existiert, um genau das weiterzugeben. Nicht als Theorie,
                nicht als Workshop-Folie — sondern als erprobte Methode, die in
                der Praxis bewiesen ist. Von zwei Leuten die es selbst gemacht
                haben.
              </p>
            </FadeIn>

            <FadeIn delay={0.15}>
              <p className="font-medium text-slate-900">
                Nicht weil sie programmieren können. Sondern weil sie gelernt haben,
                AI so einzusetzen, dass es funktioniert.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-50 px-6 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <FadeIn>
            <p className="mb-8 text-lg text-slate-600">
              Die genauen Zahlen, die Infrastruktur und den AI-Workflow-Stack
              finden Sie in unserer Case Study.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="#/case-study"
                className="inline-block rounded-lg bg-indigo-500 px-6 py-3 font-medium text-white transition-colors hover:bg-indigo-600"
              >
                Zur Case Study
              </a>
              <a
                href="#/"
                onClick={() => setTimeout(() => document.getElementById("kontakt")?.scrollIntoView({ behavior: "smooth" }), 100)}
                className="inline-block rounded-lg border border-slate-300 px-6 py-3 font-medium text-slate-700 transition-colors hover:border-slate-400 hover:text-slate-900"
              >
                Gespräch vereinbaren
              </a>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
