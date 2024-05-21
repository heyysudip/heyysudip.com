import { getPostBySlug } from "@/lib/mdx";

export default async function HomePage() {
  const content = await getPostBySlug("about", "pages");
  return content.mdxContent;
}
