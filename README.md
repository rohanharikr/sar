# Wedding Website

A beautiful, animated wedding website built with Next.js and Tailwind CSS.

I'm Rohan, and I created this for my brother Rahul and his wife Sandra's wedding. Feel free to fork it and make it your own.

## Features

- Watercolor paint-reveal hero animation (GSAP + Canvas)
- Countdown timer with rolling digits
- Animated Kerala-style gold border pattern
- Event timeline with draw-in animations
- Food menu modals for each event
- Calendar integration (Apple Calendar + Google Calendar)
- FAQ page with travel, accommodation, and dress code info
- Confetti celebration when the countdown hits zero
- Fully responsive

## Quick Start

```bash
git clone https://github.com/rohanharikr/wedding-website.git
cd wedding-website
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see it.

## Customization

### Content to update

| What | File | Look for |
|---|---|---|
| Names | `src/app/page.tsx`, `wedding/page.tsx`, `layout.tsx` | "Rahul", "Sandra" |
| Wedding date/time | `src/app/page.tsx` | `TARGET` constant |
| Ceremony time | `src/app/wedding/page.tsx` | "between 11:57am and 12:19pm" |
| Event dates & times | `src/app/events/page.tsx` | "1st May", "3rd May", time strings |
| Venue name & location | `src/app/wedding/page.tsx` | "Heartland Convention Center" |
| Google Maps link | `src/app/wedding/page.tsx` | `maps.app.goo.gl` |
| Calendar links | `src/app/wedding/page.tsx` | ICS data URI and Google Calendar URL |
| Contact info | `src/app/faq/page.tsx` | Email, phone number, WhatsApp link |
| FAQ content | `src/app/faq/page.tsx` | Hotels, travel, dress code, etc. |
| Food menus | `src/app/events/page.tsx` | Menu modal sections |
| OG metadata | `src/app/layout.tsx` | `metadata` export |
| Theme colors | `src/app/pattern-borders.tsx`, `page.tsx` | `#F7CE76`, `#BE8E2D`, `#B14328` |

### Images to replace

All images live in `public/`:

| File | Used for |
|---|---|
| `main.png` | Hero image (watercolor reveal animation) |
| `plain-main.png` | OpenGraph / social preview image |
| `rings.png` | Ring illustration on wedding page |
| `location.png` | Venue map screenshot |
| `wedding-card.pdf` | Downloadable wedding invitation |
| `sangeeth.png` | Sangeeth event icon |
| `muhurtham.png` | Muhurtham event icon |
| `lunch.png` | Lunch event icon |
| `photos.png` | Photos event icon |
| `reception.png` | Reception event icon |
| `first-dinner.png` | Day 1 dinner event icon |
| `second-dinner.png` | Day 2 dinner event icon |

Replace `src/app/icon.png` with your own favicon.

### Font

The site uses [Cheltenham Classic](https://vetrivelcsamy.github.io/cheltenham-classic/) loaded from an external CDN. You can swap it out in `src/app/layout.tsx`.

### Analytics

Add your own analytics script in `src/app/layout.tsx` where indicated by the comment.

## Deploy

Deploy on [Vercel](https://vercel.com) (recommended), Netlify, or any Node.js host.

## Tech Stack

- Next.js (App Router)
- React
- Tailwind CSS
- GSAP (animations)
- canvas-confetti

## Support

If you found this website template helpful, please consider supporting Rahul & Sandra as they begin their new journey together.

[![Buy Me A Coffee](https://img.shields.io/badge/Buy%20Me%20A%20Coffee-support-yellow?style=flat&logo=buy-me-a-coffee)](https://buymeacoffee.com/uw1ex9o)

## License

MIT
