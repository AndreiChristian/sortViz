function insertionSort(array: number[]) {
  for (let i = 1; i < array.length; i++) {
    let j = i - 1;
    const key = array[i];
    while (j >= 0 && array[j] > key) {
      array[j + 1] = array[j];
      j = j - 1;
    }
    array[j + 1] = key;
  }
  return array;
}

function bucketSort(array: number[], bucketSize = 5): number[] {
  if (array.length === 0) {
    return array;
  }
  let minValue = array[0];
  let maxValue = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] < minValue) {
      minValue = array[i];
    } else if (array[i] > maxValue) {
      maxValue = array[i];
    }
  }
  const bucketCount = Math.floor((maxValue - minValue) / bucketSize) + 1;
  const allBuckets = new Array(bucketCount);
  for (let i = 0; i < allBuckets.length; i++) {
    allBuckets[i] = [];
  }
  array.forEach((currentVal) => {
    allBuckets[Math.floor((currentVal - minValue) / bucketSize)].push(
      currentVal
    );
  });
  return allBuckets.reduce((resultArray, currentBucket) => {
    insertionSort(currentBucket);
    return resultArray.concat(currentBucket);
  }, []);
}
