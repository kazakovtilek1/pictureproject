"use client";

import { partCards } from "@/constants/takePartCards/takePartCards";
import TakePartCard from "./TakePartCard";

export default function TakePart() {
  return (
    <div
      id="processPart"
      className="scroll-mt-15 max-w-[1180px] mx-auto px-5 xl:px-0 mt-35"
    >
      <div className="flex flex-col items-center gap-15 sm:items-center lg:flex lg:flex-row lg:items-start sm:justify-between">
        <h2 className="text-xl sm:text-3xl font-medium sticky top-20">
          Как принять участие?
        </h2>
        <div className="max-w-[580px] bg-[rgba(102,155,188,0.1)] backdrop-blur-3xl rounded-[20px] p-10 flex flex-col gap-10">
          {partCards.map((card, index) => (
            <TakePartCard key={card.id} data={card} index={index} />
          ))}
          <video
            src="/video/video.MOV"
            controls
            className="w-full h-full object-cover aspect-video rounded-[20px]"
          />
          <button className="active:scale-95 active:brightness-50 uppercase text-white bg-[#780000] px-6 py-4 rounded-[10px] text-xs md:text-xl font-bold cursor-pointer hover:bg-[#E10D1D] active:bg-[#630000] transition-transform duration-150 ease-in-out">
            Принять участие
          </button>
        </div>
      </div>
    </div>
  );
}
