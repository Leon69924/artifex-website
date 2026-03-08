import { StatCounter } from "@/components/StatCounter";
import { FadeIn } from "@/components/FadeIn";

const stats = [
  { target: 3133249, label: "Lines of Code", duration: 2500 },
  { target: 10323, label: "Commits", duration: 2000 },
  { target: 50, label: "Module", suffix: "+", duration: 1500 },
  { target: 80, label: "API Endpoints", suffix: "+", duration: 1500 },
  { target: 9, label: "K8s Nodes", duration: 1000 },
  { target: 2, label: "Datacenter", duration: 800 },
];

export function Proof() {
  return (
    <section className="bg-slate-900 px-6 py-24 md:py-32">
      <div className="mx-auto max-w-5xl">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-3 md:gap-16">
          {stats.map((stat) => (
            <StatCounter key={stat.label} {...stat} />
          ))}
        </div>

        <FadeIn delay={0.3}>
          <p className="mt-16 text-center text-lg italic text-slate-300">
            In Produktion bei der Wilhelm Schweizer Zinnmanufaktur — gegründet
            1796.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
