export interface MockItem {
  id: string;
  url: string;
  width: number;
  height: number;
  createdAt: string;
  title: string;
  description: string;
}

export const mockData: MockItem[] = [
  {
    id: "20f",
    url: "https://cdn2.thecatapi.com/images/20f.png",
    width: 1024,
    height: 768,
    createdAt: "2025-04-10T12:00:00Z",
    title: "Кот в коробке",
    description:
      "Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Вдали от всех живут они в буквенных домах на берегу Семантика большого языкового океана.",
  },
  {
    id: "a3h",
    url: "https://cdn2.thecatapi.com/images/a3h.jpg",
    width: 800,
    height: 600,
    createdAt: "2025-04-11T15:30:00Z",
    title: "Спящий котёнок",
    description:
      "Однажды эта строка текста решила отправиться в путешествие по просторам интернета. Она встретила множество других строк, но осталась верна своему предназначению — быть примером.",
  },
  {
    id: "MTg0MjA3MA",
    url: "https://cdn2.thecatapi.com/images/MTg0MjA3MA.jpg",
    width: 1200,
    height: 900,
    createdAt: "2025-04-12T09:45:00Z",
    title: "Кот на подоконнике",
    description:
      "Порой слова, как птицы, улетают в дальние края, оставляя за собой лишь эхо. Этот текст, полный смысла и вдохновения, создан для того, чтобы украсить страницы мира.",
  },
];
