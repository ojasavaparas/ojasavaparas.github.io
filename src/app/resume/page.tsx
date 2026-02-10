import Link from "next/link";

export default function Resume() {
  return (
    <main className="mx-auto max-w-4xl px-5 py-12 sm:py-16">
      <nav className="mb-6 flex flex-wrap gap-4 sm:gap-6 text-base font-medium">
        <Link href="/" className="text-[var(--muted)] no-underline hover:text-[var(--foreground)]">Home</Link>
        <span className="text-[var(--foreground)]">Resume</span>
        <Link href="/projects" className="text-[var(--accent)] no-underline hover:underline">Projects</Link>
        <Link href="/research" className="text-[var(--accent)] no-underline hover:underline">Research</Link>
        <Link href="/pitch" className="text-[var(--accent)] no-underline hover:underline">Pitch</Link>
      </nav>

      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-xl sm:text-2xl font-bold">Resume</h1>
        <a
          href="/resume.pdf"
          download
          className="text-sm text-[var(--accent)] no-underline hover:underline"
        >
          Download PDF
        </a>
      </div>

      <div className="w-full aspect-[8.5/11] min-h-[600px] sm:min-h-[800px]">
        <iframe
          src="/resume.pdf"
          className="w-full h-full rounded-lg border border-[var(--muted)]/20"
          title="Resume"
        />
      </div>
      <p className="mt-3 text-sm text-[var(--muted)]">
        Download PDF for clickable links
      </p>
    </main>
  );
}
