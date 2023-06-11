import React from "react";
import { bubbleSort } from "./algorithms/bubble";

export interface Algorithm {
  id: number;
  name: string;
  sort?: (
    nums: number[],
    setArray: React.Dispatch<React.SetStateAction<number[]>>,
    setSelectedIndices: React.Dispatch<React.SetStateAction<number[]>>,
    ms: number
  ) => void;
}

export const algorithms: Algorithm[] = [
  {
    id: 1,
    name: "Bubble Sort",
    sort: bubbleSort,
  },
  { id: 2, name: "Merge Sort" },
  { id: 3, name: "Insertion Sort" },
  { id: 4, name: "Quick sort" },
];
