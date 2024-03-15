import React from "react";

import { motion } from "framer-motion";
import { slideInFromTop } from "@/utils/motion";
import { EvervaultCard, Icon } from "@/components/sub/EncryptionBg";

const Encryption = () => {
  return (
    <div className="flex flex-row relative items-center justify-center min-h-screen w-full h-full">
      <div className="absolute w-auto h-auto top-0 z-[5]">
        <div className="text-[40px] font-medium text-center text-gray-200">
          Performance
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            {" "}
            &{" "}
          </span>
          Security
        </div>
      </div>

      <div className="flex flex-col items-center justify-center translate-y-[-200px] absolute z-[20] w-auto h-auto">
        <EvervaultCard />
        <div className="Welcome-box px-[15px] py-[4px] z-[20] brder my-[20px] border-[#7042f88b] opacity-[0.9] flex items-center justify-center">
          <h1 className="Welcome-text text-[12px]">
            Handling every information as a secret
          </h1>
        </div>
      </div>
      <div className="absolute z-[20] bottom-[400px] px-[5px]">
        <div className="cursive text-[20px] font-medium text-center text-gray-300">
          Secure your data with end-to-end encryption
        </div>
      </div>
      <div className="w-full flex items-start justify-center absolute video-was-here"></div>
    </div>
  );
};
//here was video
export default Encryption;
