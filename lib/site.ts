export const siteConfig = {
  title: "Sudip Biswas",
  description:
    "I'm a developer based in India, who is passionate about crafting beautiful and smooth experiences as well as robust functionalities for users across the globe.",
  ogImage: "https://sudipbiswas.me/og.jpg",
  url: "https://sudipbiswas.me",
  links: {
    twitter: `https://x.com/${process.env.X}`,
    github: `https://github.com/${process.env.GITHUB}`,
  },
};

export type SiteConfig = typeof siteConfig;
