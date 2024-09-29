import Link from "next/link";
import { Metadata } from "next";
import { Suspense } from "react";
import { notFound } from "next/navigation";

import "@/styles/mdx.css";
import { formatDate } from "@/lib/utils";
import { PageContent } from "@/types/mdx";
import { siteConfig } from "@/lib/metadata";
import { ShowViewsFallback, ShowViews } from "./show-views";
import { getAllMetadata, getAllWritings, getMetadata } from "@/lib/mdx";

interface Props {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const metadata = await getAllMetadata();
  return metadata.map(meta => ({ slug: meta.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const meta = await getMetadata(params.slug);
  if (!meta) return {};

  return {
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
    authors: [{ name: meta.author, url: siteConfig.url }],
    openGraph: {
      title: meta.title,
      description: meta.description,
      authors: [meta.author],
      publishedTime: new Date(meta.date).toISOString(),
      type: "article",
      url: `${siteConfig.url}/writings/${meta.slug}`,
      images: [
        {
          url: `${siteConfig.url}${meta.ogImage}`,
          width: 1200,
          height: 630,
          alt: meta.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      site: siteConfig.url,
      creator: "Sudip Biswas",
      title: meta.title,
      description: meta.description,
      images: [
        {
          url: `${siteConfig.url}${meta.ogImage}`,
          alt: meta.title,
          width: 1200,
          height: 630,
        },
      ],
    },
  };
}

async function getPageContent(slug: string): Promise<PageContent> {
  const writings = await getAllWritings();
  const postIndex = writings.findIndex(writing => writing.meta.slug === slug);

  return {
    current: writings[postIndex],
    previous: writings[postIndex + 1] || null,
    next: writings[postIndex - 1] || null,
  };
}

export default async function Writing({ params }: Props) {
  const data = await getPageContent(params.slug);

  if (!data?.current) notFound();

  const { current, previous, next } = data;

  return (
    <main className="leading-7 space-y-12 sm:space-y-16">
      <header>
        <h1 className="text-lg font-medium mt-1">{current.meta.title}</h1>
        <div className="flex items-center gap-2 text-[13.5px] text-muted-foreground font-mono">
          <p>{formatDate(current.meta.date)}</p>
          <p>&middot;</p>
          <Suspense fallback={<ShowViewsFallback />}>
            <ShowViews slug={current.meta.slug} />
          </Suspense>
          <p>&middot;</p>
          <p className="max-xs:hidden">{current.meta.timeToRead} mins of read</p>
        </div>
      </header>
      <article className="space-y-6 sm:space-y-10">{current.mdxContent}</article>
      {(previous || next) && (
        <div className="flex justify-between items-center border-t">
          {previous ? (
            <Link href={`/writings/${previous?.meta.slug}`} className="text-start px-2 py-6">
              <span className="text-muted-foreground font-mono text-sm font-medium">Previous</span>
              <p>{previous.meta.title}</p>
            </Link>
          ) : (
            <div className=""></div>
          )}
          {next ? (
            <Link href={`/writings/${next?.meta.slug}`} className="text-end px-2 py-6">
              <span className="text-muted-foreground font-mono text-sm font-medium">Next</span>
              <p>{next.meta.title}</p>
            </Link>
          ) : (
            <div className=""></div>
          )}
        </div>
      )}
    </main>
  );
}
