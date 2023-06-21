import { delay } from "../../utils/delay";

export const countingSort = async (
  nums: number[],
  setArray: React.Dispatch<React.SetStateAction<number[]>>,
  setSelectedIndices: React.Dispatch<React.SetStateAction<number[]>>,
  ms: number
): Promise<void> => {
  const arr = [...nums];
  const max = Math.max(...arr);
  const min = Math.min(...arr);
  const range = max - min + 1;
  const countArr = new Array(range).fill(0);
  const output = new Array(arr.length).fill(0);

  for (let i = 0; i < arr.length; i++) {
    countArr[arr[i] - min]++;
  }

  for (let i = 1; i < countArr.length; i++) {
    countArr[i] += countArr[i - 1];
  }

  for (let i = arr.length - 1; i >= 0; i--) {
    output[countArr[arr[i] - min] - 1] = arr[i];
    countArr[arr[i] - min]--;
    setSelectedIndices([i]);
    setArray([...output]);
    await delay(ms);
  }

  setArray([...output]);
  setSelectedIndices([]);

  for (let i = 0; i < nums.length; i++) {
    setSelectedIndices((value) => [...value, i]);
    await delay(ms);
  }
};
