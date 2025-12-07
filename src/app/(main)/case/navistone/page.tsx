import Link from "next/link";

export default function NavistonePage() {
  return (
    <div>
      <h1 className="text-4xl font-bold">Navistone</h1>
      <ul className="list-disc list-inside [&>li>a]:underline">
        <li>
          <Link href="/case/navistone/prototype">Next-gen Platform Prototype</Link>
        </li>
        <li>
          <Link href="/case/navistone/iris-design-system">Iris Design System</Link>
        </li>
        <li>
          <Link href="/case/navistone/analytics">Analytics</Link>
        </li>
      </ul>
    </div>  
  );
}