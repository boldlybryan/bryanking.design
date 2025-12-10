"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Lightbox from "./Lightbox";

interface CasePreviewProps {
  title: string;
  description: string;
  image: string;
  link: string;
}

export default function CasePreview({ title, description, image, link }: CasePreviewProps) {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  return (
    <div className="flex flex-col justify-between">
      <Link href={link}>
        <h3 className="heading">{title}</h3>
        <p className="body">{description}</p>
      </Link>
      <button
        onClick={() => setIsLightboxOpen(true)}
        className="cursor-zoom-in mt-2"
        aria-label={`View ${title} image in lightbox`}
      >
        <Image
          className="border border-neutral-300 dark:border-neutral-700 w-full aspect-16/10 object-cover object-top object-left"
          width={1000}
          height={1000}
          src={image}
          alt={title}
        />
      </button>
      <Lightbox
        src={image}
        alt={title}
        isOpen={isLightboxOpen}
        onClose={() => setIsLightboxOpen(false)}
      />
    </div>
  );
}
