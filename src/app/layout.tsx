import type { Metadata } from "next";
import { inter, modak, plusJakarta } from "./fonts";
import "./globals.css";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
  title: "WallyAI",
  description: "AI wallpapers for beautiful Mac desktops.",
  icons: {
    icon: "/wallyai-logo-removebg-preview.png",
    shortcut: "/wallyai-logo-removebg-preview.png",
    apple: "/wallyai-logo-removebg-preview.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("font-sans", geist.variable)}>
      <body
        className={`${inter.variable} ${modak.variable} ${plusJakarta.variable} ${inter.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}