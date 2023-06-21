import React from "react";
import { bubbleSort } from "./algorithms/bubble";
import { insertionSort } from "./algorithms/insertion";
import { selectionSort } from "./algorithms/selection";
import { quickSort } from "./algorithms/quick";
import { mergeSort } from "./algorithms/merge";
import { heapSort } from "./algorithms/heap";
import { radixSort } from "./algorithms/radix";
import { cocktailSort } from "./algorithms/cocktail";
import { gnomeSort } from "./algorithms/gnome";
import { bogoSort } from "./algorithms/bogo";
import { shellSort } from "./algorithms/shell";
import { bucketSort } from "./algorithms/bucket";
import { countingSort } from "./algorithms/counting";
import { timSort } from "./algorithms/tim";

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
  tags: string[];
}

export const algorithms: Algorithm[] = [
  {
    id: 1,
    name: "Bubble Sort",
    description:
      "Bubble Sort is a simple and straightforward sorting algorithm that iterates over a list multiple times. On each pass, it compares each pair of adjacent elements and swaps them if they're in the wrong order. Over successive passes, larger values 'bubble up' to their correct positions in the list, resulting in the sorted list. However, due to its nested loop structure, Bubble Sort has a worst-case and average time complexity of O(n²) making it inefficient on large lists.",
    sort: bubbleSort,
    tags: [
      "Best: O(n)",
      "Average: O(n²)",
      "Worst: O(n²)",
      "Strategy: Exchanging",
    ],
  },
  {
    id: 2,
    name: "Insertion Sort",
    description:
      "Insertion Sort is a sorting algorithm that builds a sorted list one item at a time. It operates by beginning at one end of the list (usually the left), and iteratively places the current item in its correct position relative to items it has already sorted. Despite being more efficient than Bubble Sort in practical scenarios, it is still generally used on smaller data sets or on lists that are partially sorted, as it has an average time complexity of O(n²).",
    sort: insertionSort,
    tags: [
      "Best: O(n)",
      "Average: O(n²)",
      "Worst: O(n²)",
      "Strategy: Insertion",
    ],
  },
  {
    id: 3,
    name: "Selection Sort",
    description:
      "Selection Sort is a simple sorting algorithm that works by dividing the list into a sorted and an unsorted region. The sorted region is built up from left to right at the front (left) of the list. On each iteration, the smallest (or largest, depending on sorting order) remaining unsorted element is selected and moved to the sorted region. Like Bubble Sort and Insertion Sort, Selection Sort has a worst-case and average time complexity of O(n²), making it inefficient on large lists.",
    sort: selectionSort,
    tags: [
      "Best: O(n²)",
      "Average: O(n²)",
      "Worst: O(n²)",
      "Strategy: Selection",
    ],
  },
  {
    id: 4,
    name: "Quick Sort",
    description:
      "Quick Sort is a divide and conquer sorting algorithm that works by selecting a 'pivot' element from the array and partitioning the other elements into two sub-arrays, according to whether they are less than or greater than the pivot. The sub-arrays are then recursively sorted. This process continues until the list is sorted. Quick Sort is generally considered to be efficient and has an average time complexity of O(n log n), but its worst-case time complexity is O(n²). However, this worst case scenario is not common.",
    sort: quickSort,
    tags: [
      "Best: O(n log n)",
      "Average: O(n log n)",
      "Worst: O(n²)",
      "Strategy: Partitioning",
    ],
  },
  {
    id: 5,
    name: "Merge Sort",
    description:
      "Merge Sort is a divide and conquer sorting algorithm that works by dividing the unsorted list into n sublists, each containing one element (a list of one element is considered sorted), and repeatedly merging sublists to produce new sorted sublists until there is only one sublist remaining, the sorted list. The primary advantage of Merge Sort is its predictable time complexity, with worst-case and average time complexities of O(n log n). However, the major drawback of Merge Sort is that it requires additional space proportional to the size of the input list.",
    sort: mergeSort,
    tags: [
      "Best: O(n log n)",
      "Average: O(n log n)",
      "Worst: O(n log n)",
      "Strategy: Merging",
    ],
  },
  {
    id: 6,
    name: "Heap Sort",
    description:
      "Heap Sort is a comparison-based sorting algorithm that uses a binary heap data structure. The general approach is to build a 'max heap' (a complete binary tree where each parent node is greater than or equal to its child nodes). The maximum element of the heap is then swapped with the last element and removed from the heap without violating the heap property. This process is repeated for the remaining heap until it's empty. Heap Sort has an average and worst-case time complexity of O(n log n). It does not require a large auxiliary space like Merge Sort and it sorts in place, but it is not stable (does not maintain the relative order of records with equal keys).",
    sort: heapSort,
    tags: [
      "Best: O(n log n)",
      "Average: O(n log n)",
      "Worst: O(n log n)",
      "Strategy: Selection",
    ],
  },
  {
    id: 7,
    name: "Radix Sort",
    description:
      "Radix Sort is a non-comparative sorting algorithm that sorts numbers digit by digit starting from least significant digit to most significant. It uses counting sort as a subroutine to perform the digit wise sort. Radix sort can be very efficient on lists where the number of digits of individual elements is not large, and is particularly effective on lists of numbers in the binary or decimal number systems. It has a time complexity of O(nk), where n is the number of elements and k is the number of digits of the maximum number. This makes it very efficient for large lists, but potentially less suitable for smaller lists or lists with very large numbers.",
    sort: radixSort,
    tags: [
      "Best: O(nk)",
      "Average: O(nk)",
      "Worst: O(nk)",
      "Strategy: Distribution",
    ],
  },
  {
    id: 8,
    name: "Cocktail Sort",
    description:
      "Cocktail Sort, also known as bidirectional bubble sort, shaker sort, ripple sort, shuffle sort, or shuttle sort is a variation of bubble sort that is both a stable sorting algorithm and a comparison sort. It differs from a bubble sort by comparing in both directions each pass through the list. This algorithm provides only marginal performance improvements over Bubble Sort, and like Bubble Sort, it is not suitable for large data sets with a time complexity of O(n²).",
    sort: cocktailSort,
    tags: [
      "Best: O(n)",
      "Average: O(n²)",
      "Worst: O(n²)",
      "Strategy: Exchanging",
    ],
  },
  {
    id: 9,
    name: "Gnome Sort",
    description:
      "Gnome Sort, also called Stupid Sort, is a simple comparison-based sort algorithm that is similar to insertion sort in that it sorts similar elements in a single pass, but with a simpler implementation. The algorithm finds the first place in which two adjacent elements are in the wrong order and swaps them. It continues doing this, looking at the next pair and swapping if necessary, until it reaches the end of the list. If it has made at least one swap, it performs another pass through the list. This sort is not efficient for large lists, but can be efficient for smaller lists or partially sorted lists with a time complexity of O(n²).",
    sort: gnomeSort,
    tags: [
      "Best: O(n)",
      "Average: O(n²)",
      "Worst: O(n²)",
      "Strategy: Insertion",
    ],
  },
  {
    id: 11,
    name: "Shell Sort",
    description:
      "Shell Sort is a generalized version of insertion sort. It works by sorting pairs of elements far apart from each other and then progressively reducing the gap between elements to be compared. By starting with far apart elements, it can move some out-of-place elements into position faster. It is a comparatively better choice for medium size lists and it offers a good trade-off between program complexity and increased performance.",
    sort: shellSort,
    tags: [
      "Best: O(n log n)",
      "Average: depends on gap sequence",
      "Worst: O(n²)",
      "Strategy: Insertion",
    ],
  },
  {
    id: 12,
    name: "Bucket Sort",
    description:
      "Bucket Sort is a distribution sorting algorithm that works by distributing the elements of an array into a number of buckets. Each bucket is then sorted individually, either using a different sorting algorithm, or by recursively applying the bucket sort algorithm. It is useful when input is uniformly distributed over a range. Due to its linear time complexity, it can be beneficial when dealing with large data sets.",
    sort: bucketSort,
    tags: [
      "Best: O(n+k)",
      "Average: O(n+k)",
      "Worst: O(n²)",
      "Strategy: Distribution",
    ],
  },
  {
    id: 13,
    name: "Counting Sort",
    description:
      "Counting Sort is an integer sorting algorithm that works by counting the number of objects that have each distinct key value, and using arithmetic on those counts to determine the positions of each key value in the output sequence. It is not a comparison based sort and runs in linear time making it efficient for lists of numbers over a certain size where the range of input values are not significantly greater than the number of values to be sorted.",
    sort: countingSort,
    tags: [
      "Best: O(n+k)",
      "Average: O(n+k)",
      "Worst: O(n+k)",
      "Strategy: Counting",
    ],
  },
  {
    id: 14,
    name: "TimSort",
    description:
      "TimSort is a hybrid sorting algorithm, derived from merge sort and insertion sort, designed to perform well on many kinds of real-world data. It uses techniques from the insertion sort and the merge sort to provide stable, efficient sorting of the input list, making it excellent for data sets that are already partially ordered.",
    sort: timSort,
    tags: [
      "Best: O(n)",
      "Average: O(n log n)",
      "Worst: O(n log n)",
      "Strategy: Insertion & Merging",
    ],
  },
  {
    id: 10,
    name: "Bogo Sort",
    description:
      "Bogo Sort, also known as permutation sort, stupid sort, slow sort, shotgun sort, or monkey sort is a highly ineffective sorting algorithm based on the generate and test paradigm. The algorithm successively generates permutations of its input until it finds one that is sorted. It is not useful for sorting, but is sometimes used in education and for other purposes for its simplicity and to demonstrate inefficiency. The theoretical average case performance is O((n+1)!), where n is the number of items to sort, making it considerably inefficient on larger lists.",
    sort: bogoSort,
    tags: [
      "Best: O(n)",
      "Average: O((n+1)!)",
      "Worst: O((n+1)!)",
      "Strategy: Randomizing",
    ],
  },
];
