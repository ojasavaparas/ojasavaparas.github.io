"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Pitch() {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showTip, setShowTip] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTip(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  if (isFullscreen) {
    return (
      <div className="fixed inset-0 z-50 bg-black">
        <button
          onClick={toggleFullscreen}
          className="absolute top-4 right-4 z-50 rounded-lg bg-white/10 px-4 py-2 text-white hover:bg-white/20 transition-colors"
        >
          Exit Fullscreen
        </button>
        <iframe
          src="https://docs.google.com/presentation/d/1VXbHO6oiKdUV87RS7WVlXsbz2FQD3CnhE-R-n3RKxuA/embed?start=false&loop=false&delayms=3000"
          className="w-full h-full"
          allowFullScreen
          title="SDE Pitch"
        />
      </div>
    );
  }

  return (
    <main className="mx-auto max-w-5xl px-5 py-12 sm:py-16">
      <div className="mb-6 flex items-center justify-between">
        <Link href="/" className="text-[var(--muted)] no-underline hover:text-[var(--foreground)]">
          ← Home
        </Link>
        <div className="flex items-center gap-4">
          {showTip && (
            <span className="text-sm text-[var(--muted)] animate-pulse">
              Use arrow keys to navigate
            </span>
          )}
          <button
            onClick={toggleFullscreen}
            className="text-sm text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
          >
            Fullscreen
          </button>
          <a
            href="https://docs.google.com/presentation/d/1VXbHO6oiKdUV87RS7WVlXsbz2FQD3CnhE-R-n3RKxuA/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-[var(--accent)] no-underline hover:underline"
          >
            Open in Google Slides ↗
          </a>
        </div>
      </div>

      <h1 className="mb-6 text-xl sm:text-2xl font-bold">SDE Pitch</h1>

      <div className="relative w-full aspect-[16/9]">
        <iframe
          src="https://docs.google.com/presentation/d/1VXbHO6oiKdUV87RS7WVlXsbz2FQD3CnhE-R-n3RKxuA/embed?start=false&loop=false&delayms=3000"
          className="w-full h-full rounded-lg border border-[var(--muted)]/20"
          allowFullScreen
          title="SDE Pitch"
        />
      </div>
    </main>
  );
}
