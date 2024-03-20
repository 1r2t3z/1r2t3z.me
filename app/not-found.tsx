import Link from "next/link";
import React from "react";
import type { Metadata } from "next";
import { Button } from "@/components/sub/HeroButton";

export const metadata: Metadata = {
  title: "1r2t3z's Life | 404",
  description: "Not found!",
};
export default function NotFound() {
  return (
    <main className="h-full w-full text-white">
      <div className="justify-center text-center items-center my-72">
        <div className="flex justify-center text-center items-center">
          <h1 className="font-bold text-8xl mr-2 ">404</h1>
          <h2 className="text-6xl pl-2 border-l-2 border-white">Not found</h2>
        </div>
        <div className="mt-6">
          <Link href="/">
            <Button className="group py-3 px-0 text-center text-white cursor-pointer rounded-lg max-w-[400px] text-base transition-transform duration-300">
              Go Home{" "}
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
                  d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                />
              </svg>
            </Button>
          </Link>
        </div>
      </div>
    </main>
  );
}
