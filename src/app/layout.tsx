import type { Metadata } from "next";
import "./globals.css";
import { PatternBorders } from "./pattern-borders";
import { Nav } from "./nav";

export const metadata: Metadata = {
  title: "Rahul & Sandra",
  description: "The wedding of Rahul & Sandra",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://cloud.umami.is/script.js" data-website-id="ddb46c23-85be-4499-9311-d67e40db88bf"></script>
        <link rel="preconnect" href="https://github.io/" />
        <link rel="stylesheet" href="https://vetrivelcsamy.github.io/cheltenham-classic/cheltenhamclassic.css" />
      </head>
      <body
        className="antialiased h-screen overflow-hidden flex flex-col"
      >
        <PatternBorders position="top" />
        <div className="flex-1 overflow-y-auto flex flex-col">
          <Nav />
          {children}
        </div>
        <PatternBorders position="bottom" />
      </body>
    </html>
  );
}
