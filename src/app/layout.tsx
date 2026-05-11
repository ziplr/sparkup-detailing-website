import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "SparkUp Detailing | Premium Mobile Car Detailing",
  description:
    "Professional mobile car detailing service. We bring premium paint correction, ceramic coating, interior detailing, and headlight restoration directly to your door.",
  keywords: [
    "car detailing",
    "mobile detailing",
    "paint correction",
    "ceramic coating",
    "headlight restoration",
    "interior detailing",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <body>{children}</body>
    </html>
  );
}
