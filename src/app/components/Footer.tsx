import Link from "next/link";

export default function Footer() {
 return (
    <footer>
      <nav className="flex gap-4">
        <Link href="/experiments">Experiments</Link>
        <Link href="https://bryanking.net" target="_blank">Blog</Link>
        <Link href="/colophon">Colophon</Link>
      </nav>
    </footer>
 )
}