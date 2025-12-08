import Link from "next/link";

export default function Footer() {
 return (
    <footer>
      <nav className="flex gap-4">
        <Link href="#">Experiments</Link>
        <Link href="#">Colophon</Link>
      </nav>
    </footer>
 )
}