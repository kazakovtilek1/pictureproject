import FlipCard from "../flipCard/FlipCard";
import { cards } from "@/constants/cardsData/cardsData";
import TakePart from "../takePart/TakePart";

export default function ProjectGoals() {
  return (
    <div className="bg-[url('/Images/background1.svg')] bg-no-repeat bg-cover md:[background-position:top_415px_center] sm:bg-center sm:bg-contain md:bg-cover">
      <div className="max-w-[1180px] mx-auto px-5 xl:px-0 mt-30">
        <h2 className="uppercase text-3xl font-medium text-center">
          Цели проекта
        </h2>
        <div className="flex flex-col gap-5 mt-15">
          <div className="place-items-center grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {cards.map((card, idx) => (
              <FlipCard
                key={card.id}
                icon={card.icon}
                frontText={card.frontText}
                backText={card.backText}
                isFirst={idx === 0}
              />
            ))}
          </div>
        </div>
      </div>
      <TakePart />
    </div>
  );
}
