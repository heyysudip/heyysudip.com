import { formatDate } from "@/lib/utils";
import { Article } from "@/types";

export const ArticleHeader = ({
  title,
  description,
  ogImage,
  author,
  date,
  keywords,
  timeToRead,
  slug,
  type,
}: Article) => {
  return (
    <section className="w-full py-2 mb-3">
      <h1 className="text-foreground tracking-wider text-4xl font-bold">{title}</h1>
      <div className="flex items-center gap-3 mt-3.5">
        <span className="text-xs text-secondary tracking-wide leading-relaxed">
          {formatDate(date)}
        </span>
        <div className="h-1.5 w-1.5 rounded-full bg-zinc-500" />
        <span className="text-xs text-secondary tracking-wide leading-relaxed">
          {timeToRead} minute read
        </span>
      </div>
      <p className="p mt-2.5">{description}</p>
      <figure className="mt-4 relative w-full h-80 overflow-hidden">
        {/* TODO: Replace this div with cover image */}
        <div className="w-full h-80 rounded-md border bg-[#fbfbfb]"></div>
      </figure>
    </section>
  );
};
