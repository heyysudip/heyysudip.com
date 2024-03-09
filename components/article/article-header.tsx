import Image from "next/image";

import { Article } from "@/types";
import { formatDate } from "@/lib/utils";
import { AspectRatio } from "@/components/ui/aspect-ratio";

export const ArticleHeader = ({
  title,
  description,
  author,
  date,
  keywords,
  ogImage,
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
      <AspectRatio
        ratio={16 / 9}
        className="relative overflow-hidden rounded-md"
      >
        <Image
          src={ogImage}
          alt={title}
          fill
          className="object-cover"
        />
      </AspectRatio>
    </section>
  );
};
