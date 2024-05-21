import Link from "next/link";

export const components = {
  h1: (props: React.HTMLProps<HTMLHeadingElement>) => (
    <h1
      {...props}
      className="tracking-wider mt-6 text-3xl font-bold"
    />
  ),
  h2: (props: React.HTMLProps<HTMLHeadingElement>) => (
    <h2
      {...props}
      className="tracking-wider mt-6 text-2xl font-semibold"
    />
  ),
  h3: (props: React.HTMLProps<HTMLHeadingElement>) => (
    <h3
      {...props}
      className="tracking-wider mt-6 text-xl font-semibold"
    />
  ),
  h4: (props: React.HTMLProps<HTMLHeadingElement>) => (
    <h4
      {...props}
      className="tracking-wider mt-6 text-lg font-medium"
    />
  ),
  p: (props: React.HTMLProps<HTMLParagraphElement>) => (
    <p
      className="tracking-wide [&:not(:first-child)]:mt-4"
      {...props}
    />
  ),
  a: (props: React.HTMLProps<HTMLAnchorElement>) => (
    <a
      className="underline underline-offset-2"
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    />
  ),
  hr: ({ ...props }) => (
    <hr
      className="my-4 md:my-6"
      {...props}
    />
  ),
  blockquote: (props: React.HTMLProps<HTMLElement>) => (
    <blockquote className="mt-4 border-l-2 pl-3 sm:pl-4 italic">{props.children}</blockquote>
  ),
  ul: (props: React.HTMLProps<HTMLUListElement>) => (
    <ul
      className="list-disc list-inside mt-4"
      {...props}
    />
  ),
  ol: ({ children }: React.HTMLProps<HTMLOListElement>) => (
    <ol className="list-decimal list-inside mt-4">{children}</ol>
  ),
  li: ({ children }: React.HTMLProps<HTMLLIElement>) => <li className="mt-2 ml-2">{children}</li>,
  code: (props: React.HTMLProps<HTMLElement>) => (
    <code
      className="relative rounded-md bg-muted px-1 py-0.5 font-mono text-sm font-semibold"
      {...props}
    />
  ),
  pre: ({ children }: React.HTMLProps<HTMLElement>) => (
    <pre className="mt-4 overflow-x-auto bg-muted border rounded-md p-2 md:p-4 w-full">
      {children}
    </pre>
  ),
  Link,
};
