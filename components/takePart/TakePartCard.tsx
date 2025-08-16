import Image from "next/image";
import { TakePartCards } from "@/constants/takePartCards/takePartCards";

interface TakePartCardsProps {
  data: TakePartCards;
  index: number;
}

export default function TakePartCard({ data, index }: TakePartCardsProps) {
  return (
    <div>
      <div className="flex flex-col">
        <div className="relative w-full h-[250px] group overflow-hidden rounded-2xl">
          <Image
            src={data.image}
            alt="TakePartPicture"
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
          />
          <div className="absolute top-2.5 left-2.5 bg-[#669BBC] text-white w-10 h-10 rounded-[10px] flex items-center justify-center text-[17px] font-bold">
            {index + 1}
          </div>
        </div>
        <p className="text-[17px] md:text-xl font-bold mt-5 mb-2.5">
          {data.title}
        </p>
        <p className="text-[17px] md:text-xl font-normal">{data.description}</p>
      </div>
    </div>
  );
}
