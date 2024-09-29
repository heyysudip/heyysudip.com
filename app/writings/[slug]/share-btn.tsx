"use client";

import React from "react";
import { Link } from "lucide-react";

export const ShareBtn = ({ slug }: { slug: string }) => {
  const copy = () => {
    navigator.clipboard.writeText(`${window.location.origin}/writings/${slug}`);
  };

  return (
    <button
      aria-label="Copy code snippet"
      onClick={copy}
      className="h-8 w-8 rounded-full bg-muted/20 border grid place-items-center absolute inset-y-0 right-0 active:scale-95 transition-transform ease-out"
    >
      <Link className="h-3.5 w-3.5" />
    </button>
  );
};
