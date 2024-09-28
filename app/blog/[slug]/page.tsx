import { Metadata } from "next";
import { notFound } from "next/navigation";

import { PageContent } from "@/types/mdx";
import { siteConfig } from "@/lib/metadata";
import { getAllMetadata, getAllPosts, getMetadata } from "@/lib/mdx";

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
      url: `${siteConfig.url}/blog/${meta.slug}`,
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
  const posts = await getAllPosts();
  const postIndex = posts.findIndex(post => post.meta.slug === slug);

  return {
    post: posts[postIndex],
    previous: posts[postIndex + 1] || null,
    next: posts[postIndex - 1] || null,
  };
}

export default async function Blog({ params }: Props) {
  const data = await getPageContent(params.slug);

  if (!data?.post) notFound();

  const { post } = data;

  return (
    <main className="leading-7 space-y-12 sm:space-y-16">
      <header>
        <h1 className="text-lg font-medium">{post.meta.title}</h1>
        <p className="text-[15px] text-muted-foreground/80 font-mono">{post.meta.description}</p>
      </header>
      <article className="space-y-6 sm:space-y-10">{post.mdxContent}</article>
    </main>
  );
}
