import React from "react";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { Button } from "@/components/sub/HeroButton";

const HeroContent = () => {
  return (
    <div className="flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]">
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        <div className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]">
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">
            1r2t3z&apos;s Developer Portfolio
          </h1>
        </div>

        <div className="flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[600px] w-auto h-auto">
          <span className="">
            Providing
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 ">
              {" "}
              the best{" "}
            </span>
            project experience
          </span>
        </div>

        <p className="text-lg text-gray-400 my-5 max-w-[600px]">
          I&apos;m a FullStack Web and mobile App developer focused mainly on
          front-end, UI/UX and bringing my dreams to life.
        </p>
        <a href="#skills">
          <Button className="group py-3 px-0 text-center text-white cursor-pointer rounded-lg max-w-[400px] text-base">
            Learn More{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4 ml-1 transition-transform duration-300 group-hover:rotate-[90deg]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
              />
            </svg>
          </Button>
        </a>
      </div>

      <div className="w-full h-full flex justify-center items-center">
        <Image
          src="/mainIconsdark.svg"
          alt="1r2t3z's Developer Portfolio"
          height={650}
          width={650}
        />
      </div>
    </div>
  );
};

export default HeroContent;
