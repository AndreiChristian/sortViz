import { delay } from "../../utils/delay";

export const bogoSort = async (
  nums: number[],
  setArray: React.Dispatch<React.SetStateAction<number[]>>,
  setSelectedIndices: React.Dispatch<React.SetStateAction<number[]>>,
  ms: number
): Promise<void> => {
  while (!isSorted(nums)) {
    setSelectedIndices([...Array(nums.length).keys()]);
    await delay(ms);
    nums = shuffle(nums);
    setArray([...nums]);
  }

  setSelectedIndices([]);
};

// Helper function to check if the array is sorted
function isSorted(nums: number[]): boolean {
  for (let i = 1; i < nums.length; i++) {
    if (nums[i - 1] > nums[i]) {
      return false;
    }
  }
  return true;
}

// Helper function to shuffle an array
function shuffle(nums: number[]): number[] {
  for (let i = nums.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [nums[i], nums[j]] = [nums[j], nums[i]];
  }
  return nums;
}
