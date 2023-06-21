import { delay } from "../../utils/delay";

export const shellSort = async (
  nums: number[],
  setArray: React.Dispatch<React.SetStateAction<number[]>>,
  setSelectedIndices: React.Dispatch<React.SetStateAction<number[]>>,
  ms: number
): Promise<void> => {
  const arr = [...nums];
  const n = arr.length;

  for (let gap = Math.floor(n / 2); gap > 0; gap = Math.floor(gap / 2)) {
    for (let i = gap; i < n; i += 1) {
      const temp = arr[i];
      let j;
      for (j = i; j >= gap && arr[j - gap] > temp; j -= gap) {
        setSelectedIndices([j, j - gap]);
        await delay(ms);
        arr[j] = arr[j - gap];
        setArray([...arr]);
      }
      arr[j] = temp;
    }
  }

  setArray([...arr]);
  setSelectedIndices([]);

  for (let i = 0; i < nums.length; i++) {
    setSelectedIndices((value) => [...value, i]);
    await delay(ms);
  }
};
