import { delay } from "../../utils/delay";

export const heapSort = async (
  nums: number[],
  setArray: React.Dispatch<React.SetStateAction<number[]>>,
  setSelectedIndices: React.Dispatch<React.SetStateAction<number[]>>,
  ms: number
): Promise<void> => {
  const n = nums.length;

  // Build heap
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    await heapify(nums, n, i, setArray, setSelectedIndices, ms);
  }

  // Extract elements from heap
  for (let i = n - 1; i > 0; i--) {
    [nums[0], nums[i]] = [nums[i], nums[0]];
    await delay(ms);
    setArray([...nums]);

    await heapify(nums, i, 0, setArray, setSelectedIndices, ms);
  }

  setSelectedIndices([]);

  for (let i = 0; i < nums.length; i++) {
    setSelectedIndices((value) => [...value, i]);
    await delay(ms);
  }
};

async function heapify(
  arr: number[],
  n: number,
  i: number,
  setArray: React.Dispatch<React.SetStateAction<number[]>>,
  setSelectedIndices: React.Dispatch<React.SetStateAction<number[]>>,
  ms: number
): Promise<void> {
  let largest = i;
  const left = 2 * i + 1;
  const right = 2 * i + 2;

  setSelectedIndices([largest, left, right]);
  await delay(ms);

  if (left < n && arr[left] > arr[largest]) {
    largest = left;
  }

  if (right < n && arr[right] > arr[largest]) {
    largest = right;
  }

  if (largest !== i) {
    [arr[i], arr[largest]] = [arr[largest], arr[i]];
    setArray([...arr]);
    await delay(ms);

    await heapify(arr, n, largest, setArray, setSelectedIndices, ms);
  }
}
