import { delay } from "../../utils/delay";

export const selectionSort = async (
  nums: number[],
  setArray: React.Dispatch<React.SetStateAction<number[]>>,
  setSelectedIndices: React.Dispatch<React.SetStateAction<number[]>>,
  ms: number
): Promise<void> => {
  const arr = [...nums];
  const len = arr.length;

  for (let i = 0; i < len; i++) {
    let min = i;
    for (let j = i + 1; j < len; j++) {
      setSelectedIndices([min, j]);
      await delay(ms);
      if (arr[min] > arr[j]) {
        min = j;
      }
    }
    if (min !== i) {
      [arr[i], arr[min]] = [arr[min], arr[i]];
      setArray([...arr]);
      setSelectedIndices([i, min]);
      await delay(ms);
    }
  }
  setSelectedIndices([]);

  for (let i = 0; i < nums.length; i++) {
    setSelectedIndices((value) => [...value, i]);
    await delay(ms);
  }
};
