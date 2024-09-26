import { Metadata, Viewport } from "next";

export const siteConfig = {
  title: "Sudip Biswas",
  description:
    "Hey, I'm Sudip Biswas, a Software Developer, YouTuber, and Blogger. I love to share my knowledge and experience with the world. I'm passionate about technology and love to learn new things.",
  ogImage: "https://sudipbiswas.dev/og.jpg",
  url: "https://sudipbiswas.dev",
  links: {
    twitter: `https://x.com/heyysudip`,
    github: `https://github.com/heyysudip`,
  },
};

export type SiteConfig = typeof siteConfig;

export const metadata: Metadata = {
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.title}`,
  },
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.url),
  manifest: `${siteConfig.url}/site.webmanifest`,
  creator: siteConfig.title,
  authors: [
    {
      name: siteConfig.title,
      url: siteConfig.url,
    },
  ],
  keywords: [
    "Sudip Biswas",
    "Sudip Biswas Dev",
    "Hey Sudip",
    "Software Developer",
    "Web Developer",
    "Frontend Developer",
    "Backend Developer",
    "Full Stack Developer",
    "YouTuber",
    "Blogger",
    "Infleuncer",
    "Tech Influencer",
    "Tech Blogger",
    "Tech YouTuber",
    "Software Engineer",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.title,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    site: siteConfig.url,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.title,
      },
    ],
  },
  icons: [
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      url: `${siteConfig.url}/favicon-32x32.png`,
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      url: `${siteConfig.url}/favicon-16x16.png`,
    },
    {
      rel: "apple-touch-icon",
      sizes: "180x180",
      url: `${siteConfig.url}/apple-touch-icon.png`,
    },
    {
      rel: "mask-icon",
      color: "#121212",
      url: `${siteConfig.url}/safari-pinned-tab.svg`,
    },
  ],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1.0,
  userScalable: false,
  colorScheme: "light dark",
};
