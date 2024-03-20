import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/main/Navbar";
import Footer from "@/components/main/Footer";
import Image from "next/image";
import { GoogleAnalytics } from "@next/third-parties/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "1r2t3z's Life | Home",
  description:
    "Welcome to 1r2t3z's official website! This is where you can find his thoughts, and projects. Check out his links and explore his projects!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-[#030014] overflow-y-scroll overflow-x-hidden`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
      <GoogleAnalytics gaId="G-N8F3B9HWZV" />
    </html>
  );
}
