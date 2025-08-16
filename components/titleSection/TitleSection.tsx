import Image from "next/image";

export default function TitleSection() {
  return (
    <div className="bg-[url('/Images/background2.svg')] bg-no-repeat bg-cover bg-center">
      <div className="max-w-[1180px] mx-auto mt-25 px-5 xl:px-0">
        <div className="flex flex-col items-center gap-15 md:flex-row justify-between">
          <div className="items-center md:items-start flex flex-col gap-9">
            <h1 className="text-2xl font-bold text-center md:text-start sm:text-5xl text-[#780000] leading-[1.2]">
              Стань частью <br className="hidden md:block" /> самой{" "}
              <br className="block md:hidden" /> большой{" "}
              <br className="hidden md:block" />
              картины <br className="block md:hidden" /> в мире
            </h1>
            <div className="flex flex-col gap-4">
              <p className="text-[17px] text-center md:text-start sm:text-xl font-normal leading-[1.2] uppercase">
                <span className="font-bold">100 000 </span>
                человек создают <br className="block md:hidden" /> шедевр,{" "}
                <br className="hidden md:block" /> который войдёт{" "}
                <br className="block md:hidden" /> в историю.
              </p>
              <p className="text-[17px] text-center md:text-start sm:text-xl font-normal leading-[1.2] uppercase">
                Твоя кисть — твой след <br className="block md:hidden" /> в
                искусстве <br className="hidden md:block" /> Кыргызстана
              </p>
            </div>
            <button className="w-[320px] sm:w-[354px] md:w-[280px] uppercase text-white bg-[#780000] px-6 py-4 rounded-[10px] text-xl font-bold cursor-pointer hover:bg-[#E10D1D] active:bg-[#630000] transition-all ease-in-out duration-300">
              Принять участие
            </button>
          </div>
          <div className="relative">
            <div>
              {/* Картинка для десктопа (от md и выше) */}
              <div className="hidden md:block">
                <Image
                  src="/Images/img1.png"
                  alt="Image"
                  width={460}
                  height={550}
                />
              </div>

              {/* Маленький экран (640px ≤ ширина < 768px) */}
              <div className="hidden sm:block md:hidden">
                <Image
                  src="/Images/mobileImg1.png"
                  alt="Image"
                  width={728}
                  height={370}
                />
              </div>

              {/* Мобильная картинка (<640px) */}
              <div className="block sm:hidden">
                <Image
                  src="/Images/mobileImg1sm.png"
                  alt="Image"
                  width={320}
                  height={250}
                />
              </div>
            </div>
            <div
              className="static mt-5
                         sm:absolute sm:top-30 sm:left-7
                         md:absolute md:top-75 md:-left-30
              w-[320px] sm:w-[248px] h-25 flex items-center py-2.5 pl-2.5 pr-5 gap-2.5 bg-white rounded-2xl transition-transform duration-400 ease-in-out
                hover:scale-110 hover:shadow-lg"
            >
              <Image
                src="/Images/titleIcon2.svg"
                alt="Icon"
                width={64}
                height={64}
              />
              <p className="text-xl font-normal">Единство</p>
            </div>
            <div
              className="static mt-5
                         sm:absolute sm:top-60 sm:left-7
                         md:absolute md:top-105 md:-left-30
              w-[320px] sm:w-[248px] h-25 flex items-center py-2.5 pl-2.5 pr-5  gap-2.5 bg-white rounded-2xl transition-transform duration-400 ease-in-out
                hover:scale-110 hover:shadow-lg"
            >
              <Image
                src="/Images/titleIcon1.svg"
                alt="Icon"
                width={64}
                height={64}
              />
              <p className="text-xl font-normal">Открытость</p>
            </div>
          </div>
        </div>
      </div>
      <div
        id="aboutProject"
        className="scroll-mt-15 max-w-[1180px] mx-auto mt-30 relative px-5 md:px-0"
      >
        {/* Мобильная версия: текст внутри изображения */}
        <div className="block sm:hidden relative px-5 mt-30">
          <Image
            src="/Images/mobileImg2.png"
            alt="Picture"
            width={360}
            height={564}
            className="w-full"
          />
          <div className="absolute top-20 left-8 right-8 bottom-1 overflow-y-auto sm:overflow-visible bg-white p-4 rounded-2xl">
            <h2 className="uppercase text-xl font-medium">О проекте</h2>
            <p className="my-4 text-xs font-normal">
              Эта картина создаётся руками 100 000 кыргызстанцев. Каждый может
              оставить свой след, заполнив элемент картины, став его соавтором и
              владельцем. Мы даём возможность людям соприкоснуться лично с
              искусством, таким образом, меняя отношение людей, ведь то, что
              делается своими руками всегда ценно
            </p>
            <p className="text-xs font-normal">
              Мы даём возможность людям соприкоснуться лично с искусством, таким
              образом, меняя отношение людей, ведь то, что делается своими
              руками всегда ценно
            </p>
          </div>
        </div>

        {/* Десктоп / планшет версия */}
        <div className="hidden sm:block max-w-[1180px] mx-auto mt-30 relative px-5 md:px-0">
          <Image
            src="/Images/img2.png"
            alt="Picture"
            width={580}
            height={650}
          />
          <div className="absolute -bottom-20 md:bottom-20 top-50 left-82 overflow-y-auto p-10 bg-white rounded-2xl">
            <h2 className="uppercase text-3xl font-medium">О проекте</h2>
            <p className="my-5 text-xl font-normal">
              Эта картина создаётся руками 100 000 кыргызстанцев. Каждый может
              оставить свой след, заполнив элемент картины, став его соавтором и
              владельцем. Мы даём возможность людям соприкоснуться лично с
              искусством, таким образом, меняя отношение людей, ведь то, что
              делается своими руками всегда ценно
            </p>
            <p className="text-xl font-normal">
              Мы даём возможность людям соприкоснуться лично с искусством, таким
              образом, меняя отношение людей, ведь то, что делается своими
              руками всегда ценно
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
