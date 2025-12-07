import Image from "next/image";
import Link from "next/link";

interface CasePreviewProps {
  title: string;
  description: string;
  image: string;
  link: string;
}

export default function CasePreview({ title, description, image, link }: CasePreviewProps) {
  return (
    <Link href={link} className="flex flex-col justify-between">
      <div>
        <h3 className="heading">{title}</h3>
        <p className="body opacity-80">{description}</p>
      </div>
      <Image className="border border-neutral-500 w-full aspect-16/10 object-fill mt-2" width={1000} height={1000} src={image} alt=""/>
    </Link>
  );
}