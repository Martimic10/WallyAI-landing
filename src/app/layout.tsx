import type { Metadata } from "next";
import { inter, modak, plusJakarta } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "WallyAI",
  description: "AI wallpapers for beautiful Mac desktops.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${modak.variable} ${plusJakarta.variable} ${inter.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}