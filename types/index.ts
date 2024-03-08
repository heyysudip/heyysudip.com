export type MDX = React.ReactElement<any, string | React.JSXElementConstructor<any>>;

export type ContentType = "blog" | "project";

export type FrontMatter = {
  title: string;
  description: string;
  date: string;
  slug: string;
  author: string;
  ogImage: string;
  keywords: string[];
  timeToRead: number;
};

export type Blog = {
  mdxContent: MDX;
  meta: FrontMatter;
};

export type PageContent = {
  post: Blog;
  previous: Blog;
  next: Blog;
};

export type HeadingProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLHeadingElement>,
  HTMLHeadingElement
>;

export interface Article extends FrontMatter {
  type: ContentType;
}
