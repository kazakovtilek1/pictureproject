"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { carouselImages } from "@/constants/carouselImages/carouselImages";

export default function Carousel() {
  const [current, setCurrent] = useState(0);
  const [maxSide, setMaxSide] = useState(3); // сколько с каждой стороны
  const [mainSize, setMainSize] = useState({ w: 518, h: 350 });
  const length = carouselImages.length;

  // адаптив
  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      if (w < 640) {
        setMaxSide(0);
        setMainSize({ w: 320, h: 250 });
      } else if (w < 768) {
        setMaxSide(1);
        setMainSize({ w: 400, h: 300 });
      } else if (w < 1024) {
        setMaxSide(2);
        setMainSize({ w: 518, h: 350 });
      } else {
        setMaxSide(3);
        setMainSize({ w: 518, h: 350 });
      }
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const prev = () => setCurrent((p) => (p === 0 ? length - 1 : p - 1));
  const next = () => setCurrent((p) => (p === length - 1 ? 0 : p + 1));

  // размеры боковых слайдов - подогнаны под mainSize
  const sizeFor = (d: number) => {
    if (d === 0) return { w: mainSize.w, h: mainSize.h, z: 50 };
    if (Math.abs(d) === 1) return { w: 89, h: 289, z: 40 };
    if (Math.abs(d) === 2) return { w: 53, h: 238, z: 30 };
    if (Math.abs(d) === 3) return { w: 19, h: 173, z: 20 };
    return { w: 0, h: 0, z: 0 };
  };

  // Отступы и позиционирование слайдов с учётом gap и ширины mainSize
  const xFor = (d: number) => {
    const center = mainSize.w / 2;
    const offsets = [89, 53, 19]; // ширины боковых слайдов
    const gap = 40; // расстояние между слайдами

    if (d === 0) return 0;

    let x = d > 0 ? center : -center;
    for (let i = 1; i < Math.abs(d); i++) {
      x += (d > 0 ? 1 : -1) * (offsets[i - 1] + gap);
    }
    x += (d > 0 ? 1 : -1) * (offsets[Math.abs(d) - 1] / 2 + gap / 2);

    return x;
  };

  // Ширина контейнера зависит от mainSize и maxSide
  const containerWidth = mainSize.w + maxSide * 2 * (89 + 40); // 89 - средняя ширина боковых слайдов, 40 - gap

  return (
    <div className="relative flex flex-col items-center mt-30 mb-35 px-4">
      <div
        className="relative flex items-center justify-center overflow-x-hidden"
        style={{ height: mainSize.h, width: containerWidth, maxWidth: "100%" }}
      >
        {carouselImages.map((img, index) => {
          let d = index - current;
          if (d > length / 2) d -= length;
          if (d < -length / 2) d += length;

          if (Math.abs(d) > maxSide) return null; // показываем только в пределах maxSide

          const { w, h, z } = sizeFor(d);

          return (
            <motion.div
              key={index}
              className="absolute rounded-[20px] overflow-hidden shadow-lg cursor-pointer flex items-center justify-center"
              style={{ zIndex: z }}
              animate={{ x: xFor(d), width: w, height: h, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              onClick={() => setCurrent(index)}
            >
              <Image
                src={img.image}
                alt={`Slide ${index}`}
                fill
                className="object-cover rounded-[20px]"
              />
            </motion.div>
          );
        })}
      </div>

      <div className="flex justify-center items-center gap-[65px] mt-8">
        <button
          onClick={prev}
          className="p-3 rounded-full bg-gray-200 shadow-md hover:bg-gray-300 transition cursor-pointer"
        >
          <IoIosArrowBack size={28} color="#669BBC" />
        </button>
        <button
          onClick={next}
          className="p-3 rounded-full bg-gray-200 shadow-md hover:bg-gray-300 transition cursor-pointer"
        >
          <IoIosArrowForward size={28} color="#669BBC" />
        </button>
      </div>
    </div>
  );
}
