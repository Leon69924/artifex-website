export function ServiceCard({
  title,
  duration,
  price,
  description,
}: {
  title: string;
  duration: string;
  price: string;
  description: string;
}) {
  return (
    <div className="rounded-xl border border-slate-200 p-8 transition-shadow duration-300 hover:shadow-lg">
      <p className="text-sm font-medium uppercase tracking-wide text-slate-500">
        {duration}
      </p>
      <h3 className="mt-2 text-2xl font-bold text-slate-900">{title}</h3>
      <p className="mt-3 font-mono text-3xl font-bold text-indigo-600">
        {price}
      </p>
      <p className="mt-4 text-base leading-relaxed text-slate-600">
        {description}
      </p>
    </div>
  );
}
