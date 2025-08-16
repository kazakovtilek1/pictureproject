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
    title: "Заполните форму",
    description: "Имя, контакты, мечта/желание.",
  },
  {
    id: 2,
    image: "/Images/takePartImg2.png",
    title: "Получите свой холст",
    description:
      "На точке проекта волонтёр выдаст материалы и объяснит процесс.",
  },
  {
    id: 3,
    image: "/Images/takePartImg3.png",
    title: "Закрасьте свой участок",
    description: "Создайте рисунок или орнамент на своём квадрате.",
  },
  {
    id: 4,
    image: "/Images/takePartImg4.png",
    title: "Станьте частью мозаики",
    description: "Ваш фрагмент будет добавлен в общую картину.",
  },
];
