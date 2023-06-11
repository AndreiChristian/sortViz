export interface Algorithm {
  id: number;
  name: string;
}

export const algorithms: Algorithm[] = [
  {
    id: 1,
    name: "Bubble Sort",
  },
  { id: 2, name: "Merge Sort" },
  { id: 3, name: "Insertion Sort" },
  { id: 4, name: "Quick sort" },
];
