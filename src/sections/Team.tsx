import { FadeIn } from "@/components/FadeIn";

const members = [
  {
    name: "Leon Tropp",
    initial: "L",
    tags: "VWL · IT-Infrastruktur · AI Orchestration",
  },
  {
    name: "Joan Arau",
    initial: "J",
    tags: "CEO · Product Owner · AI Builder",
  },
];

export function Team() {
  return (
    <section className="bg-slate-50 px-6 py-24 md:py-32">
      <div className="mx-auto max-w-4xl">
        <div className="grid gap-12 md:grid-cols-2">
          {members.map((member, i) => (
            <FadeIn key={member.name} delay={i * 0.1}>
              <div className="text-center">
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-indigo-500 text-2xl font-bold text-white">
                  {member.initial}
                </div>
                <h3 className="mt-4 text-2xl font-bold text-slate-900">
                  {member.name}
                </h3>
                <p className="mt-2 text-sm text-slate-500">{member.tags}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.3}>
          <p className="mt-12 text-center text-xl text-slate-700">
            Zusammen: Ein{" "}
            <span className="font-mono font-semibold">3M LOC</span> ERP in 14
            Monaten gebaut.
            <br />
            Nicht weil wir coden können — sondern weil wir gelernt haben, AI
            richtig einzusetzen.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
