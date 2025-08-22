"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { CardData } from "@/constants/cardsData/cardsData";

type FlipCardProps = Omit<CardData, "id"> & {
  isFirst?: boolean;
};

export default function FlipCard({
  icon,
  frontText,
  backText,
  isFirst = false,
}: FlipCardProps) {
  const [flipped, setFlipped] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [hasFlippedOnce, setHasFlippedOnce] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function checkMobile() {
      setIsMobile(window.innerWidth < 768);
    }
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (!isFirst || !isMobile || hasFlippedOnce || !cardRef.current) return;

    const timeoutId = setTimeout(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setFlipped(true);
            setHasFlippedOnce(true);
            setTimeout(() => setFlipped(false), 2000);
            observer.disconnect();
          }
        },
        { threshold: 0.4 }
      );

      observer.observe(cardRef.current!);
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [isFirst, isMobile, hasFlippedOnce]);

  const toggleFlip = () => {
    if (isMobile) setFlipped(!flipped);
  };

  return (
    <div
      ref={cardRef}
      className={`group [perspective:1000px] w-[320px] h-[230px] sm:w-[354px] sm:h-[300px] md:w-[280px] md:h-[298px]`}
      onClick={toggleFlip}
    >
      <div
        className={`relative w-full h-full transform transition-transform duration-900 [transform-style:preserve-3d] ${
          flipped ? "rotate-y-180" : ""
        } ${!isMobile ? "group-hover:rotate-y-180" : ""}`}
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
