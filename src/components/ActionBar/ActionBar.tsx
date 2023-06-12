import React from "react";
import styles from "./ActionBar.module.css";
import { createRandomArray } from "../../utils/createRandomArray";

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
  min: number;
  max: number;
  length: number;
  tags: string[];
}

const ActionBar: React.FC<Props> = ({
  name,
  delay,
  sort,
  array,
  setArray,
  setSelectedIndices,
  min,
  max,
  length,
  tags,
}) => {
  return (
    <div className={styles.row}>
      <h1>{name}</h1>

      {tags.map((t) => {
        return <span>{t}</span>;
      })}

      <div className={styles.spacer}></div>

      <button
        className={styles.play}
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

      <button
        className={styles.restart}
        onClick={() => {
          setArray(createRandomArray(length, min, max));
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
            d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
          />
        </svg>
      </button>
    </div>
  );
};

export default ActionBar;
