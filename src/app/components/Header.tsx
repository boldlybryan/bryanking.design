import Link from "next/link";

export default function Header() {
  return (
    <Link href="/">
      <div className="mb-12">
        <h1>Bryan King</h1>
        <p>Software Design & Engineering</p>
        <p>Newport, Kentucky, USA</p>
      </div>
    </Link>
  );
}