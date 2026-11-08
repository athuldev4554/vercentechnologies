import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";

const dmSans = localFont({
  src: "./fonts/dm-sans-latin.woff2",
  variable: "--font-dm-sans",
  weight: "400 700",
  display: "swap",
});

const manrope = localFont({
  src: "./fonts/manrope-latin.woff2",
  variable: "--font-manrope",
  weight: "400 800",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Vercent Technologies | Digital Engineering & Enterprise Integration",
  description:
    "Build digital products, connect enterprise systems, and modernize your technology with Vercent. Web and mobile engineering, cloud, AI, Odoo, and NetSuite services.",
};

export const viewport: Viewport = { themeColor: "#155e59" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${manrope.variable} scroll-smooth scroll-pt-6 motion-reduce:scroll-auto`}>
      <body className="m-0 bg-white font-sans text-base text-ink antialiased selection:bg-[#d5e7df] selection:text-ink **:focus-visible:outline-2 **:focus-visible:outline-offset-4 **:focus-visible:outline-primary motion-reduce:**:transition-none motion-reduce:**:animate-none">{children}</body>
    </html>
  );
}
