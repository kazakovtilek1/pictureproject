import Image from "next/image";
import FaqAccordion from "../faqAccordion/FaqAccordion";
import { faqList } from "@/constants/faqData/faqData";

export default function Questions() {
  return (
    <div
      id="questions"
      className="scroll-mt-5 px-5 md:pl-0 md:pr-5 2xl:mx-auto  flex flex-col items-center md:flex-row md:items-end md:gap-15 mt-35 mb-25"
    >
      {/* Мобильное изображение */}
      <div className="block md:hidden w-full">
        <Image
          src="/Images/mobileQuestionsImg.png"
          alt="Questions Mobile"
          width={728}
          height={200}
          className="object-contain"
        />
      </div>

      {/* Десктоп изображение */}
      <div className="hidden md:block min-w-[400px]">
        <Image
          src="/Images/QuestionsImg.png"
          alt="Questions"
          width={829}
          height={800}
        />
      </div>
      <div className="max-w-[680px]">
        <h2 className="uppercase text-xl md:text-3xl text-center md:text-left font-medium my-15">
          Популярные вопросы
        </h2>
        <div>
          {faqList.map((item, index) => (
            <FaqAccordion key={index} data={item} />
          ))}
        </div>
      </div>
    </div>
  );
}
