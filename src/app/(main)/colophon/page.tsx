export default function ColophonPage() {
  return (
    <div className="grow-1 grid-home">
      <div className="col-start-3 col-span-2 pt-16">
        <h1 className="supertitle mb-8">Colophon</h1>
        <div className="text-base/6">
          <h2 className="heading mt-2 mb-2">Technical</h2>
          <p>The Next.js 16 app router powers this website, which is hosted on Vercel. React Server Components are exclusively used to keep the DX the way I like it: big blocks of plain ole HTML that point to well-architected CSS.</p>
          <p className="mt-4">Speaking of style, I'm always deploying the latest version of Tailwind CSS, with a custom file of preset classes, to avoid the dreaded className soup. Check out the source of my Tailwind styleguide on GitHub to see how to DIY.</p>
          <p className="mt-4">Vercel is wonderful: I am using their native analytics package, and rely on deployment alerts and observability to monitor my site's status.</p>
          <p className="mt-4">Framer Motion?</p>
          <h2 className="heading mt-8 mb-2">Typography</h2>
          <p>Max Miedenger's Neue Haas Grotesk (Display & Text) served by Adobe Fonts. This typeface has exceptional kerning, so I don't have to much around with letter spacing. It also gives me the Swiss modernist Massimo Vignelli vibe that I'm going for.</p>
          <p className="mt-4">I use the heavier medium weight of Neue Haas Text in dark mode, because it helps the text render better.</p>
        </div>
      </div>
    </div>
  )
}