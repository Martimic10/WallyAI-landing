"use client";

import { Apple } from "lucide-react";
import { macDownloadHref } from "../config/site";
import SlideHoverLabel from "./SlideHoverLabel";

type Variant = "light" | "dark" | "navbar";

const variantClass: Record<Variant, string> = {
  light:
    "bg-white text-black hover:bg-white/90 border border-transparent",
  dark: "bg-black text-white hover:bg-black/85 border border-transparent",
  navbar:
    "border border-white/15 bg-white px-5 py-2 text-sm font-medium text-black hover:bg-white/90",
};

function cn(...parts: (string | false | undefined | null)[]) {
  return parts.filter(Boolean).join(" ");
}

export default function DownloadForMac({
  variant = "light",
  className,
  onNavigate,
}: {
  variant?: Variant;
  className?: string;
  /** e.g. close mobile menu after tapping download */
  onNavigate?: () => void;
}) {
  const external = macDownloadHref.startsWith("http");
  const isPlaceholder = macDownloadHref === "#";

  const base =
    variant === "navbar"
      ? "group cursor-pointer inline-flex items-center justify-center rounded-full transition"
      : "group cursor-pointer inline-flex items-center justify-center rounded-full px-7 py-3 text-sm font-semibold transition";

  const merged = cn(base, variantClass[variant], className);

  const icon = (
    <Apple
      className={cn(
        "shrink-0",
        variant === "navbar" ? "size-[1.1rem]" : "size-[1.15em]",
        variant === "dark" ? "text-white" : "text-current",
      )}
      strokeWidth={1.75}
      aria-hidden
    />
  );

  const label = <span>Download for macOS</span>;

  const inner = (
    <SlideHoverLabel layout="row">
      {icon}
      {label}
    </SlideHoverLabel>
  );

  if (isPlaceholder) {
    return (
      <a
        href="#"
        className={merged}
        onClick={(e) => {
          e.preventDefault();
          onNavigate?.();
        }}
        title="Add NEXT_PUBLIC_MAC_DOWNLOAD_HREF in .env.local with your .dmg or App Store URL"
      >
        {inner}
      </a>
    );
  }

  return (
    <a
      href={macDownloadHref}
      className={merged}
      onClick={() => onNavigate?.()}
      {...(external
        ? { target: "_blank", rel: "noopener noreferrer" }
        : undefined)}
    >
      {inner}
    </a>
  );
}
