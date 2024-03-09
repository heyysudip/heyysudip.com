import { Metadata } from "next";
import { notFound } from "next/navigation";

import { PageContent } from "@/types";
import { siteConfig } from "@/config/site";
import { ArticleFooter, ArticleHeader } from "@/components/article";
import { getAllMetadata, getAllPosts, getMetadata } from "@/lib/mdx";

interface Props {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const metadata = await getAllMetadata("project");
  return metadata.map((meta) => ({ slug: meta.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const meta = await getMetadata(params.slug, "project");
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
      url: `${siteConfig.url}/project/${meta.slug}`,
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
  const posts = await getAllPosts("project");
  const postIndex = posts.findIndex((post) => post.meta.slug === slug);

  return {
    post: posts[postIndex],
    previous: posts[postIndex + 1] || null,
    next: posts[postIndex - 1] || null,
  };
}

export default async function ProjectPostPage({ params }: Props) {
  const data = await getPageContent(params.slug);

  if (!data?.post) notFound();

  const { post, previous, next } = data;

  return (
    <main className="min-h-[calc(100vh-10rem)] layout py-3">
      <div className="grid_background" />
      <ArticleHeader
        {...post.meta}
        type="project"
      />
      <article>{post.mdxContent}</article>
      <ArticleFooter
        next={next?.meta}
        previous={previous?.meta}
        type="project"
      />
    </main>
  );
}
