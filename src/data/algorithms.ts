import React from "react";
import { bubbleSort } from "./algorithms/bubble";
import { insertionSort } from "./algorithms/insertion";
import { selectionSort } from "./algorithms/selection";

export interface Algorithm {
  id: number;
  name: string;
  description: string;
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
    description:
      "Bubble Sort is a simple and straightforward sorting algorithm that iterates over a list multiple times. On each pass, it compares each pair of adjacent elements and swaps them if they're in the wrong order. Over successive passes, larger values 'bubble up' to their correct positions in the list, resulting in the sorted list. However, due to its nested loop structure, Bubble Sort has a worst-case and average time complexity of O(n²) making it inefficient on large lists.",
    sort: bubbleSort,
  },
  {
    id: 2,
    name: "Insertion Sort",
    description:
      "Insertion Sort is a sorting algorithm that builds a sorted list one item at a time. It operates by beginning at one end of the list (usually the left), and iteratively places the current item in its correct position relative to items it has already sorted. Despite being more efficient than Bubble Sort in practical scenarios, it is still generally used on smaller data sets or on lists that are partially sorted, as it has an average time complexity of O(n²).",
    sort: insertionSort,
  },
  {
    id: 3,
    name: "Selection Sort",
    description:
      "Selection Sort is a simple sorting algorithm that works by dividing the list into a sorted and an unsorted region. The sorted region is built up from left to right at the front (left) of the list. On each iteration, the smallest (or largest, depending on sorting order) remaining unsorted element is selected and moved to the sorted region. Like Bubble Sort and Insertion Sort, Selection Sort has a worst-case and average time complexity of O(n²), making it inefficient on large lists.",
    sort: selectionSort,
  },
];
