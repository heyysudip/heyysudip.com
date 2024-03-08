import Link from "next/link";
import { Icons } from "./icons";

export const Footer = () => {
  const year = new Date().getFullYear();

  const links = [
    {
      href: "https://twitter.com/sudipb7_",
      label: "Twitter",
      Icon: Icons.Twitter,
    },
    {
      href: "https://github.com/sudipb7",
      label: "GitHub",
      Icon: Icons.GitHub,
    },
    {
      href: "https://linkedin.com/in/sudipb7",
      label: "LinkedIn",
      Icon: Icons.LinkedIn,
    },
  ];

  return (
    <footer className="h-20 layout flex items-center justify-between">
      <div>
        <p className="font-medium text-zinc-600 max-sm:text-sm">Sudip Biswas © {year}</p>
      </div>
      <div className="flex items-center gap-2">
        {links.map(({ Icon, href, label }) => (
          <Link
            key={label}
            href={href}
            target="_blank"
            rel="noreferrer noopener"
            className="p-2"
          >
            <Icon size={22} />
          </Link>
        ))}
      </div>
    </footer>
  );
};
