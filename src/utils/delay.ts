export const delay = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));

//   import { useEffect, useState } from "react";
// import { createRandomArray } from "../utils/createRandomArray";

// function Bar() {
//   const max = 10;
//   const [array, setArray] = useState<number[]>([]);
//   const [selectedIndices, setSelectedIndices] = useState<number[]>([]);

//   useEffect(() => {
//     const newArray = createRandomArray(10, 0, max);
//     setArray(newArray);
//   }, []);

//   const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

//   const bubbleSort = async (nums: number[]): Promise<void> => {
//     console.log("sorting");
//     const arr = [...nums];

//     for (let i = 0; i < arr.length - 1; i++) {
//       for (let j = 0; j < arr.length - i - 1; j++) {
//         setSelectedIndices([j, j + 1]); // Highlight the selected elements
//         await delay(300); // Delay to visualize the selected elements

//         if (arr[j] > arr[j + 1]) {
//           [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
//           setArray([...arr]);
//         }
//       }
//     }

//     setSelectedIndices([]); // Clear the highlighted elements
//     console.log("sorting is done");
//   };

//   return (
//     <>
//       <div
//         style={{
//           display: "flex",
//           alignItems: "flex-end",
//           justifyContent: "center",
//           height: "10vw",
//           gap: "1vw",
//         }}
//       >
//         {array.map((a, index) => {
//           const isSelected = selectedIndices.includes(index);
//           return (
//             <div
//               key={index}
//               style={{
//                 height: `${(a / max) * 100}%`,
//                 backgroundColor: isSelected ? "red" : "white", // Highlight selected elements
//                 width: "1vw",
//               }}
//             ></div>
//           );
//         })}
//       </div>
//       <button onClick={() => bubbleSort(array)}>Sort</button>
//     </>
//   );
// }

// export default Bar;
