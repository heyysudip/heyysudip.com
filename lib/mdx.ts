import fs from "fs";
import path from "path";
import remarkGfm from "remark-gfm";
import readingTime from "reading-time";
import rehypePrettyCode from "rehype-pretty-code";
import { compileMDX } from "next-mdx-remote/rsc";

import { Blog, ContentType, FrontMatter, MDX } from "@/types";
import { components } from "@/components/mdx";

const ROOT = path.join(process.cwd(), "content");

function getFileContent(slug: string, type: ContentType) {
  const fullPath = path.join(ROOT, type, `${slug}.mdx`);
  const fileContent = fs.readFileSync(fullPath, "utf8");
  return fileContent;
}

function getReadingTime(content: string) {
  const time = readingTime(content).minutes;
  return time < 0.5 ? 1 : Math.round(time);
}

export async function getMetadata(slug: string, type: ContentType): Promise<FrontMatter> {
  const fileContent = getFileContent(slug, type);
  const { frontmatter } = await getMDX(fileContent);
  const timeToRead = getReadingTime(fileContent);

  return {
    ...frontmatter,
    slug,
    ogImage: `/${type}/${slug}.jpg`,
    timeToRead,
  } as FrontMatter;
}

export async function getAllMetadata(type: ContentType): Promise<FrontMatter[]> {
  const files = fs.readdirSync(path.join(ROOT, type));
  const slugs = files.map((file) => file.replace(/\.mdx$/, ""));
  const allMetadata = await Promise.all(slugs.map((slug) => getMetadata(slug, type)));
  return allMetadata;
}

async function getMDX(
  fileContent: string
): Promise<{ content: MDX; frontmatter: Partial<FrontMatter> }> {
  const { content, frontmatter } = await compileMDX({
    source: fileContent,
    components,
    options: {
      parseFrontmatter: true,
      mdxOptions: {
        remarkPlugins: [remarkGfm],
        rehypePlugins: [[rehypePrettyCode as any, { theme: "github-light" }]],
      },
    },
  });

  return {
    content,
    frontmatter,
  };
}

export async function getPostBySlug(slug: string, type: ContentType): Promise<Blog> {
  const fileContent = getFileContent(slug, type);
  const { content, frontmatter } = await getMDX(fileContent);
  const timeToRead = getReadingTime(fileContent);

  return {
    mdxContent: content,
    meta: {
      ...frontmatter,
      slug,
      ogImage: `/${type}/${slug}.jpg`,
      timeToRead,
    } as FrontMatter,
  };
}

export async function getAllPosts(type: ContentType): Promise<Blog[]> {
  const files = fs.readdirSync(path.join(ROOT, type));
  const slugs = files.map((file) => file.replace(/\.mdx$/, ""));
  const allPosts = await Promise.all(slugs.map((slug) => getPostBySlug(slug, type)));
  const posts = allPosts.sort(
    (a, b) => new Date(a.meta.date).getTime() - new Date(b.meta.date).getTime()
  );
  return posts;
}
