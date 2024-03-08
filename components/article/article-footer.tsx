import Link from "next/link";

import { cn, formatDate } from "@/lib/utils";
import { ContentType, FrontMatter } from "@/types";

interface CardProps {
  title: string;
  slug: string;
  date: string;
  type: ContentType;
  isNext?: boolean;
}

const Card = ({ date, slug, title, isNext, type }: CardProps) => {
  return (
    <Link
      href={`/${type}/${slug}`}
      className="w-full"
    >
      <div className="p-4 md:py-5 md:px-6 rounded-md bg-background border hover:bg-muted transition-all">
        <p
          className={cn(
            "font-medium text-sm text-zinc-500",
            isNext && "text-end"
          )}
        >
          {isNext ? "Next post" : "Last post"}
        </p>
        <h4
          className={cn(
            "text-foreground tracking-wider mt-2.5 text-lg font-medium",
            isNext && "text-end"
          )}
        >
          {title}
        </h4>
        <p className={cn("text-zinc-500 text-xs mt-0.5", isNext && "text-end")}>
          {formatDate(date)}
        </p>
      </div>
    </Link>
  );
};

interface ArticleFooterProps {
  next?: FrontMatter;
  previous?: FrontMatter;
  type: ContentType;
}

export const ArticleFooter = ({ next, previous, type }: ArticleFooterProps) => {
  return (
    <section className="w-full mt-4">
      <div className="space-y-2">
        {previous && (
          <Card
            title={previous.title}
            slug={previous.slug}
            date={previous.date}
            type={type}
          />
        )}
        {next && (
          <Card
            title={next.title}
            slug={next.slug}
            date={next.date}
            type={type}
            isNext
          />
        )}
      </div>
    </section>
  );
};
