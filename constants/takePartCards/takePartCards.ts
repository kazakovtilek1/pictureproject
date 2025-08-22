export interface TakePartCards {
  id: number;
  image: string;
  title: string;
  description: string;
}

export const partCards: TakePartCards[] = [
  {
    id: 1,
    image: "/Images/takePartImg1.png",
    title: "Выбор цвета",
    description:
      "Выберите один цвет, отражающий ваше состояние, и отметьте свободный незакрашенный участок.",
  },
  {
    id: 2,
    image: "/Images/takePartImg2.png",
    title: "Этап заполнения",
    description: "Заполните участок выбранным цветом.",
  },
  {
    id: 3,
    image: "/Images/takePartImg3.png",
    title: "Оставьте свой след",
    description: "Вы можете оставить отпечаток любой части тела.",
  },
  {
    id: 4,
    image: "/Images/takePartImg4.png",
    title: "Завершение процесса",
    description:
      "В конце волонтёр поможет вам заполнить форму, где вы сможете оставить свои пожелания.",
  },
];
