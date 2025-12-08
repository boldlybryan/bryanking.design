import Link from "next/link";

export default function Header() {
  return (
    <header className="container mb-8 grid-home border-b border-neutral-800 pb-4">
      <Link href="/">
        <div className="">
          <h1>Bryan King</h1>
          <p>Software Design & Engineering</p>
          <p>Newport, Kentucky, USA</p>
        </div>
      </Link>
      <div className="flex flex-col xl:col-start-3">
        <Link href="/about">About</Link>
        <Link href="/work">Work</Link>
        <Link href="/influences">Influences</Link>
      </div>
      <div className="flex flex-col">
        <Link href="https://twitter.com/bryan_king" target="_blank">Twitter</Link>
        <Link href="https://linkedin.com/in/bpking15" target="_blank">LinkedIn</Link>
        <Link href="https://github.com/boldlybryan" target="_blank">GitHub</Link>
      </div>
    </header>
  );
}