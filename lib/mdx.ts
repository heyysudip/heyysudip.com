import fs from "fs";
import path from "path";
import remarkGfm from "remark-gfm";
import readingTime from "reading-time";
import rehypePrettyCode from "rehype-pretty-code";
import { compileMDX } from "next-mdx-remote/rsc";

import { components } from "@/components/mdx";
import { FrontMatter, MDX, Writing } from "@/types/mdx";

const ROOT = path.join(process.cwd(), "writings");

function getFileContent(slug: string) {
  const fullPath = path.join(ROOT, `${slug}.mdx`);
  const fileContent = fs.readFileSync(fullPath, "utf8");
  return fileContent;
}

function getReadingTime(content: string) {
  const time = readingTime(content).minutes;
  return time < 0.5 ? 1 : Math.round(time);
}

export async function getMetadata(slug: string): Promise<FrontMatter> {
  const fileContent = getFileContent(slug);
  const { frontmatter } = await getMDX(fileContent);
  const timeToRead = getReadingTime(fileContent);

  return {
    ...frontmatter,
    slug,
    ogImage: `/writings/${slug}.jpg`,
    timeToRead,
  } as FrontMatter;
}

export async function getAllMetadata(): Promise<FrontMatter[]> {
  const files = fs.readdirSync(path.join(ROOT));
  const slugs = files.map(file => file.replace(/\.mdx$/, ""));
  const allMetadata = await Promise.all(slugs.map(slug => getMetadata(slug)));
  return allMetadata;
}

async function getMDX(fileContent: string): Promise<{ content: MDX; frontmatter: Partial<FrontMatter> }> {
  const { content, frontmatter } = await compileMDX({
    source: fileContent,
    components,
    options: {
      parseFrontmatter: true,
      mdxOptions: {
        remarkPlugins: [remarkGfm],
        rehypePlugins: [
          [rehypePrettyCode, { keepBackground: false, theme: { dark: "vesper", light: "github-light" } }],
        ],
      },
    },
  });

  return {
    content,
    frontmatter,
  };
}

export async function getWritingBySlug(slug: string): Promise<Writing> {
  const fileContent = getFileContent(slug);
  const { content, frontmatter } = await getMDX(fileContent);
  const timeToRead = getReadingTime(fileContent);

  return {
    mdxContent: content,
    meta: {
      ...frontmatter,
      slug,
      ogImage: `/${slug}.jpg`,
      timeToRead,
    } as FrontMatter,
  };
}

export async function getAllWritings(): Promise<Writing[]> {
  const files = fs.readdirSync(path.join(ROOT));
  const slugs = files.map(file => file.replace(/\.mdx$/, ""));
  const allWritings = await Promise.all(slugs.map(slug => getWritingBySlug(slug)));
  const writings = allWritings.sort((a, b) => new Date(a.meta.date).getTime() - new Date(b.meta.date).getTime());
  return writings;
}
