"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, memo, lazy, Suspense } from "react";

// Lazy load Lightbox component - only loads when needed
const Lightbox = lazy(() => import("./Lightbox"));

interface CasePreviewProps {
  title: string;
  description: string;
  image: string;
  link: string;
}

function CasePreview({ title, description, image, link }: CasePreviewProps) {
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
          width={800}
          height={500}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          src={image}
          alt={title}
          loading="lazy"
        />
      </button>
      {isLightboxOpen && (
        <Suspense fallback={null}>
          <Lightbox
            src={image}
            alt={title}
            isOpen={isLightboxOpen}
            onClose={() => setIsLightboxOpen(false)}
          />
        </Suspense>
      )}
    </div>
  );
}

// Memoize component to prevent unnecessary re-renders
export default memo(CasePreview);
