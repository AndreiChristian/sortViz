import React from "react";
import styles from "./ActionBar.module.css";

interface Props {
  name: string;
  delay: number;
  sort: (
    nums: number[],
    setArray: React.Dispatch<React.SetStateAction<number[]>>,
    setSelectedIndices: React.Dispatch<React.SetStateAction<number[]>>,
    ms: number
  ) => Promise<void>;
  array: number[];
  setArray: React.Dispatch<React.SetStateAction<number[]>>;
  setSelectedIndices: React.Dispatch<React.SetStateAction<number[]>>;
}

const ActionBar: React.FC<Props> = ({
  name,
  delay,
  sort,
  array,
  setArray,
  setSelectedIndices,
}) => {
  return (
    <div className={styles.row}>
      <h1>{name}</h1>
      <button
        onClick={() => {
          sort(array, setArray, setSelectedIndices, delay);
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"
          />
        </svg>
      </button>
    </div>
  );
};

export default ActionBar;
