import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto max-w-xl px-5 py-16">
      <h1 className="mb-4 text-6xl font-bold">404</h1>
      <p className="mb-6 text-xl text-[var(--muted)]">
        This page doesn&apos;t exist.
      </p>
      <Link
        href="/"
        className="inline-block text-[var(--accent)] no-underline hover:underline"
      >
        ← Back home
      </Link>
    </main>
  );
}
