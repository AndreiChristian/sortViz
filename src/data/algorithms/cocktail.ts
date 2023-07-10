import { delay } from "../../utils/delay";

export const cocktailSort = async (
  nums: number[],
  setArray: React.Dispatch<React.SetStateAction<number[]>>,
  setSelectedIndices: React.Dispatch<React.SetStateAction<number[]>>,
  ms: number
): Promise<void> => {
  let isSwapped = true;
  let start = 0;
  let end = nums.length;

  while (isSwapped === true) {
    isSwapped = false;

    for (let i = start; i < end - 1; ++i) {
      if (nums[i] > nums[i + 1]) {
        [nums[i], nums[i + 1]] = [nums[i + 1], nums[i]];
        setSelectedIndices([i, i + 1]);
        await delay(ms);
        setArray([...nums]);
        isSwapped = true;
      }
    }

    if (!isSwapped) {
      break;
    }

    isSwapped = false;
    end = end - 1;

    for (let i = end - 1; i >= start; --i) {
      if (nums[i] > nums[i + 1]) {
        [nums[i], nums[i + 1]] = [nums[i + 1], nums[i]];
        setSelectedIndices([i, i + 1]);
        await delay(ms);
        setArray([...nums]);
        isSwapped = true;
      }
    }

    start = start + 1;
  }

  setSelectedIndices([]);

  for (let i = 0; i < nums.length; i++) {
    setSelectedIndices((value) => [...value, i]);
    await delay(ms);
  }

  await delay(ms);
  setSelectedIndices([]);
};
