import { delay } from "../../utils/delay";

export const bucketSort = async (
  nums: number[],
  setArray: React.Dispatch<React.SetStateAction<number[]>>,
  setSelectedIndices: React.Dispatch<React.SetStateAction<number[]>>,
  ms: number
): Promise<void> => {
  let arr = [...nums];
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  const range = max - min;
  const count = arr.length;
  const bucketCount = Math.floor(Math.sqrt(count)) + 1; // bucket count = sqrt(n)
  const buckets: number[][] = new Array(bucketCount).fill(0).map(() => []);

  for (const num of arr) {
    const index = Math.floor((bucketCount * (num - min)) / (range + 1)); // calculate index for each bucket
    buckets[index].push(num);
  }

  arr = [];
  for (let i = 0; i < bucketCount; i++) {
    buckets[i].sort((a, b) => a - b); // sort individual buckets
    for (let j = 0; j < buckets[i].length; j++) {
      arr.push(buckets[i][j]);
      setSelectedIndices([arr.length - 1]);
      setArray([...arr]);
      await delay(ms);
    }
  }
  setSelectedIndices([]);

  for (let i = 0; i < nums.length; i++) {
    setSelectedIndices((value) => [...value, i]);
    await delay(ms);
  }
};
