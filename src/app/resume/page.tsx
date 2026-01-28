import Link from "next/link";

export default function Resume() {
  return (
    <main className="mx-auto max-w-4xl px-5 py-12 sm:py-16">
      <div className="mb-6 flex items-center justify-between">
        <Link href="/" className="text-[var(--muted)] no-underline hover:text-[var(--foreground)]">
          ← Home
        </Link>
        <a
          href="/resume.pdf"
          download
          className="text-sm text-[var(--accent)] no-underline hover:underline"
        >
          Download PDF
        </a>
      </div>

      <h1 className="mb-6 text-xl sm:text-2xl font-bold">Resume</h1>

      <div className="w-full aspect-[8.5/11] min-h-[600px] sm:min-h-[800px]">
        <iframe
          src="/resume.pdf"
          className="w-full h-full rounded-lg border border-[var(--muted)]/20"
          title="Resume"
        />
      </div>
    </main>
  );
}
