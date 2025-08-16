"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { CardData } from "@/constants/cardsData/cardsData";

type FlipCardProps = Omit<CardData, "id">;

export default function FlipCard({ icon, frontText, backText }: FlipCardProps) {
  const [flipped, setFlipped] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleFlip = () => {
    if (isMobile) setFlipped(!flipped);
  };

  return (
    <div
      className="group [perspective:1000px] w-[320px] h-[200px] sm:w-[354px] sm:h-[270px] md:w-70 md:h-67"
      onClick={toggleFlip}
    >
      <div
        className={`relative w-full h-full transform transition-transform duration-700 [transform-style:preserve-3d] ${
          flipped ? "rotate-y-180" : ""
        } group-hover:rotate-y-180`}
      >
        {/* FrontSide */}
        <div className="absolute w-full h-full [backface-visibility:hidden] rounded-2xl bg-[#669BBC] flex flex-col justify-between p-4">
          <Image src={icon} alt="icon" width={64} height={64} />
          <p className="text-xl text-white font-bold">{frontText}</p>
        </div>

        {/* BackSide */}
        <div className="absolute w-full h-full [backface-visibility:hidden] rounded-2xl bg-[#669BBC] p-4 transform rotate-y-180 flex">
          <p className="text-base text-white">{backText}</p>
        </div>
      </div>
    </div>
  );
}
