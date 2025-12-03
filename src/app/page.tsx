import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      <div className="border border-neutral-500 w-full aspect-16/10 object-fill">
        <Link href="https://stendigcal.vercel.app" target="_blank">
          <Image className="h-full" src="/thumbnails/stendig-calendar.gif" alt="" width={1000} height={1000} />
        </Link>
      </div>
      <div className="border border-neutral-500 w-full aspect-16/10  cursor-pointer">
        <Link href="/about" className="h-full w-full flex items-center justify-center">About Me</Link>
      </div>
      <div className="border border-neutral-500 w-full aspect-16/10"></div>
      <div className="border border-neutral-500 w-full aspect-16/10"></div>
      <div className="border border-neutral-500 w-full aspect-16/10"></div>
      <div className="border border-neutral-500 w-full aspect-16/10"></div>
      <div className="border border-neutral-500 w-full aspect-16/10"></div>
      <div className="border border-neutral-500 w-full aspect-16/10"></div>
      <div className="border border-neutral-500 w-full aspect-16/10"></div>
      <div className="border border-neutral-500 w-full aspect-16/10"></div>
      <div className="border border-neutral-500 w-full aspect-16/10"></div>
      <div className="border border-neutral-500 w-full aspect-16/10"></div>
      <div className="border border-neutral-500 w-full aspect-16/10"></div>
    </div>
  );
}
