export const createRandomArray = (
  length: number,
  min = 0,
  max: number
): number[] => {
  const array: number[] = [];

  for (let i = 0; i < length; i++) {
    array.push(Math.ceil(min + Math.random() * (max - min)));
  }

  return array;
};
