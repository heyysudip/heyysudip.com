import Link from "next/link";

import { cn } from "@/lib/utils";

interface HeaderProps {
  transparent?: boolean;
}
export const Header = ({ transparent }: HeaderProps) => {
  return (
    <header
      className={cn(
        "sticky z-20 top-0 inset-x-0 h-20 transition-all",
        !transparent && "shadow-sm bg-background"
      )}
    >
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
              className="p-2 text-zinc-600 font-medium transition-all"
            >
              Blog
            </Link>
            <div className="w-0 h-[1.5px] mt-[0.5px] rounded-md bg-zinc-600 group-hover:w-full transition-all" />
          </div>
          <div className="group">
            <Link
              href="/project"
              className="p-2 text-zinc-600 font-medium transition-all"
            >
              Projects
            </Link>
            <div className="w-0 h-[1.5px] mt-[0.5px] rounded-md bg-zinc-600 group-hover:w-full transition-all" />
          </div>
        </ul>
      </nav>
    </header>
  );
};
