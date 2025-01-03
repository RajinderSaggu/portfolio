import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import AnimatedCursor from "@/components/animated-cursor";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap", // Ensures the font swaps gracefully.
  weight: ["400", "500", "600", "700"], // Adds multiple font weights for flexibility.
});

export const metadata: Metadata = {
  title: "Rajinder Kaur Saggu - Portfolio",
  description: "Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth md:scroll-auto scroll-m-1">

      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} antialiased`}
      >
        <div id="cursor-container">
          <AnimatedCursor />
        </div>


        {children}
      </body>
    </html>
  );
}
