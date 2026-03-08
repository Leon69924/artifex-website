import { Button } from "@/components/Button";

export function Hero() {
  return (
    <section className="flex min-h-screen items-center justify-center px-6">
      <div className="max-w-3xl text-center">
        <h1 className="text-5xl font-bold leading-tight tracking-tight text-slate-900 md:text-7xl">
          Ihr Dev-Team nutzt AI.
          <br />
          Aber nutzt es AI richtig?
        </h1>
        <p className="mt-8 text-lg text-slate-500 md:text-xl">
          <span className="font-mono">3.1M</span> Lines of Code{" · "}
          <span className="font-mono">14</span> Monate{" · "}
          <span className="font-mono">2</span> Personen{" · "}
          In Produktion.
        </p>
        <div className="mt-10">
          <Button
            onClick={() =>
              document
                .getElementById("kontakt")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Kostenloses Erstgespräch →
          </Button>
        </div>
      </div>
    </section>
  );
}
