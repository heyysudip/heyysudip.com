import { Metadata } from "next";
import { notFound } from "next/navigation";

import { getAllMetadata, getAllPosts, getMetadata } from "@/lib/mdx";
import { PageContent } from "@/types";
import { ArticleFooter, ArticleHeader } from "@/components/article";

interface Props {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const metadata = await getAllMetadata("blog");
  return metadata.map((meta) => ({ slug: meta.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const meta = await getMetadata(params.slug, "blog");
  if (!meta) return {};

  return {
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
    authors: [{ name: meta.author, url: "https://sudipbiswas.vercel.app" }],
    openGraph: {
      title: meta.title,
      description: meta.description,
      authors: [meta.author],
      publishedTime: new Date(meta.date).toISOString(),
      type: "article",
      url: `https://sudipbiswas.vercel.app/blog/${meta.slug}`,
      images: [
        {
          url: `https://sudipbiswas.vercel.app${meta.ogImage}`,
          width: 1200,
          height: 630,
          alt: meta.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      site: "sudipbiswas.vercel.app",
      creator: "Sudip Biswas",
      title: meta.title,
      description: meta.description,
      images: [
        {
          url: `https://sudipbiswas.vercel.app${meta.ogImage}`,
          alt: meta.title,
          width: 1200,
          height: 630,
        },
      ],
    },
  };
}

async function getPageContent(slug: string): Promise<PageContent> {
  const posts = await getAllPosts("blog");
  const postIndex = posts.findIndex((post) => post.meta.slug === slug);

  return {
    post: posts[postIndex],
    previous: posts[postIndex + 1] || null,
    next: posts[postIndex - 1] || null,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const data = await getPageContent(params.slug);

  if (!data) notFound();

  const { post, previous, next } = data;

  return (
    <main className="min-h-[calc(100vh-10rem)] layout py-3">
      <ArticleHeader
        {...post.meta}
        type="blog"
      />
      <article>{post.mdxContent}</article>
      <ArticleFooter
        next={next?.meta}
        previous={previous?.meta}
        type="blog"
      />
    </main>
  );
}
