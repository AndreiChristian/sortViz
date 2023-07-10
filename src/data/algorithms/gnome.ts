import { delay } from "../../utils/delay";

export const gnomeSort = async (
  nums: number[],
  setArray: React.Dispatch<React.SetStateAction<number[]>>,
  setSelectedIndices: React.Dispatch<React.SetStateAction<number[]>>,
  ms: number
): Promise<void> => {
  let pos = 0;

  while (pos < nums.length) {
    if (pos == 0 || nums[pos] >= nums[pos - 1]) {
      pos = pos + 1;
      setSelectedIndices([pos]);
      await delay(ms);
      setArray([...nums]);
    } else {
      [nums[pos], nums[pos - 1]] = [nums[pos - 1], nums[pos]];
      setSelectedIndices([pos, pos - 1]);
      await delay(ms);
      setArray([...nums]);
      pos = pos - 1;
    }
  }

  setSelectedIndices([]);

  for (let i = 0; i < nums.length; i++) {
    setSelectedIndices((value) => [...value, i]);
    await delay(ms);
  }

  await delay(3 * ms);
  setSelectedIndices([]);
};
