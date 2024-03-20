import Encryption from "@/components/main/Encryption";
import Hero from "@/components/main/Hero";
import Projects from "@/components/main/Projects";
import Skills from "@/components/main/Skills";
import Image from "next/image";

export default function Home() {
  return (
    <main className="h-full w-full">
      <meta
        name="keywords"
        content="1r2t3z, 1r2t3z's, web, developer, entrepreneur, the-axis"
      />
      <meta property="og:title" content="1r2t3z's Life | Home" />
      <meta
        property="og:description"
        content="Welcome to 1r2t3z's official website! This is where you can find his thoughts, and projects. Check out his links and explore his projects!"
      />
      <meta property="og:image" content="@/app/favicon.ico" />
      <link rel="canonical" href="https://1r2t3z.me/"></link>
      <div className="flex flex-col gap-20">
        <Hero />
        <Skills />
        <Encryption />
        <Projects />
      </div>
    </main>
  );
}
