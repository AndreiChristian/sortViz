import { delay } from "../../utils/delay";

export const quickSort = async (
  nums: number[],
  setArray: React.Dispatch<React.SetStateAction<number[]>>,
  setSelectedIndices: React.Dispatch<React.SetStateAction<number[]>>,
  ms: number,
  start = 0,
  end: number = nums.length - 1
): Promise<void> => {
  if (start >= end) {
    return;
  }

  const index = await partition(
    nums,
    start,
    end,
    setArray,
    setSelectedIndices,
    ms
  );

  await Promise.all([
    quickSort(nums, setArray, setSelectedIndices, ms, start, index - 1),
    quickSort(nums, setArray, setSelectedIndices, ms, index + 1, end),
  ]);
};

async function partition(
  arr: number[],
  start: number,
  end: number,
  setArray: React.Dispatch<React.SetStateAction<number[]>>,
  setSelectedIndices: React.Dispatch<React.SetStateAction<number[]>>,
  ms: number
): Promise<number> {
  let pivotIndex = start;
  const pivotValue = arr[end];
  for (let i = start; i < end; i++) {
    setSelectedIndices([i, pivotIndex]);
    await delay(ms);
    if (arr[i] < pivotValue) {
      [arr[i], arr[pivotIndex]] = [arr[pivotIndex], arr[i]]; // Swap values
      setArray([...arr]);
      await delay(ms);
      pivotIndex++;
    }
  }
  [arr[pivotIndex], arr[end]] = [arr[end], arr[pivotIndex]]; // Swap values
  setArray([...arr]);
  await delay(ms);
  return pivotIndex;
}
