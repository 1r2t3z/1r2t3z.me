import Image from "next/image";
import profilePic from "@/public/1r2t3z.jpg";
import React, { useState, useEffect } from "react";

const Navbar = () => {
  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        <a
          href="https://1r2t3z.me"
          className="h-auto w-auto flex flex-row items-center"
        >
          <div className="h-[40px] w-[40px] rounded-full bg-[#7042f861] border-opacity-65 flex items-center justify-center shadow-[0_0_5px_5px_#7042f861] hover:shadow-[0_0_5px_7px_#7042f880] transition ease-in-out 300">
            <Image
              src={profilePic}
              alt="logo"
              width={45}
              height={45}
              className="cursor-pointer rounded-full "
            />
          </div>

          <span className="font-bold ml-[10px] hidden md:block text-gray-300">
            1r2t3z
          </span>
        </a>

        <div className="md:w-[250px] lg:w-[500px] h-full flex flex-row items-center justify-between lg:mr-20">
          <div className="h-auto text-sm justify-between w-full border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
            <div className="font-extrabold  [text-wrap:balance] bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 to-50% to-slate-200 text-center">
              <p className="hidden lg:inline">
                Trusted by the most innovative minds in
              </p>
              <p className="inline lg:hidden">Trusted in </p>{" "}
              <span className="text-indigo-500 inline-flex flex-col h-[calc(theme(fontSize.sm)*theme(lineHeight.tight))] md:h-[calc(theme(fontSize.sm)*theme(lineHeight.tight))] overflow-hidden">
                <ul className="block animate-text-slide text-left leading-tight [&_li]:block">
                  <li>Finance</li>
                  <li>Tech</li>
                  <li>AI</li>
                  <li>Crypto</li>
                  <li>eCommerce</li>
                  <li aria-hidden="true">Finance</li>
                </ul>
              </span>
            </div>
          </div>
        </div>

        <div className="hidden md:flex md:flex-row md:gap-5 ">
          <a href="#" target="_blank" rel="noreferrer">
            <Image src="/discord.svg" alt="discord" width={30} height={30} />
          </a>
          <a
            href="https://instagram.com/1r2t3z?igsh=MW4xZ2Jja3dsYWUNA=="
            target="_blank"
            rel="noreferrer"
          >
            <Image
              src="/instagram.svg"
              alt="instagram"
              width={30}
              height={30}
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
