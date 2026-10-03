/**
 * ==========================================================================
 * Sigma Web Development Course - Video 121
 * Topic: Introduction to Next.js
 * File: layout.js
 * 
 * Description:
 *   Overview of Next.js App Router, file-based routing, server-side rendering, and performance benefits.
 * ==========================================================================
 */
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/component/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Blog",
  description: "I am a blog",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar/>
        {children}
        </body>
    </html>
  );
}
