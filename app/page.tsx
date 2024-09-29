import Link from "next/link";

import { projects } from "@/lib/constants";
import { getAllWritings } from "@/lib/mdx";

export default async function Home() {
  const writings = await getAllWritings();

  return (
    <main className="space-y-12 sm:space-y-16 leading-7">
      <header>
        <h1 className="text-lg font-medium">Sudip Biswas</h1>
        <p className="text-[15px] text-muted-foreground font-mono">Software Developer</p>
      </header>
      <section aria-labelledby="greeting-heading">
        <h2 id="greeting-heading" className="text-[17px] font-medium mb-4">
          Hello{" "}
          <span role="img" aria-label="Waving hand">
            👋
          </span>
        </h2>
        <p className="text-muted-foreground">
          I&apos;m a developer who creates modern and robust web applications. I am passionate about building products
          that are accessible, inclusive, and delightful to use.
        </p>
        <p className="text-muted-foreground mt-4">
          Currently, I am improving my design skills and thinking deeply about user interfaces—how they look, feel, and
          behave.
        </p>
      </section>
      <section aria-labelledby="experience-heading">
        <h2 id="experience-heading" className="text-[17px] font-medium mb-4">
          Experience
        </h2>
        <div>
          <div>
            <h3 className="font-[450] group-hover:underline underline-offset-1 transition ease">
              Software Developer Intern -<span> </span>
              <Link
                href="https://thefuture.university"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline underline-offset-1 transition ease"
                aria-label="The Future University"
              >
                The Future University
              </Link>
            </h3>
            <p className="text-muted-foreground mt-1 text-sm font-mono">April 2024 - August 2024</p>
          </div>
        </div>
      </section>
      <section aria-labelledby="writings-heading">
        <h2 id="writings-heading" className="text-[17px] font-medium mb-4">
          Latest Writings
        </h2>
        <div className="space-y-6 mb-4">
          {writings.slice(0, 3).map(({ meta }) => (
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
        </div>
        <Link
          href="/writings"
          className="text-muted-foreground underline underline-offset-1"
          aria-label="Read more writings"
        >
          Read more
        </Link>
      </section>
      <section aria-labelledby="projects-heading">
        <h2 id="projects-heading" className="text-[17px] font-medium mb-4">
          Projects
        </h2>
        <div className="space-y-2.5 sm:space-y-3.5 mb-4">
          {projects.map(project => (
            <Link
              key={project.title}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block w-full group active:scale-[.98] transition-transform ease-out"
              aria-label={`Project: ${project.title}`}
            >
              <h3 className="font-[450] max-md:underline group-hover:underline underline-offset-1 transition ease">
                {project.title}
              </h3>
              <p className="text-muted-foreground text-sm font-mono">{project.description}</p>
            </Link>
          ))}
        </div>
        <Link
          href="https://github.com/sudipb7?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground underline underline-offset-1"
          aria-label="View all projects"
        >
          View all projects
        </Link>
      </section>
      <footer aria-labelledby="more-heading">
        <h2 id="more-heading" className="text-[17px] font-medium mb-4">
          More
        </h2>
        <p className="text-muted-foreground">
          You can see more of my work on{" "}
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://x.com/SudipB73"
            className="underline underline-offset-1"
            aria-label="Twitter profile"
          >
            Twitter
          </Link>{" "}
          and more of my code on{" "}
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/sudipb7"
            className="underline underline-offset-1"
            aria-label="GitHub profile"
          >
            Github
          </Link>
          .
        </p>
      </footer>
    </main>
  );
}
