import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { ThemeToggle } from "@/components/theme-toggle";
import Header from "./components/Header";

export const metadata: Metadata = {
  title: "Bryan King | Software Design & Engineering",
  description: "Bryan King is a software designer and engineer with over 10 years of experience building tools for marketing & advertising professionals. He's currently building out a next-gen agentic marketing platform at Navistone. Previously worked on analytics and AI creative tooling at Intuit MailChimp. Before that, I built the design systems and content authoring tools for Flagstar Bank's marketing team.",
};

// Inline script to prevent flash of wrong theme
const themeScript = `
  (function() {
    const stored = localStorage.getItem('theme');
    const theme = stored && ['system', 'light', 'dark'].includes(stored) ? stored : 'system';
    document.documentElement.setAttribute('data-theme', theme);
  })();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <link rel="stylesheet" href="https://use.typekit.net/iyj7hae.css" />
      </head>
      <body className="antialiased">
        <main className="p-4 font-medium tracking-tight leading-5">
          <ThemeProvider>
            <div className="fixed top-4 right-4 z-50">
              <ThemeToggle />
            </div>
            <Header />
            {children}
          </ThemeProvider>
        </main>
      </body>
    </html>
  );
}
