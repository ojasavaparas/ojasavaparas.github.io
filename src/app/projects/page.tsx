import Link from "next/link";

const projects = [
  {
    title: "Inter-AWS Region Migration",
    description: "Led migration of core Audible services (Cart, Returns, Orders) from Dublin to Spain and Frankfurt regions. Designed CDK infrastructure with networking, VPC, DynamoDB, ECS Fargate, and monitoring stacks. Successfully expanded European reach and distributed traffic across two new regions.",
    tags: ["AWS", "CDK", "CloudFormation", "DynamoDB", "ECS"],
    url: "https://docs.google.com/document/d/1D6KJkHM1zQCEL6Tg--7BZmN3457bYUUS5S26Y3qtDHk/edit?usp=sharing",
  },
  {
    title: "NAWS Infrastructure & Prime Day Testing",
    description: "Migrated services from legacy MAWS to modern NAWS architecture for Prime Day load testing. Built reusable infrastructure skeleton adopted by 20+ teams and 35+ services across Amazon. Reduced onboarding time by 75% and enabled successful Prime Day with minimal risk.",
    tags: ["AWS", "CloudFormation", "Performance Testing", "Infrastructure"],
    url: "https://docs.google.com/document/d/1Y6IgBc5CA2QRDWv-ykgTazIFRNblzUQPpgMPCTlu2xs/edit?usp=sharing",
  },
  {
    title: "Fortify Security Dashboards",
    description: "Built Fortify integration for TypeScript services and created org-wide security dashboards on QuickSight. Developed custom scanning pipeline with report generation and S3 data storage. Now used by 95% of Audible services for tracking risks and vulnerabilities.",
    tags: ["TypeScript", "AWS QuickSight", "Security", "CI/CD"],
    url: "https://docs.google.com/document/d/1Ds0SnK2_gMCJnP7N5L61P762NhNUChFqN0f8_hZOR-U/edit?usp=sharing",
  },
];

export default function Projects() {
  return (
    <main className="mx-auto max-w-xl px-5 py-12 sm:py-16">
      <nav className="mb-6 sm:mb-8 flex flex-wrap gap-4 sm:gap-6 text-base font-medium">
        <Link href="/" className="text-[var(--muted)] no-underline hover:text-[var(--foreground)]">Home</Link>
        <Link href="/resume" className="text-[var(--accent)] no-underline hover:underline">Resume</Link>
        <span className="text-[var(--foreground)]">Projects</span>
        <Link href="/research" className="text-[var(--accent)] no-underline hover:underline">Research</Link>
        <Link href="/pitch" className="text-[var(--accent)] no-underline hover:underline">Pitch</Link>
      </nav>

      <h1 className="mb-2 text-xl sm:text-2xl font-bold">Projects</h1>
      <p className="mb-6 sm:mb-8 text-[var(--muted)] text-sm sm:text-base">Notable work from my time at Audible/Amazon.</p>

      <ul className="space-y-5 sm:space-y-6">
        {projects.map((project) => (
          <li key={project.title}>
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block rounded-lg border border-[var(--muted)]/20 p-4 sm:p-5 no-underline hover:no-underline"
            >
              <h3 className="text-base sm:text-lg font-semibold text-[var(--foreground)] underline-offset-4 decoration-[var(--foreground)] group-hover:underline">
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
