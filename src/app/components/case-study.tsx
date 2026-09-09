import Image from "next/image";
import type { ReactNode } from "react";

export function CaseHeader({
  title,
  company,
  role,
  timeline,
  summary,
  draft = true,
}: {
  title: string;
  company: string;
  role: string;
  timeline: string;
  summary: string;
  draft?: boolean;
}) {
  return (
    <header className="mb-12">
      <p className="body opacity-75 mb-3">
        {company}
        <span className="mx-2" aria-hidden>
          ·
        </span>
        {timeline}
        {draft ? (
          <>
            <span className="mx-2" aria-hidden>
              ·
            </span>
            <span>Draft</span>
          </>
        ) : null}
      </p>
      <h1 className="supertitle mb-4">{title}</h1>
      <p className="text-base/6 xl:text-lg/7 mb-6">{summary}</p>
      <p className="body">
        <span className="opacity-75">Role </span>
        {role}
      </p>
    </header>
  );
}

export function CaseSection({
  id,
  title,
  children,
}: {
  id?: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="mb-12 scroll-mt-8">
      <h2 className="heading mb-4">{title}</h2>
      <div className="text-base/6 space-y-4">{children}</div>
    </section>
  );
}

export function CaseFigure({
  caption,
  src,
  alt,
  note,
}: {
  caption: string;
  src?: string;
  alt?: string;
  note?: string;
}) {
  return (
    <figure className="my-8">
      {src ? (
        <Image
          src={src}
          alt={alt ?? caption}
          width={1600}
          height={1000}
          className="w-full border border-neutral-300 dark:border-neutral-700 aspect-video object-cover object-top"
        />
      ) : (
        <div
          className="w-full aspect-video border border-dashed border-neutral-400 dark:border-neutral-600 bg-neutral-50 dark:bg-neutral-900 flex items-center justify-center px-6 text-center"
          role="img"
          aria-label={caption}
        >
          <p className="body opacity-75 max-w-md">{caption}</p>
        </div>
      )}
      {(src || note) && (
        <figcaption className="body mt-2 opacity-75">
          {src ? caption : null}
          {src && note ? (
            <>
              {" "}
              <span aria-hidden>·</span> {note}
            </>
          ) : null}
          {!src && note ? note : null}
        </figcaption>
      )}
    </figure>
  );
}

export function CaseMetaList({
  items,
}: {
  items: { label: string; value: string }[];
}) {
  return (
    <dl className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12 body">
      {items.map((item) => (
        <div key={item.label}>
          <dt className="opacity-75 mb-1">{item.label}</dt>
          <dd>{item.value}</dd>
        </div>
      ))}
    </dl>
  );
}

export function CaseCallout({ children }: { children: ReactNode }) {
  return (
    <aside className="border-l border-neutral-800 pl-4 my-6 text-base/6">
      {children}
    </aside>
  );
}

export function CaseNextSteps({ items }: { items: string[] }) {
  return (
    <section className="mb-16 border-t border-neutral-800 pt-8">
      <h2 className="heading mb-4">Assets still needed</h2>
      <p className="text-base/6 mb-4 opacity-75">
        Draft copy is in place. Drop the following exports in when ready—captions
        already mark where they belong.
      </p>
      <ul className="text-base/6 list-disc list-inside space-y-2">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>
  );
}
