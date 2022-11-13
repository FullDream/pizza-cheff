interface Advantages {
  img: {
    src: string;
    alt: string;
  };
  title: string;
  text: string;
}

export const advantages: Advantages[] = [
  {
    img: { src: 'assets/images/hop.png', alt: 'пшеница' },
    title: 'Лучшее тесто',
    text: 'Мы создаем тесто только из отборной итальянской муки наивысшего качества',
  },
  {
    img: { src: 'assets/images/kitchen-pack.png', alt: 'Колпак повара' },
    title: 'лучшие повара',
    text: 'Пиццы готовят самые профессиональные итальянские повара',
  },
  {
    img: {
      src: 'assets/images/seo-and-web.png',
      alt: 'Знак качества с галочкой',
    },
    title: 'гарантия качества',
    text: 'Наша пиццерия получила множество наград и признаний по всему миру',
  },
  {
    img: {
      src: 'assets/images/holidays.png',
      alt: 'Клош с рукой',
    },
    title: 'отборные рецепты',
    text: 'Мы используем рецепты от мировых лидеров в изготовлении пиццы',
  },
];
