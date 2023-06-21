import { delay } from "../../utils/delay";

export const insertionSort = async (
  nums: number[],
  setArray: React.Dispatch<React.SetStateAction<number[]>>,
  setSelectedIndices: React.Dispatch<React.SetStateAction<number[]>>,
  ms: number
): Promise<void> => {
  console.log("sorting");
  const arr = [...nums];

  for (let i = 1; i < arr.length; i++) {
    const key = arr[i];
    let j = i - 1;

    setSelectedIndices([i]);
    await delay(ms);

    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;

      setArray([...arr]);
      setSelectedIndices([i, j + 1]);
      await delay(ms);
    }

    arr[j + 1] = key;
    setSelectedIndices([]);

    setArray([...arr]);
  }
  setSelectedIndices([]);

  for (let i = 0; i < nums.length; i++) {
    setSelectedIndices((value) => [...value, i]);
    await delay(ms);
  }
};
