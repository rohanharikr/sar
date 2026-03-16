import type { Metadata } from "next";
import "./globals.css";
import { PatternBorders } from "./pattern-borders";
import { Nav } from "./nav";

// Update with your names, date, venue, and OG image
export const metadata: Metadata = {
  title: "Rahul & Sandra",
  description: "Join us on our wedding on 3rd May 2026 at Chalakudy, Kerala.",
  openGraph: {
    images: ["/plain-main.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Optional: add your analytics script here */}
        <link rel="icon" href="/icon.png" type="image/png" />
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
