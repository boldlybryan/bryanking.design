import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bryan King | Software Design & Engineering",
  description: "Bryan King is a software designer and engineer with over 10 years of experience building tools for marketing & advertising professionals. He's currently building out a next-gen agentic marketing platform at Navistone. Previously worked on analytics and AI creative tooling at Intuit MailChimp. Before that, I built the design systems and content authoring tools for Flagstar Bank’s marketing team.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/iyj7hae.css" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
