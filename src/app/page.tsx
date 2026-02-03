import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";

export default function Home() {
  return (
    <main className="mx-auto max-w-xl px-5 py-12 sm:py-16">
      <header className="mb-6 flex items-start justify-between gap-4">
        <div>
          <h1 className="mb-1 text-xl sm:text-2xl font-bold">Ojasava Paras</h1>
          <p className="text-[var(--muted)] text-sm sm:text-base">Software Engineer based in New York</p>
        </div>
        <ThemeToggle />
      </header>

      <nav className="mb-8 sm:mb-10 flex gap-6 text-base font-medium">
        <Link href="/resume" className="group relative text-[var(--accent)] no-underline">
          Resume
          <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-[var(--accent)] transition-all duration-300 group-hover:w-full"></span>
        </Link>
        <Link href="/projects" className="group relative text-[var(--accent)] no-underline">
          Projects
          <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-[var(--accent)] transition-all duration-300 group-hover:w-full"></span>
        </Link>
        <Link href="/research" className="group relative text-[var(--accent)] no-underline">
          Research
          <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-[var(--accent)] transition-all duration-300 group-hover:w-full"></span>
        </Link>
        <Link href="/pitch" className="group relative text-[var(--accent)] no-underline">
          Pitch
          <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-[var(--accent)] transition-all duration-300 group-hover:w-full"></span>
        </Link>
      </nav>

      <div className="mb-8 sm:mb-10 space-y-4 text-[15px] sm:text-base">
        <p>
          Currently at <a href="https://audible.com">Audible</a> (Amazon) since 2022, I&apos;m part of the Consumer Domain working on ACORN, the team responsible for Audible&apos;s cart and returns infrastructure. These services are foundational to Audible&apos;s marketplace, handling customer purchases and returns at global scale.
        </p>
        <p>
          Previously, I modernized Audible&apos;s QA infrastructure, built microservices at <a href="https://zyyo.com">Zyyo</a> for portfolio dashboards, and developed sentiment analysis applications at <a href="https://mymoodbit.com">Moodbit</a> using AWS SageMaker.
        </p>
        <p>
          I hold an MS in Computer Science from <a href="https://nyu.edu">NYU</a>, where I focused on deep learning and computer vision.
        </p>
        <p className="text-[var(--muted)]">
          What drives me: Building systems that scale, optimizing performance, and tackling complex distributed systems challenges. Always interested in conversations about infrastructure, ML applications, or hard technical problems. Outside of work, you&apos;ll find me running around NYC, playing soccer, capturing moments through photography, enjoying live music, or exploring art museums and libraries.
        </p>
      </div>

      <footer className="flex flex-wrap gap-x-5 gap-y-2 text-[14px] sm:text-[15px] text-[var(--muted)]">
        <a href="mailto:ojasavaparas@gmail.com" className="hover:text-[var(--foreground)]">Email</a>
        <a href="https://www.linkedin.com/in/ojasavaparas" className="hover:text-[var(--foreground)]">LinkedIn</a>
        <a href="https://github.com/ojasavaparas" className="hover:text-[var(--foreground)]">GitHub</a>
      </footer>
    </main>
  );
}
