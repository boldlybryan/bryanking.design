export default function ColophonPage() {
  return (
    <div className="grow-1 grid-home">
      <div className="col-start-3 col-span-2 pt-16">
        <h1 className="supertitle mb-2">Colophon</h1>
        <p className="opacity-75">About this website</p>
        <div className="">
          <p>Next.js 16.0.7</p>
          <p>Tailwind.css 4.1</p>
          <p>Framer Motion</p>
          <p>Vercel</p>
          <h2 className="text-xl font-display mt-4 mb-2">Typography</h2>
          <p>Max Miedenger's Neue Haas Grotesk (Display & Text) served by Adobe Fonts. This typeface has exceptional kerning, so I don't have to much around with letter spacing. It also gives me the Swiss modernist Massimo Vignelli vibe that I'm going for.</p>
          <p>I use the heavier medium weight of Neue Haas Text in dark mode, because it helps the text render better.</p>
        </div>
      </div>
    </div>
  )
}