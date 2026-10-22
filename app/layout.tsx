import type { Metadata } from "next";
import { Bricolage_Grotesque, Instrument_Sans } from "next/font/google";
import "./globals.css";

const display = Bricolage_Grotesque({ subsets: ["latin"], variable: "--font-bricolage", display: "swap" });
const body = Instrument_Sans({ subsets: ["latin"], variable: "--font-instrument", display: "swap" });

export const metadata: Metadata = {
  title: "Martin Renteria | Full-stack Software Engineer and Accessibility Specialist",
  description:
    "Portfolio of Martin Renteria: React, Next.js, and Node.js engineering with a focus on infrastructure and WCAG 2.2 AA accessibility.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} scroll-pt-20 motion-safe:scroll-smooth`}>
      <body className="bg-bg font-sans text-[1.0625rem] leading-relaxed text-ink antialiased">
        {children}
      </body>
    </html>
  );
}
