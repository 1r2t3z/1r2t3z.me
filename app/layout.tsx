import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/main/Navbar";
import Footer from "@/components/main/Footer";
import Image from "next/image";
import { GoogleAnalytics } from "@next/third-parties/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "1r2t3z's Life",
  description:
    "Welcome to 1r2t3z's official developer website! This is where you can find his thoughts, experiences, and projects. Check out his links and explore his projects!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <link rel="canonical" href="https://1r2t3z.me/"></link>
      <meta
        name="keywords"
        content="1r2t3z, 1r2t3z's, web, developer, entrepreneur, the-axis"
      />
      <meta property="og:title" content="1r2t3z's Life" />
      <meta
        property="og:description"
        content="Welcome to 1r2t3z's official developer website! This is where you can find his thoughts, experiences, and projects. Check out his links and explore his projects!"
      />
      <meta property="og:image" content="@/app/favicon.ico" />
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
