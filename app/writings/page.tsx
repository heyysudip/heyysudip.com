import React from "react";
import Link from "next/link";

import { getAllWritings } from "@/lib/mdx";

export default async function Writings() {
  const writings = await getAllWritings();

  return (
    <main className="space-y-10 sm:space-y-14 leading-7">
      <header>
        <h1 className="text-lg font-medium">My Writings</h1>
        <p className="text-[15px] text-muted-foreground font-mono">Things I&apos;ve written</p>
      </header>
      <section className="space-y-2.5 sm:space-y-3.5">
        {writings.map(({ meta }) => (
          <Link
            href={`/writings/${meta.slug}`}
            key={meta.slug}
            className="inline-block w-full group active:scale-[.98] transition-transform ease-out"
            aria-label={`Writing: ${meta.title}`}
          >
            <h3 className="font-[450] max-md:underline group-hover:underline underline-offset-1 transition ease">
              {meta.title}
            </h3>
            <p className="text-muted-foreground text-sm font-mono">{meta.description}</p>
          </Link>
        ))}
      </section>
    </main>
  );
}
