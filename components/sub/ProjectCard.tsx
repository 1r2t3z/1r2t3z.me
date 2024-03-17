import { link } from "fs";
import Image from "next/image";
import React from "react";
import Link from "next/link";

interface Props {
  src: string;
  title: string;
  description: string;
  link: string;
  showlink: string;
}

const ProjectCard = ({ src, title, description, link, showlink }: Props) => {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] lg:w-1/3">
      <div className="flex flex-row items-center justify-center text-center">
        <Image
          src={src}
          alt={title}
          width={500}
          height={500}
          className="h-[300px] w-auto object-center object-cover"
        />
      </div>

      <div className="relative p-5 ">
        <div>
          <div className="flex justify-between">
            <h1 className="text-2xl font-semibold text-white mr-1">{title}</h1>
            <div className="border-2 border-white p-1 rounded-md flex flex-row items-center justify-center text-center text-white hover:bg-white hover:text-black transition-all duration-300 ease-in-out">
              <a
                href={link}
                target="_blank"
                rel="noreferrer"
                className="cursor-pointer flex flex-row items-center justify-center text-center w-full "
              >
                {" "}
                {showlink}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5 ml-1 transition-transform duration-200"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                  />
                </svg>
              </a>
            </div>
          </div>
          <p className="mt-2 text-gray-300">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
