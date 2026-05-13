import { Inter, Modak, Plus_Jakarta_Sans } from "next/font/google";

export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

/** Headlines and UI titles — pairs with Modak without competing with it. */
export const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-jakarta",
  display: "swap",
});

export const modak = Modak({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-logo",
  display: "swap",
});
