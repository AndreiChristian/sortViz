import { delay } from "../../utils/delay";

// ! bubble sort
export const bubbleSort = (
  nums: number[],
  setArray: React.Dispatch<React.SetStateAction<number[]>>,
  setSelectedIndices: React.Dispatch<React.SetStateAction<number[]>>,
  ms: number
): void => {
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = 0; j < nums.length - i - 1; j++) {
      setSelectedIndices([j, j + 1]);
      if (nums[j] > nums[j + 1]) {
        [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]];
      }
      delay(ms);
      setArray(nums);
    }
  }
  console.log("Final", ...nums);
};
