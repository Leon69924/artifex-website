import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

export function StatCounter({
  target,
  label,
  suffix = "",
  duration = 2000,
}: {
  target: number;
  label: string;
  suffix?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const start = performance.now();
    const step = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [isInView, target, duration]);

  return (
    <div ref={ref} className="text-center">
      <div className="font-mono text-5xl font-bold text-white md:text-6xl">
        {count.toLocaleString("de-DE")}
        {suffix}
      </div>
      <div className="mt-2 text-sm uppercase tracking-widest text-slate-400">
        {label}
      </div>
    </div>
  );
}
