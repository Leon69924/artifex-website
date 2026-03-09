export function Datenschutz() {
  return (
    <main className="pt-24">
      <section className="px-6 py-20">
        <div className="mx-auto max-w-3xl">
          <h1 className="mb-10 text-3xl font-bold text-slate-900">
            Datenschutzerklärung
          </h1>

          <div className="space-y-8 text-sm leading-relaxed text-slate-700">
            <div>
              <h2 className="mb-2 text-lg font-semibold text-slate-900">
                1. Verantwortlicher
              </h2>
              <p>
                Leon Tropp
                <br />
                Artifex — AI Consulting & Enablement
                <br />
                Dießen am Ammersee, Bayern
                <br />
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
                2. Hosting
              </h2>
              <p>
                Diese Website wird über Cloudflare Pages gehostet. Beim Aufruf der
                Website werden durch den Hosting-Anbieter automatisch Informationen
                erfasst (Server-Logfiles). Diese Daten werden nicht mit anderen
                Datenquellen zusammengeführt. Die Datenerfassung erfolgt auf Grundlage
                von Art. 6 Abs. 1 lit. f DSGVO.
              </p>
            </div>

            <div>
              <h2 className="mb-2 text-lg font-semibold text-slate-900">
                3. Keine Cookies, kein Tracking
              </h2>
              <p>
                Diese Website verwendet keine Cookies, kein Tracking und keine
                Analysedienste. Es werden keine personenbezogenen Daten zu
                Marketingzwecken erhoben oder an Dritte weitergegeben.
              </p>
            </div>

            <div>
              <h2 className="mb-2 text-lg font-semibold text-slate-900">
                4. Kontaktformular
              </h2>
              <p>
                Wenn Sie uns über das Kontaktformular kontaktieren, werden Ihre Angaben
                (Name, E-Mail, Nachricht) über den Dienst{" "}
                <a
                  href="https://formspree.io"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-500 hover:text-indigo-600"
                >
                  Formspree
                </a>{" "}
                verarbeitet. Formspree speichert die übermittelten Daten auf Servern in
                den USA. Weitere Informationen finden Sie in der{" "}
                <a
                  href="https://formspree.io/legal/privacy-policy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-500 hover:text-indigo-600"
                >
                  Datenschutzerklärung von Formspree
                </a>
                . Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO
                (vorvertragliche Maßnahmen) und Art. 6 Abs. 1 lit. f DSGVO (berechtigtes
                Interesse an der Beantwortung Ihrer Anfrage).
              </p>
            </div>

            <div>
              <h2 className="mb-2 text-lg font-semibold text-slate-900">
                5. Ihre Rechte
              </h2>
              <p>Sie haben das Recht auf:</p>
              <ul className="mt-2 list-inside list-disc space-y-1">
                <li>Auskunft über Ihre gespeicherten Daten (Art. 15 DSGVO)</li>
                <li>Berichtigung unrichtiger Daten (Art. 16 DSGVO)</li>
                <li>Löschung Ihrer Daten (Art. 17 DSGVO)</li>
                <li>Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
                <li>Datenübertragbarkeit (Art. 20 DSGVO)</li>
                <li>Widerspruch gegen die Verarbeitung (Art. 21 DSGVO)</li>
              </ul>
              <p className="mt-2">
                Zur Ausübung Ihrer Rechte wenden Sie sich bitte an{" "}
                <a
                  href="mailto:kontakt@tessera-cloud.com"
                  className="text-indigo-500 hover:text-indigo-600"
                >
                  kontakt@tessera-cloud.com
                </a>
                .
              </p>
            </div>

            <div>
              <h2 className="mb-2 text-lg font-semibold text-slate-900">
                6. Externe Schriftarten
              </h2>
              <p>
                Diese Website verwendet lokal eingebundene Schriftarten (Inter, JetBrains
                Mono). Es werden keine externen Requests an Google Fonts oder andere
                Font-CDNs gestellt.
              </p>
            </div>

            <div>
              <h2 className="mb-2 text-lg font-semibold text-slate-900">
                7. Änderungen
              </h2>
              <p>
                Wir behalten uns vor, diese Datenschutzerklärung anzupassen, um sie an
                geänderte Rechtslagen oder Änderungen des Dienstes anzupassen. Stand:
                März 2026.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
