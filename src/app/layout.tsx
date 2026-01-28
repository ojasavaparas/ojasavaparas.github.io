import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ojasava Paras",
  description: "Software Engineer based in New York. Building scalable infrastructure and cloud solutions. Previously at Audible/Amazon.",
  openGraph: {
    title: "Ojasava Paras | Software Engineer",
    description: "Software Engineer based in New York. Building scalable infrastructure and cloud solutions.",
    url: "https://ojasavaparas.com",
    siteName: "Ojasava Paras",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ojasava Paras | Software Engineer",
    description: "Software Engineer based in New York. Building scalable infrastructure and cloud solutions.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                const theme = localStorage.getItem('theme');
                if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.documentElement.classList.add('dark');
                }
              })();
            `,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
