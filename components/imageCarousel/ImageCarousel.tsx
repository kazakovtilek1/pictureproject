"use client";

import Image from "next/image";
import React, { useState, useCallback, useEffect } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { carouselImages } from "@/constants/carouselImages/carouselImages";

export default function ImageCarousel() {
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    mode: "free-snap",
    slides: {
      origin: "center",
      perView: 7,
      spacing: 16,
    },
    initial: 3, // центр
  });

  const [styleMap, setStyleMap] = useState<
    Record<number, { width: number; height: number }>
  >({});

  const updateStyles = useCallback(() => {
    if (!instanceRef.current) return;

    const details = instanceRef.current.track.details;
    const newStyles: Record<number, { width: number; height: number }> = {};

    details.slides.forEach((slide, idx) => {
      const distance = Math.abs(slide.distance);

      let width = 0;
      let height = 0;

      if (distance === 0) {
        width = 518;
        height = 350;
      } else if (distance === 1) {
        width = 400;
        height = 270;
      } else if (distance === 2) {
        width = 280;
        height = 189;
      } else if (distance === 3) {
        width = 180;
        height = 122;
      } else {
        width = 100;
        height = 68;
      }

      newStyles[idx] = { width, height };
    });

    setStyleMap(newStyles);
  }, [instanceRef]);

  // Обновляем стили при изменениях слайдера и при монтировании
  useEffect(() => {
    if (!instanceRef.current) return;

    const slider = instanceRef.current;

    updateStyles();

    // В текущей версии Keen Slider используем подписку через instanceRef.current.on с функцией
    // но без .off - поэтому мы будем просто подписываться и очищать эффекты с помощью флага

    function onSlideChanged() {
      updateStyles();
    }

    function onDetailsChanged() {
      updateStyles();
    }

    slider.on("slideChanged", onSlideChanged);
    slider.on("detailsChanged", onDetailsChanged);

    // Возвращаем функцию очистки для предотвращения утечек
    return () => {
      // В версии 6.8.6 метод off может быть недоступен, но на самом деле он есть, но может не типизироваться.
      // Можно попробовать привести к any:
      (slider as any).off("slideChanged", onSlideChanged);
      (slider as any).off("detailsChanged", onDetailsChanged);
    };
  }, [instanceRef, updateStyles]);

  const handlePrev = () => {
    instanceRef.current?.prev();
  };

  const handleNext = () => {
    instanceRef.current?.next();
  };

  return (
    <div className="w-full px-4 mt-10 relative flex flex-col items-center">
      <div
        ref={sliderRef}
        className="keen-slider flex justify-center items-center"
        style={{ gap: "16px" }}
      >
        {carouselImages.map((img, idx) => {
          const style = styleMap[idx];
          return (
            <div
              key={idx}
              className="keen-slider__slide flex justify-center items-center"
              style={{
                width: style ? `${style.width}px` : "180px",
                height: style ? `${style.height}px` : "122px",
                transition: "width 0.3s ease, height 0.3s ease",
                flexShrink: 0,
              }}
            >
              <Image
                src={img.image}
                alt={`Slide ${idx}`}
                width={style ? style.width : 180}
                height={style ? style.height : 122}
                className="rounded-xl object-cover shadow-lg"
                priority={idx === 3}
              />
            </div>
          );
        })}
      </div>

      <div className="mt-6 flex gap-4">
        <button
          onClick={handlePrev}
          className="w-12 h-12 bg-gray-300 rounded-full flex justify-center items-center hover:bg-gray-400 transition"
          aria-label="Previous Slide"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-6 h-6"
            viewBox="0 0 24 24"
          >
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>

        <button
          onClick={handleNext}
          className="w-12 h-12 bg-gray-300 rounded-full flex justify-center items-center hover:bg-gray-400 transition"
          aria-label="Next Slide"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-6 h-6"
            viewBox="0 0 24 24"
          >
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      </div>
    </div>
  );
}
