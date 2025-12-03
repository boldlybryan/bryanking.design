import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="p-4 font-medium tracking-tight leading-5">
      <div className="mb-12">
        <h1>Bryan King</h1>
        <p>Software Design & Engineering</p>
        <p>Newport, Kentucky, USA</p>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <div className="border w-full aspect-16/10 object-fill">
          <Link href="https://stendigcal.vercel.app" target="_blank">
            <Image className="h-full" src="/thumbnails/stendig-calendar.gif" alt="" width={1000} height={1000} />
          </Link>
        </div>
        <div className="border w-full aspect-16/10">
        </div>
        <div className="border w-full aspect-16/10">
        </div>
        <div className="border w-full aspect-16/10"></div>
        <div className="border w-full aspect-16/10"></div>
        <div className="border w-full aspect-16/10"></div>
        <div className="border w-full aspect-16/10"></div>
        <div className="border w-full aspect-16/10"></div>
        <div className="border w-full aspect-16/10"></div>
        <div className="border w-full aspect-16/10"></div>
        <div className="border w-full aspect-16/10"></div>
        <div className="border w-full aspect-16/10"></div>
      </div>
    </main>
  );
}
