import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "../sections/navbar";
import Footer from "../sections/footer";
import "../styles/globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Frontend Template",
  description: "by Bjorn Bergstrom",
  icons: {
    icon: "/favicon.ico",
  },
  keywords: ["Next.js", "React", "Tailwind CSS", "TypeScript", "JavaScript"],
  authors: [{ name: "Bjorn Bergstrom", url: "https://bergstr.se" }],
  creator: "Bjorn Bergstrom",
  openGraph: {
    title: "Template Next.js",
    description: "by Bjorn Bergstrom",
    url: "https://bergstr.se",
    siteName: "Template Next.js",
    images: [{ url: "/favicon.ico" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
