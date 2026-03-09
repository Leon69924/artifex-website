export function Impressum() {
  return (
    <main className="pt-24">
      <section className="px-6 py-20">
        <div className="mx-auto max-w-3xl">
          <h1 className="mb-10 text-3xl font-bold text-slate-900">Impressum</h1>

          <div className="space-y-8 text-slate-700">
            <div>
              <h2 className="mb-2 text-lg font-semibold text-slate-900">
                Angaben gemäß § 5 TMG
              </h2>
              <p>Leon Tropp</p>
              <p>Artifex — AI Consulting & Enablement</p>
              <p>Dießen am Ammersee, Bayern</p>
            </div>

            <div>
              <h2 className="mb-2 text-lg font-semibold text-slate-900">Kontakt</h2>
              <p>
                E-Mail:{" "}
                <a
                  href="mailto:kontakt@tessera-cloud.com"
                  className="text-indigo-500 hover:text-indigo-600"
                >
                  kontakt@tessera-cloud.com
                </a>
              </p>
            </div>

            <div>
              <h2 className="mb-2 text-lg font-semibold text-slate-900">
                Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
              </h2>
              <p>Leon Tropp</p>
              <p>Dießen am Ammersee, Bayern</p>
            </div>

            <div>
              <h2 className="mb-2 text-lg font-semibold text-slate-900">
                Haftungsausschluss
              </h2>
              <h3 className="mb-1 font-medium text-slate-900">Haftung für Inhalte</h3>
              <p className="mb-4 text-sm leading-relaxed">
                Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die
                Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch
                keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG
                für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen
                verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch
                nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu
                überwachen.
              </p>

              <h3 className="mb-1 font-medium text-slate-900">Haftung für Links</h3>
              <p className="text-sm leading-relaxed">
                Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren
                Inhalte wir keinen Einfluss haben. Für die Inhalte der verlinkten Seiten
                ist stets der jeweilige Anbieter oder Betreiber verantwortlich. Eine
                permanente inhaltliche Kontrolle der verlinkten Seiten ist ohne konkrete
                Anhaltspunkte einer Rechtsverletzung nicht zumutbar.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
