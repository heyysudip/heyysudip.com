import React from "react";
import Link from "next/link";

import { getAllPosts } from "@/lib/mdx";

export default async function Blogs() {
  const blogs = await getAllPosts();

  return (
    <main className="space-y-12 sm:space-y-16 leading-7">
      <header>
        <h1 className="text-lg font-medium">Writings</h1>
        <p className="text-[15px] text-muted-foreground/80 font-mono">Things I&apos;ve written</p>
      </header>
      <section aria-labelledby="greeting-heading">
        {blogs.map(({ meta }) => (
          <Link
            href={`/writings/${meta.slug}`}
            key={meta.slug}
            className="inline-block group"
            aria-label={`Writing: ${meta.title}`}
          >
            <h3 className="font-[450] max-md:underline group-hover:underline underline-offset-1 transition ease">
              {meta.title}
            </h3>
            <p className="text-muted-foreground/80 text-sm font-mono">{meta.description}</p>
          </Link>
        ))}
      </section>
    </main>
  );
}
