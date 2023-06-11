import React from "react";
import { bubbleSort } from "./algorithms/bubble";
import { insertionSort } from "./algorithms/insertion";
import { selectionSort } from "./algorithms/selection";

export interface Algorithm {
  id: number;
  name: string;
  sort: (
    nums: number[],
    setArray: React.Dispatch<React.SetStateAction<number[]>>,
    setSelectedIndices: React.Dispatch<React.SetStateAction<number[]>>,
    ms: number
  ) => Promise<void>;
}

export const algorithms: Algorithm[] = [
  {
    id: 1,
    name: "Bubble Sort",
    sort: bubbleSort,
  },
  { id: 2, name: "Insertion Sort", sort: insertionSort },
  { id: 3, name: "Selection Sort", sort: selectionSort },
];
