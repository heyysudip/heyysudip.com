// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type MDX = React.ReactElement<any, string | React.JSXElementConstructor<any>>;

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

export type HeadingProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;

export type PageContent = {
  post: Blog;
  previous: Blog | null;
  next: Blog | null;
};
