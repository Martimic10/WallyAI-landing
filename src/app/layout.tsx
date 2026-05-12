import type { Metadata } from "next";
import { Inter, Modak } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const modak = Modak({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-logo",
});

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
      <body className={`${inter.variable} ${modak.variable}`}>
        {children}
      </body>
    </html>
  );
}