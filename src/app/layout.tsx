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
        {process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID && (
          <script defer src="https://cloud.umami.is/script.js" data-website-id={process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID}></script>
        )}
        <link rel="icon" href="/icon.png" type="image/png" />
        <link rel="preconnect" href="https://github.io/" />
        <link rel="stylesheet" href="https://vetrivelcsamy.github.io/cheltenham-classic/cheltenhamclassic.css" />
        <script dangerouslySetInnerHTML={{ __html: `
          document.fonts.ready.then(function() {
            document.body.classList.add('fonts-loaded');
          });
        `}} />
      </head>
      <body
        className="antialiased h-screen overflow-hidden flex flex-col"
        suppressHydrationWarning
      >
        <PatternBorders position="top" />
        <div className="flex-1 overflow-y-scroll flex flex-col">
          <Nav />
          {children}
        </div>
        <PatternBorders position="bottom" />
      </body>
    </html>
  );
}
