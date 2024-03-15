import React from "react";
import SkillDataProvider from "../sub/SkillDataProvider";
import SkillText from "../sub/SkillText";
import Image from "next/image";
import { SparklesCore } from "../sub/Sparkles";

const Skills = () => {
  return (
    <section
      id="skills"
      className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden pb-40 pt-40"
      style={{ transform: "scale(0.9" }}
    >
      <SkillText />
      <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
        <Image src="/css.png" alt="css" width="60" height="60" />
        <Image src="/docker.webp" alt="docker" width="50" height="50" />
        <Image src="/framer.png" alt="framer" width="50" height="50" />
        <Image src="/gitwhite.png" alt="git" width="50" height="50" />
        <Image src="/html.png" alt="html" width="60" height="60" />
        <Image src="/js.png" alt="js" width="50" height="50" />
        <Image src="/next.png" alt="nextjs" width="50" height="50" />
        <Image src="/react.png" alt="react" width="50" height="50" />
        <Image
          src="/mysql.png"
          alt="mysql"
          width="50"
          height="50"
          className="bg-white rounded-md"
        />
        <Image src="/node-js.png" alt="nodejs" width="50" height="50" />
        <Image src="/tailwind.png" alt="tailwind" width="50" height="50" />
        <Image src="/mui.png" alt="matrialui" width="50" height="50" />
        <Image
          src="/ReactNative .png"
          alt="reactnative"
          width="50"
          height="50"
        />
        <Image src="/stripe.webp" alt="stripe" width="50" height="50" />
        <Image
          src="/expo.png"
          alt="vercel"
          width="50"
          height="50"
          className="bg-white rounded-md"
        />
        <Image src="/ts.png" alt="ts" width="50" height="50" />
      </div>
      <div className="w-[40rem] h-39 relative">
        {/* Gradients */}
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

        {/* Core component */}
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={1200}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />

        {/* Radial Gradient to prevent sharp edges */}
        <div className="absolute inset-0 w-full h-full bg-[#030014] [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
      </div>
    </section>
  );
};

export default Skills;
