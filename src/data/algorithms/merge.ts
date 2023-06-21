import { delay } from "../../utils/delay";

export const mergeSort = async (
  nums: number[],
  setArray: React.Dispatch<React.SetStateAction<number[]>>,
  setSelectedIndices: React.Dispatch<React.SetStateAction<number[]>>,
  ms: number,
  start = 0,
  end: number = nums.length - 1
): Promise<void> => {
  if (start < end) {
    const mid = Math.floor((start + end) / 2);
    await mergeSort(nums, setArray, setSelectedIndices, ms, start, mid);
    await mergeSort(nums, setArray, setSelectedIndices, ms, mid + 1, end);
    await merge(nums, start, mid, end, setArray, setSelectedIndices, ms);
  }

  for (let i = 0; i < nums.length; i++) {
    setSelectedIndices((value) => [...value, i]);
    await delay(ms);
  }
};

async function merge(
  arr: number[],
  start: number,
  mid: number,
  end: number,
  setArray: React.Dispatch<React.SetStateAction<number[]>>,
  setSelectedIndices: React.Dispatch<React.SetStateAction<number[]>>,
  ms: number
): Promise<void> {
  const left = arr.slice(start, mid + 1);
  const right = arr.slice(mid + 1, end + 1);

  let i = 0,
    j = 0,
    k = start;

  while (i < left.length && j < right.length) {
    setSelectedIndices([k, start + i, mid + 1 + j]);
    await delay(ms);

    if (left[i] <= right[j]) {
      arr[k++] = left[i++];
    } else {
      arr[k++] = right[j++];
    }

    setArray([...arr]);
    await delay(ms);
  }

  while (i < left.length) {
    setSelectedIndices([k, start + i]);
    await delay(ms);

    arr[k++] = left[i++];

    setArray([...arr]);
    await delay(ms);
  }

  while (j < right.length) {
    setSelectedIndices([k, mid + 1 + j]);
    await delay(ms);

    arr[k++] = right[j++];

    setArray([...arr]);
    await delay(ms);
  }

  setSelectedIndices([]);
}
