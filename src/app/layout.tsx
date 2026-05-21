import type { Metadata } from "next";
import { Manrope, Sora } from "next/font/google";
import { CommerceProvider } from "@/components/commerce-context";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "AERORUN | Premium Performance Footwear",
  description:
    "Premium performance footwear for speed, style, and everyday motion.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${manrope.variable} ${sora.variable}`}>
      <body>
        <CommerceProvider>{children}</CommerceProvider>
      </body>
    </html>
  );
}
