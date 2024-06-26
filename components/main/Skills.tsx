import React from "react";
import SkillDataProvider from "../sub/SkillDataProvider";
import SkillText from "../sub/SkillText";
import Image from "next/image";

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
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-[#e59cff] to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-[#ba9cff] to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-[#9cb2ff] to-transparent h-px w-1/4" />
      </div>
    </section>
  );
};

export default Skills;
