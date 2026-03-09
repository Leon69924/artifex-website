import { FadeIn } from "@/components/FadeIn";

const codeStats = [
  { label: "Python", lines: "948.953" },
  { label: "HTML", lines: "804.514" },
  { label: "TypeScript", lines: "605.733" },
  { label: "CSS", lines: "211.000+" },
  { label: "Sonstige", lines: "563.000+" },
];

const projectStats = [
  { label: "Lines of Code (cloc)", value: "3.133.249" },
  { label: "Dateien", value: "12.811" },
  { label: "Commits (14 Monate)", value: "10.323" },
  { label: "Commits pro Tag", value: "~25" },
  { label: "Django Module", value: "50+" },
  { label: "API Endpoints", value: "80+" },
  { label: "Team-Größe", value: "2–3 Personen" },
  { label: "Status", value: "In Produktion" },
];

const infrastructure = [
  { name: "K3s Cluster", detail: "9 Nodes, 2 Datacenter (Nürnberg + Helsinki)" },
  { name: "ArgoCD", detail: "Git Push → automatisches Deployment" },
  { name: "TeamCity", detail: "CI/CD, Tests, Quality Gates, Image Builds" },
  { name: "CNPG PostgreSQL", detail: "Streaming Replication, Cross-DC Failover" },
  { name: "Prometheus + Grafana", detail: "Monitoring + Alerting" },
  { name: "Loki", detail: "Log-Aggregation" },
  { name: "Velero", detail: "Cluster Backups" },
  { name: "Cloudflare Tunnels", detail: "Zero-Trust Access" },
  { name: "Tailscale", detail: "VPN für alle Nodes" },
  { name: "Hetzner S3", detail: "Object Storage" },
  { name: "Dev Pods", detail: "Remote-Entwicklung mit 2.5ms Latenz" },
];

const aiStack = [
  { name: "Claude Code + CLAUDE.md", detail: "AI kennt gesamte Projekt-Architektur" },
  { name: "KB-Context Hook", detail: "40+ Patterns — automatische Knowledge-Base-Injektion" },
  { name: "Quality Gate Hooks", detail: "Pre-Commit Linting, Security, Tests" },
  { name: "Hookify Rules", detail: "Verhindert unsichere/fehlerhafte AI-Aktionen" },
  { name: "Multi-Agent Workflows", detail: "Mehrere AIs arbeiten parallel an Features" },
  { name: "MCP-Server", detail: "Enterprise-Tools (Sophos, Veeam, TeamCity) direkt in AI" },
  { name: "Custom Skills (18+)", detail: "Wiederverwendbare Workflows für häufige Aufgaben" },
];

const timeline = [
  { date: "Jan 2025", event: "Projektstart — erste Django-Module" },
  { date: "Mär 2025", event: "Kubernetes Cluster aufgebaut" },
  { date: "Jun 2025", event: "Mobile App (Expo) gestartet" },
  { date: "Sep 2025", event: "Production Deployment bei WSZ" },
  { date: "Dez 2025", event: "Multi-DC Failover, 50+ Module" },
  { date: "Mär 2026", event: "3.13M LOC, vollständige Infrastruktur" },
];

export function CaseStudy() {
  return (
    <main className="pt-24">
      {/* Hero */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <FadeIn>
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-indigo-500">
              Case Study
            </p>
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              3,13 Millionen Zeilen Code.
              <br />
              Null Programmierer.
            </h1>
            <p className="max-w-2xl text-lg text-slate-600">
              Wie zwei Nicht-Entwickler in 14 Monaten ein vollständiges ERP-System
              mit 50+ Modulen gebaut haben — in Produktion bei der Wilhelm Schweizer
              Zinnmanufaktur, gegründet 1796.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Project Stats */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <FadeIn>
            <h2 className="mb-10 text-2xl font-bold text-slate-900">
              Die harten Zahlen
            </h2>
          </FadeIn>

          <div className="grid gap-6 sm:grid-cols-2">
            {projectStats.map((stat, i) => (
              <FadeIn key={stat.label} delay={i * 0.05}>
                <div className="flex items-baseline justify-between rounded-lg border border-slate-200 bg-white px-5 py-4">
                  <span className="text-sm text-slate-600">{stat.label}</span>
                  <span className="font-mono text-lg font-semibold text-slate-900">
                    {stat.value}
                  </span>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.3}>
            <h3 className="mb-4 mt-12 text-lg font-semibold text-slate-900">
              Code-Verteilung nach Sprache
            </h3>
            <div className="space-y-3">
              {codeStats.map((lang) => {
                const num = parseInt(lang.lines.replace(/\D/g, ""));
                const pct = Math.round((num / 3133249) * 100);
                return (
                  <div key={lang.label}>
                    <div className="mb-1 flex justify-between text-sm">
                      <span className="font-medium text-slate-700">{lang.label}</span>
                      <span className="font-mono text-slate-500">{lang.lines}</span>
                    </div>
                    <div className="h-2 rounded-full bg-slate-200">
                      <div
                        className="h-2 rounded-full bg-indigo-500"
                        style={{ width: `${pct}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Timeline */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <FadeIn>
            <h2 className="mb-10 text-2xl font-bold text-slate-900">
              Timeline: Januar 2025 → März 2026
            </h2>
          </FadeIn>

          <div className="relative border-l-2 border-indigo-200 pl-8">
            {timeline.map((item, i) => (
              <FadeIn key={item.date} delay={i * 0.08}>
                <div className="relative mb-8 last:mb-0">
                  <div className="absolute -left-[2.55rem] top-1 h-4 w-4 rounded-full border-2 border-indigo-500 bg-white" />
                  <p className="text-sm font-semibold text-indigo-500">{item.date}</p>
                  <p className="mt-1 text-slate-700">{item.event}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Infrastructure */}
      <section className="bg-slate-900 px-6 py-20 text-white">
        <div className="mx-auto max-w-4xl">
          <FadeIn>
            <h2 className="mb-3 text-2xl font-bold">
              Die Infrastruktur
            </h2>
            <p className="mb-10 text-slate-400">
              Auch komplett mit AI aufgebaut — kein DevOps-Team.
            </p>
          </FadeIn>

          <div className="grid gap-4 sm:grid-cols-2">
            {infrastructure.map((item, i) => (
              <FadeIn key={item.name} delay={i * 0.04}>
                <div className="rounded-lg border border-slate-700 bg-slate-800 px-5 py-4">
                  <p className="font-mono text-sm font-semibold text-indigo-400">
                    {item.name}
                  </p>
                  <p className="mt-1 text-sm text-slate-400">{item.detail}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* AI Workflow Stack */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <FadeIn>
            <h2 className="mb-3 text-2xl font-bold text-slate-900">
              AI-Workflow-Stack
            </h2>
            <p className="mb-10 text-slate-600">
              Eigene Entwicklung — so orchestrieren wir AI für Production-Software.
            </p>
          </FadeIn>

          <div className="space-y-4">
            {aiStack.map((item, i) => (
              <FadeIn key={item.name} delay={i * 0.06}>
                <div className="rounded-lg border border-slate-200 px-5 py-4">
                  <p className="font-mono text-sm font-semibold text-slate-900">
                    {item.name}
                  </p>
                  <p className="mt-1 text-sm text-slate-600">{item.detail}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-50 px-6 py-20">
        <div className="mx-auto max-w-4xl text-center">
          <FadeIn>
            <h2 className="mb-4 text-2xl font-bold text-slate-900">
              Interesse geweckt?
            </h2>
            <p className="mb-8 text-slate-600">
              Wir zeigen Ihnen gerne wie wir das gemacht haben — und wie Ihr Unternehmen
              AI genauso produktiv einsetzen kann.
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
