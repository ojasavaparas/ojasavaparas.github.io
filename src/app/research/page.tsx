import Link from "next/link";

const research = [
  {
    title: "Deep Bridge Bidding",
    description: "An open-source implementation of an automated bidding system for contract bridge using deep learning. Implements ENN and PNN models based on research by Rong et al.",
    tags: ["Deep Learning", "Neural Networks", "Python", "Game AI"],
    url: "https://github.com/ojasavaparas/Deep-Bridge-Bidding",
  },
  {
    title: "MNIST Digit Recognizer",
    description: "A machine learning project focused on recognizing handwritten digits using the MNIST dataset.",
    tags: ["Machine Learning", "Python", "TensorFlow"],
    url: "https://github.com/ojasavaparas/Projects/tree/master/MNIST%20digit%20recognizer",
  },
  {
    title: "Music Generator using MIDI",
    description: "An application that generates musical compositions in MIDI format, demonstrating creative AI applications.",
    tags: ["Deep Learning", "MIDI", "Python"],
    url: "https://github.com/ojasavaparas/Projects/tree/master/music%20generator",
  },
  {
    title: "CNN Models Architecture",
    description: "A collection of convolutional neural network implementations showcasing various deep learning architectures.",
    tags: ["CNN", "PyTorch", "Deep Learning"],
    url: "https://github.com/ojasavaparas/Projects/tree/master/cnn_models",
  },
];

export default function Research() {
  return (
    <main className="mx-auto max-w-xl px-5 py-12 sm:py-16">
      <nav className="mb-6 sm:mb-8 flex flex-wrap gap-4 sm:gap-6 text-base font-medium">
        <Link href="/" className="text-[var(--muted)] no-underline hover:text-[var(--foreground)]">Home</Link>
        <Link href="/resume" className="text-[var(--accent)] no-underline hover:underline">Resume</Link>
        <Link href="/projects" className="text-[var(--accent)] no-underline hover:underline">Projects</Link>
        <span className="text-[var(--foreground)]">Research</span>
        <Link href="/pitch" className="text-[var(--accent)] no-underline hover:underline">Pitch</Link>
      </nav>

      <h1 className="mb-2 text-xl sm:text-2xl font-bold">Research</h1>
      <p className="mb-6 sm:mb-8 text-[var(--muted)] text-sm sm:text-base">Machine learning and deep learning projects.</p>

      <ul className="space-y-5 sm:space-y-6">
        {research.map((project) => (
          <li key={project.title}>
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block rounded-lg border border-[var(--muted)]/20 p-4 sm:p-5 no-underline hover:no-underline"
            >
              <h3 className="text-base sm:text-lg font-semibold text-[var(--foreground)] group-hover:underline underline-offset-4 decoration-[var(--foreground)]">
                {project.title}
                <span className="ml-2 text-[var(--muted)] text-sm">↗</span>
              </h3>
              <p className="mt-2 text-[var(--muted)] text-sm sm:text-base">{project.description}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="rounded-full bg-[var(--foreground)]/10 px-2.5 py-0.5 text-xs font-medium text-[var(--muted)]">
                    {tag}
                  </span>
                ))}
              </div>
            </a>
          </li>
        ))}
      </ul>
    </main>
  );
}
