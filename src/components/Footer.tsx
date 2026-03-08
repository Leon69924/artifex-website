export function Footer() {
  return (
    <footer className="border-t border-slate-200 px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-4 gap-y-2 text-sm text-slate-500">
        <span>© 2026 Artifex</span>
        <span>·</span>
        <span>consulting.tessera-cloud.com</span>
        <span>·</span>
        <a href="#" className="hover:text-slate-700">
          Impressum
        </a>
        <span>·</span>
        <a href="#" className="hover:text-slate-700">
          Datenschutz
        </a>
      </div>
    </footer>
  );
}
