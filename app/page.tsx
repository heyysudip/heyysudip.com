import { Header } from "@/components/header";

export default function HomePage() {
  return (
    <>
      <div className="bg_gradient" />
      <Header transparent />
      <main className="min-h-[calc(100vh-10rem)] layout flex flex-col gap-10 sm:gap-12">
        <section className="space-y-1 w-full mt-10 sm:mt-12 md:mt-14 lg:mt-16">
          <p className="text-xl md:text-2xl font-semibold text-secondary tracking-wide">
            Hi, I&apos;m
          </p>
          <h1 className="text-4xl sm:text-5xl text-transparent bg-clip-text bg-gradient-to-t from-cyan-600 to-cyan-400 md:text-6xl font-bold tracking-wider">
            Sudip Biswas
          </h1>
        </section>
        <article className="space-y-4 md:space-y-5 p">
          <p>I&apos;m a Web Developer based in Maharashtra, India</p>
          <p>
            With a passion for building beautiful and functional websites, and a keen eye for design
            and obsession for perfection, I&apos;m a web developer who loves to create and build
            things that are not only visually appealing but also functional and user-friendly.
          </p>
          <p>
            I like to work with modern web technologies and frameworks like React, Next.js, Tailwind
            CSS, and many more. I write about web development, programming, and other tech-related
            stuff on my blog.
          </p>
        </article>
      </main>
    </>
  );
}
