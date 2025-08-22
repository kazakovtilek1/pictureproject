"use client";

import { useState } from "react";
import { FaqItem } from "@/constants/faqData/faqData";
import { IoIosAdd, IoIosClose } from "react-icons/io";

interface Props {
  data: FaqItem;
}

export default function FaqAccordion({ data }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`group border-b-2 py-3 transition-colors duration-300 ${
        isOpen ? "border-[#669BBC]" : "border-[#FFE3C4]"
      } hover:border-[#669BBC]`}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left"
      >
        <span
          className={`text-[17px] md:text-xl font-normal cursor-pointer transition-colors duration-300 ${
            isOpen ? "text-[#669BBC]" : "text-black"
          } group-hover:text-[#669BBC]`}
        >
          {data.question}
        </span>
        <span
          className={`text-5xl cursor-pointer text-[#669BBC] transition-transform duration-300 ${
            isOpen ? "rotate-135" : "rotate-0"
          }`}
        >
          {isOpen ? <IoIosClose /> : <IoIosAdd />}
        </span>
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-[500px] mt-3" : "max-h-0"
        }`}
      >
        <p className="text-[17px] md:text-xl font-normal">{data.answer}</p>
      </div>
    </div>
  );
}
