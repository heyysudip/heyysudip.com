import Link from "next/link";
import { notFound } from "next/navigation";

import { formatDate } from "@/lib/utils";
import { getAllMetadata } from "@/lib/mdx";

export default async function BlogPage() {
  const blogs = await getAllMetadata("blog");

  if (!blogs) notFound();

  return (
    <>
      <div className="bg_gradient" />
      <main className="min-h-[calc(100vh-10rem)] layout py-3">
        <h2 className="text-foreground tracking-wider text-4xl font-bold mt-4">Blog</h2>
        <p className="mt-4 p">
          I&apos;m not much of a writer, but I do enjoy sharing my thoughts and experiences. I hope
          you find them interesting.
        </p>
        <section className="flex flex-col gap-3 mt-6">
          {blogs.map((blog) => (
            <Link
              key={blog.slug}
              href={`/blog/${blog.slug}`}
              className="group"
            >
              <h4 className="text-foreground tracking-wide text-xl font-medium group-hover:underline transition-all">
                {blog.title}
              </h4>
              <div className="flex items-center gap-3 mt-1.5">
                <span className="text-xs text-secondary tracking-wide leading-relaxed">
                  {formatDate(blog.date)}
                </span>
                <div className="h-1.5 w-1.5 rounded-full bg-zinc-500" />
                <span className="text-xs text-secondary tracking-wide leading-relaxed">
                  {blog.timeToRead} minute read
                </span>
              </div>
            </Link>
          ))}
        </section>
      </main>
    </>
  );
}
