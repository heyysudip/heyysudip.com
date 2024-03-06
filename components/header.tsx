import Link from "next/link";

export const Header = () => {
  return (
    <header className="sticky top-0 inset-x-0 h-20">
      <nav className="h-full layout flex items-center justify-between bg-transparent">
        <Link
          href="/"
          className="text-foreground font-semibold"
        >
          @sudipbiswas
        </Link>
        <ul className="flex items-center gap-2.5">
          <div className="group">
            <Link
              href="/blog"
              className="p-2 text-secondary font-medium group-hover:text-foreground transition-all"
            >
              Blog
            </Link>
            <div className="w-0 h-[1.5px] mt-[0.5px] rounded-md bg-foreground group-hover:w-full transition-all" />
          </div>
          <div className="group">
            <Link
              href="/project"
              className="p-2 text-secondary font-medium group-hover:text-foreground transition-all"
            >
              Projects
            </Link>
            <div className="w-0 h-[1.5px] mt-[0.5px] rounded-md bg-foreground group-hover:w-full transition-all" />
          </div>
        </ul>
      </nav>
    </header>
  );
};
