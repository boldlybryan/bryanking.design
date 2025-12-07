import Link from "next/link";

export default function Header() {
  return (
    <header className="mb-8">
      <Link href="/">
        <div className="">
          <h1>Bryan King</h1>
          <p>Software Design & Engineering</p>
          <p>Newport, Kentucky, USA</p>
        </div>
      </Link>
      <div className="flex gap-4 mt-4">
        <Link href="https://twitter.com/bryan_king" target="_blank">Twitter</Link>
        <Link href="https://linkedin.com/in/bpking15" target="_blank">LinkedIn</Link>
        <Link href="https://github.com/boldlybryan" target="_blank">GitHub</Link>
      </div>
    </header>
  );
}