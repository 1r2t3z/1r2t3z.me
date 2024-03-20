import React from "react";
import Link from "next/link";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";

import { FaDiscord, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px] ">
      <div className="w-full flex flex-col items-center justify-center m-auto">
        <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">Socials</div>
            <Link
              href="https://instagram.com/1r2t3z?igsh=MW4xZ2Jja3dsYWUNA=="
              className="flex flex-row items-center my-[15px] cursor-pointer"
            >
              <RxInstagramLogo />
              <span className="text-[15px] ml-[6px]">Instagram</span>
            </Link>
            <Link
              href="https://github.com/1r2t3z"
              className="flex flex-row items-center my-[15px] cursor-pointer"
            >
              <RxGithubLogo />
              <span className="text-[15px] ml-[6px]">Github</span>
            </Link>
            <Link
              href="#"
              className="flex flex-row items-center my-[15px] cursor-pointer"
            >
              <FaDiscord />
              <span className="text-[15px] ml-[6px]">Discord</span>
            </Link>
          </div>
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">Contact me</div>

            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <span className="text-[15px] ml-[6px]">1r2t3z@proton.me</span>
            </p>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <span className="text-[15px] ml-[6px]">@1r2t3z:matrix.org</span>
            </p>
          </div>
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="mb-[20px] text-[15px] text-center">
              1r2t3z &copy; 2024
            </div>
            <div className="mb-[20px] text-[15px] text-center">
              All rights reserved
            </div>
            <div className="mb-[20px] text-[15px] text-center">
              Powered by{" "}
              <Link href="https://the-axis.eu" target="_blank">
                The-Axis
              </Link>{" "}
              🇳🇴
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
