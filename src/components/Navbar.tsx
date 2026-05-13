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
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#home" className="flex items-center gap-3">
          <Image
            src="/wallyai-logo-removebg-preview.png"
            alt="WallyAI logo"
            width={36}
            height={36}
            className="object-contain"
            priority
          />

          <span
            className={`${modak.className} text-[1.7rem] leading-none tracking-tight text-white md:text-[1.85rem]`}
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
        </div>

        <DownloadForMac
          variant="navbar"
          className="hidden md:inline-flex"
        />

        <button
          onClick={() => setOpen(!open)}
          className="inline-flex md:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-white/10 bg-black/90 px-6 py-6 md:hidden">
          <div className="flex flex-col gap-5">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-sm font-medium text-white/70 transition hover:text-white"
              >
                {link.label}
              </a>
            ))}

            <DownloadForMac
              variant="navbar"
              className="w-full justify-center px-5 py-3 text-center"
              onNavigate={() => setOpen(false)}
            />
          </div>
        </div>
      )}
    </header>
  );
}