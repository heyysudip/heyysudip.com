"use client";

import { useTheme } from "next-themes";

export const BackgroundGrid = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const svg = `
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200' stroke='${isDark ? "#FDFDFC" : "#111110"}' stroke-width='2px' fill-opacity='0.4' >
      <path d='M 100 0 L 100 200'/>
      <path d='M 0 100 L 200 100'/>
    </svg>
  `;
  const svgDataUrl = `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;

  return (
    <div
      className="pointer-events-none absolute inset-0 left-0 opacity-[0.02] top-0 flex h-full w-full"
      style={{
        backgroundImage: `url("${svgDataUrl}")`,
        backgroundRepeat: "repeat",
        backgroundSize: "60px",
        maskImage: "radial-gradient(ellipse at top, white, transparent 65%)",
        WebkitMaskImage: "radial-gradient(ellipse at top, white, transparent 65%)",
      }}
    />
  );
};
