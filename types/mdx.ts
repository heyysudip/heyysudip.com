// eslint-disable-next-line @typescript-eslint/no-explicit-any
type MDX = React.ReactElement<any, string | React.JSXElementConstructor<any>>;

type FrontMatter = {
  title: string;
  description: string;
  date: string;
  slug: string;
  author: string;
  ogImage: string;
  keywords: string[];
  timeToRead: number;
};

type Writing = {
  mdxContent: MDX;
  meta: FrontMatter;
};

type HeadingProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;

type PageContent = {
  current: Writing;
  previous: Writing | null;
  next: Writing | null;
};

export type { FrontMatter, Writing, MDX, HeadingProps, PageContent };
