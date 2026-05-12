"use client";

import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useState } from "react";

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

          <span className="font-[var(--font-logo)] text-2xl tracking-wide text-white">
            WallyAI
          </span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-white/60 transition hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="/waitlist"
          className="hidden rounded-full border border-white/15 bg-white px-5 py-2 text-sm font-medium text-black transition hover:bg-white/90 md:inline-flex"
        >
          Join Waitlist
        </a>

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
                className="text-white/70"
              >
                {link.label}
              </a>
            ))}

            <a
              href="/waitlist"
              onClick={() => setOpen(false)}
              className="rounded-full bg-white px-5 py-3 text-center text-sm font-medium text-black"
            >
              Join Waitlist
            </a>
          </div>
        </div>
      )}
    </header>
  );
}