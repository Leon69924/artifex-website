import { useState } from "react";
import { FadeIn } from "@/components/FadeIn";
import { Button } from "@/components/Button";
import { Loader2, CheckCircle } from "lucide-react";

type FormState = "idle" | "submitting" | "success" | "error";

export function Contact() {
  const [state, setState] = useState<FormState>("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setState("submitting");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("https://formspree.io/f/PLACEHOLDER", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setState("success");
        form.reset();
      } else {
        setState("error");
      }
    } catch {
      setState("error");
    }
  };

  return (
    <section id="kontakt" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-lg">
        <FadeIn>
          <h2 className="text-center text-4xl font-bold text-slate-900 md:text-5xl">
            Lassen Sie uns reden.
          </h2>
        </FadeIn>

        {state === "success" ? (
          <FadeIn>
            <div className="mt-12 text-center">
              <CheckCircle className="mx-auto h-12 w-12 text-green-500" />
              <p className="mt-4 text-lg text-slate-600">
                Vielen Dank. Wir melden uns innerhalb von 24 Stunden.
              </p>
            </div>
          </FadeIn>
        ) : (
          <FadeIn delay={0.1}>
            <form onSubmit={handleSubmit} className="mt-12 space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-slate-700"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="mt-1 w-full rounded-lg border border-slate-300 px-4 py-3 text-base transition-colors focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-slate-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="mt-1 w-full rounded-lg border border-slate-300 px-4 py-3 text-base transition-colors focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-slate-700"
                >
                  Nachricht
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="mt-1 w-full rounded-lg border border-slate-300 px-4 py-3 text-base transition-colors focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                />
              </div>

              {state === "error" && (
                <p className="text-sm text-red-600">
                  Etwas ist schiefgelaufen. Bitte versuchen Sie es erneut.
                </p>
              )}

              <Button
                type="submit"
                disabled={state === "submitting"}
                className="w-full"
              >
                {state === "submitting" ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Senden...
                  </>
                ) : (
                  "Nachricht senden →"
                )}
              </Button>
            </form>

            <p className="mt-8 text-center text-sm text-slate-500">
              Oder direkt:{" "}
              <a
                href="mailto:kontakt@tessera-cloud.com"
                className="text-indigo-500 hover:text-indigo-600"
              >
                kontakt@tessera-cloud.com
              </a>
            </p>
          </FadeIn>
        )}
      </div>
    </section>
  );
}
