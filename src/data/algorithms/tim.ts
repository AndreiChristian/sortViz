import { delay } from "../../utils/delay";

export const timSort = async (
  nums: number[],
  setArray: React.Dispatch<React.SetStateAction<number[]>>,
  setSelectedIndices: React.Dispatch<React.SetStateAction<number[]>>,
  ms: number
): Promise<void> => {
  const arr = [...nums];
  const n = arr.length;
  const RUN = 32;

  // Insertion sort
  for (let i = 0; i < n; i += RUN) {
    for (let j = i + 1; j < Math.min(i + RUN, n); j++) {
      const e = arr[j];
      let k;
      for (k = j; k > i && arr[k - 1] > e; k--) {
        setSelectedIndices([k, k - 1]);
        await delay(ms);
        arr[k] = arr[k - 1];
      }
      arr[k] = e;
      setArray([...arr]);
    }
  }

  // Merge the sorted runs
  for (let size = RUN; size < n; size = 2 * size) {
    for (let left = 0; left < n; left += 2 * size) {
      const mid = left + size - 1;
      const right = Math.min(left + 2 * size - 1, n - 1);

      // Merge procedure
      let i = left;
      let j = mid + 1;
      const temp = [];
      while (i <= mid && j <= right) {
        if (arr[i] <= arr[j]) {
          temp.push(arr[i]);
          i++;
        } else {
          temp.push(arr[j]);
          j++;
        }
      }
      while (i <= mid) {
        temp.push(arr[i]);
        i++;
      }
      while (j <= right) {
        temp.push(arr[j]);
        j++;
      }
      for (i = left; i <= right; i++) {
        arr[i] = temp[i - left];
        setArray([...arr]);
        await delay(ms);
      }
    }
  }
  setSelectedIndices([]);

  for (let i = 0; i < nums.length; i++) {
    setSelectedIndices((value) => [...value, i]);
    await delay(ms);
  }
};
