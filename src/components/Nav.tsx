import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300",
        scrolled ? "bg-white/90 shadow-sm backdrop-blur-md" : "bg-transparent"
      )}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#/" className="text-lg font-bold tracking-tight text-slate-900">
          Artifex
        </a>

        <div className="flex items-center gap-6">
          <a
            href="#/story"
            className="hidden text-sm text-slate-600 transition-colors hover:text-slate-900 sm:inline"
          >
            Unsere Geschichte
          </a>
          <a
            href="#/case-study"
            className="hidden text-sm text-slate-600 transition-colors hover:text-slate-900 sm:inline"
          >
            Case Study
          </a>
          <a
            href="#/faq"
            className="hidden text-sm text-slate-600 transition-colors hover:text-slate-900 sm:inline"
          >
            FAQ
          </a>
          <a
            href="#/"
            onClick={() => setTimeout(() => document.getElementById("kontakt")?.scrollIntoView({ behavior: "smooth" }), 100)}
            className="rounded-lg bg-indigo-500 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-indigo-600"
          >
            Gespräch vereinbaren
          </a>
        </div>
      </div>
    </nav>
  );
}
