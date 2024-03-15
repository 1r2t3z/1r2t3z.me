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
    <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61]">
      <div className="flex flex-row items-center justify-center text-center">
        <Image
          src={src}
          alt={title}
          width={500}
          height={500}
          className="h-[250px] w-auto object-center object-cover"
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
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 "
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"
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
