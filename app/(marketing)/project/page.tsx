import Link from "next/link";
import { notFound } from "next/navigation";

import { formatDate } from "@/lib/utils";
import { getAllMetadata } from "@/lib/mdx";

export default async function ProjectPage() {
  const projects = await getAllMetadata("project");

  if (!projects) notFound();

  return (
    <>
      <div className="bg_gradient" />
      <main className="min-h-[calc(100vh-10rem)] layout py-3">
        <h2 className="text-foreground tracking-wider text-4xl font-bold mt-4">Projects</h2>
        <p className="mt-4 p">
          Here are some of the projects I&apos;ve worked on. I&apos;m always looking for new and
          exciting projects to work on.
        </p>
        <section className="flex flex-col gap-3 mt-6">
          {projects.map((project) => (
            <Link
              key={project.slug}
              href={`/project/${project.slug}`}
              className="group"
            >
              <h4 className="text-foreground tracking-wide text-xl font-medium group-hover:underline transition-all">
                {project.title}
              </h4>
              <div className="flex items-center gap-3 mt-1.5">
                <span className="text-xs text-secondary tracking-wide leading-relaxed">
                  {formatDate(project.date)}
                </span>
                <div className="h-1.5 w-1.5 rounded-full bg-zinc-500" />
                <span className="text-xs text-secondary tracking-wide leading-relaxed">
                  {project.timeToRead} minute read
                </span>
              </div>
            </Link>
          ))}
        </section>
      </main>
    </>
  );
}
