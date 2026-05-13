"use client";

import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { modak } from "../app/fonts";
import DownloadForMac from "./DownloadForMac";

const links = [
  { label: "Home", href: "#home" },
  { label: "Features", href: "#features" },
  { label: "Gallery", href: "#gallery" },
  { label: "Pricing", href: "#pricing" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/40 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:gap-4 sm:px-6 sm:py-4">
        <a
          href="#home"
          className="flex min-w-0 shrink items-center gap-2 sm:gap-3"
        >
          <Image
            src="/wallyai-logo-removebg-preview.png"
            alt="WallyAI logo"
            width={36}
            height={36}
            className="size-8 shrink-0 object-contain sm:size-9"
            priority
          />

          <span
            className={`${modak.className} truncate text-[1.35rem] leading-none tracking-tight text-white sm:text-[1.55rem] md:text-[1.85rem]`}
          >
            WallyAI
          </span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-white/60 transition hover:text-white"
            >
              {link.label}
            </a>
          ))}
          <DownloadForMac variant="navbar" />
        </div>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="inline-flex shrink-0 touch-manipulation rounded-lg p-2.5 text-white transition hover:bg-white/10 md:hidden"
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-white/10 bg-black/95 px-4 py-5 sm:px-6 md:hidden">
          <div className="flex flex-col gap-1">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-base font-medium text-white/80 transition hover:bg-white/5 hover:text-white"
              >
                {link.label}
              </a>
            ))}

            <div className="mt-3 border-t border-white/10 pt-4">
              <DownloadForMac
                variant="navbar"
                className="w-full min-h-12 justify-center px-5 py-3.5 text-center text-base"
                onNavigate={() => setOpen(false)}
              />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
