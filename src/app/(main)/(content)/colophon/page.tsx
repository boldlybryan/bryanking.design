import Link from "next/link";

export default function ColophonPage() {
  return (
    <>
      <h1 className="supertitle mb-8">Colophon</h1>
      <div className="text-base/6">
        <h2 className="heading mt-2 mb-2">Technical</h2>
        <p>The Next.js 16 app router powers this website, which is hosted on Vercel. React Server Components are exclusively used to keep the DX the way I like it: big blocks of plain ole HTML that point to well-architected CSS.</p>
        <p className="mt-4">Speaking of style, I'm always deploying the latest version of Tailwind CSS, with a custom file of preset classes, to avoid the dreaded className soup. Check out the source of <Link href="#" className="underline">my Tailwind styleguide on GitHub</Link> to see how to do-it-yourself.</p>
        <p className="mt-4">I must admit: the idea of using React and Tailwind for a personal project made me vomit as recent as a few months ago. My formative years coincided with the golden age of web standards. HTML is my second language, and I've built Tailwind-esque libraries of my own at least a few times. These tools work against the grain of my experience, and although they're meant to speed up development, I have historically found them to slow me down.</p>
        <p className="mt-4">I recently gave Next.js a go, and find it to be the perfect application of React. They've abstracted away all of the boilerplate Javascript so that markup is the star. That's why I loved Vue for all of these years. So the JS industrial complex got me.</p>
        <p className="mt-4">Vercel is wonderful: I am using their native analytics package, and rely on deployment alerts and observability to monitor my site's status.</p>
        <p className="mt-4">Framer Motion?</p>
        <h2 className="heading mt-8 mb-2">Typography</h2>
        <p>Max Miedenger's Neue Haas Grotesk (Display & Text) served by Adobe Fonts. This typeface has exceptional kerning, so I don't have to much around with letter spacing. It also gives me the Swiss modernist Massimo Vignelli vibe that I'm going for.</p>
        <p className="mt-4">I use the heavier medium weight of Neue Haas Text in dark mode, because it helps the text render better.</p>
        <h2 className="heading mt-8 mb-2">Et cetera</h2>
        <p className="mb-16">I built this site by hand in Cursor, and delegated some small refactoring tasks to a coding agent. More and more, I'm finding that I have to be stroking the keys in order to be productive. Otherwise, it's too easy to prompt your way off a cliff.</p>
      </div>
    </>
  );
}
