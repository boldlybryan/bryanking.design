import Link from "next/link";

export default function Footer() {
 return (
    <footer className="grid-home">
      <nav className="xl:col-start-3 col-span-2 flex gap-4 overflow-x-auto">
        <Link href="/colophon">Colophon</Link>
        <Link href="/experiments">Experiments</Link>
        <Link href="https://bryanking.net" target="_blank">Blog</Link>
        <Link href="https://www.bryanking.net/newsletter" target="_blank">Newsletter</Link>
        <Link href="#" target="_blank">Résumé</Link>
        <Link href="https://are.na/bryan-king" target="_blank">Are.na</Link>
      </nav>
    </footer>
 )
}