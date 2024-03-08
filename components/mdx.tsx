import Image from "next/image";
import Link from "next/link";

import { HeadingProps } from "@/types";

export const components = {
  h1: (props: HeadingProps) => (
    <h1
      {...props}
      className="text-foreground tracking-wider mt-6 text-4xl font-bold"
    />
  ),
  h2: (props: HeadingProps) => (
    <h2
      {...props}
      className="text-foreground tracking-wider mt-6 text-3xl font-semibold"
    />
  ),
  h3: (props: HeadingProps) => (
    <h3
      {...props}
      className="text-foreground tracking-wider mt-6 text-2xl font-semibold"
    />
  ),
  h4: (props: HeadingProps) => (
    <h4
      {...props}
      className="text-foreground tracking-wider mt-6 text-xl font-medium"
    />
  ),
  p: (props: React.HTMLProps<HTMLParagraphElement>) => (
    <p
      className="p [&:not(:first-child)]:mt-4"
      {...props}
    />
  ),
  a: (props: React.HTMLProps<HTMLAnchorElement>) => (
    <a
      className="text-primary hover:opacity-90 transition-all"
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
    <blockquote className="mt-4 border-l-2 pl-3 sm:pl-4 italic">
      {props.children}
    </blockquote>
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
  li: ({ children }: React.HTMLProps<HTMLLIElement>) => (
    <li className="mt-2 ml-2 text-secondary">{children}</li>
  ),
  tr: (props: React.HTMLProps<HTMLTableRowElement>) => (
    <tr
      className="m-0 border-t p-0"
      {...props}
    />
  ),
  th: (props: React.HTMLProps<HTMLTableCellElement>) => (
    <th
      className="border px-4 py-2 text-left font-semibold [&[align=center]]:text-center [&[align=right]]:text-right"
      {...props}
    />
  ),
  td: (props: React.HTMLProps<HTMLTableCellElement>) => (
    <td
      className="border text-secondary px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right"
      {...props}
    />
  ),
  table: (props: React.HTMLProps<HTMLTableElement>) => (
    <table
      className="w-full mt-4 table-auto bg-muted border rounded-md"
      {...props}
    />
  ),
  code: (props: React.HTMLProps<HTMLElement>) => (
    <code
      className="relative rounded-md bg-muted px-1 py-0.5 font-mono text-sm font-semibold"
      {...props}
    />
  ),
  pre: ({ children }: React.HTMLProps<HTMLElement>) => (
    <pre className="mt-4 overflow-x-auto bg-muted border rounded-md p-4 w-full">
      {children}
    </pre>
  ),
  Image,
  Link,
};
