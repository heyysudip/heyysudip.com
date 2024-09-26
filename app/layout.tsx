import localFont from "next/font/local";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

import "@/styles/globals.css";
import { cn } from "@/lib/utils";
import { BackgroundGrid } from "@/components/background-grid";
import { ThemeProvider } from "@/components/providers/theme-provider";
export { metadata, viewport } from "@/lib/metadata";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(geistSans.variable, geistMono.variable, "bg-[#FDFDFC] dark:bg-[#111110] antialiased font-sans")}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          storageKey="theme"
          disableTransitionOnChange
        >
          <BackgroundGrid />
          <div className="py-14 sm:py-24 px-6 sm:px-20 min-h-screen max-w-3xl mx-auto">{children}</div>
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
