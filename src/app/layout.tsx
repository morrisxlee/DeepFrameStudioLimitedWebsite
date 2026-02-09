import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Deep Frame Studio Limited | 深幀工作室有限公司",
  description:
    "Deep Frame Studio Limited is an independent game development company crafting immersive gaming experiences. We push the boundaries of creativity and technology.",
  keywords: [
    "game development",
    "indie games",
    "Deep Frame Studio",
    "深幀工作室",
    "game studio",
    "Hong Kong",
  ],
  openGraph: {
    title: "Deep Frame Studio Limited",
    description:
      "Independent game development studio crafting immersive experiences.",
    url: "https://deepframestudiolimited.com",
    siteName: "Deep Frame Studio Limited",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
