import { delay } from "../../utils/delay";

export const radixSort = async (
  nums: number[],
  setArray: React.Dispatch<React.SetStateAction<number[]>>,
  setSelectedIndices: React.Dispatch<React.SetStateAction<number[]>>,
  ms: number
): Promise<void> => {
  const maxNum = Math.max(...nums);
  const digitCount = Math.floor(Math.log10(maxNum)) + 1;

  for (let i = 0; i < digitCount; i++) {
    const buckets: number[][] = Array.from({ length: 10 }, () => []);

    for (let j = 0; j < nums.length; j++) {
      setSelectedIndices([j]);
      await delay(ms);

      const digit = getDigit(nums[j], i);
      buckets[digit].push(nums[j]);
    }

    nums = ([] as number[]).concat(...buckets);

    setArray([...nums]);
    await delay(ms);
  }

  setSelectedIndices([]);
};

function getDigit(num: number, place: number): number {
  return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
}
