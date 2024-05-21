import "./globals.css";

import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { DM_Sans as FontSans } from "next/font/google";

import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/site";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

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
    "web developer",
    "personal blog",
    "sudip biswas",
    "sudipb7",
    "web developer",
    "software developer",
    "SDE",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          fontSans.variable,
          "text-foreground bg-background font-sans min-h-screen antialiased"
        )}
      >
        <div className="w-full h-full mx-auto max-w-lg py-8 px-4">{children}</div>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
