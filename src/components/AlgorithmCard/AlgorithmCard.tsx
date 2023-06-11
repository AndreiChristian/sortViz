import styles from "./AlgorithmCard.module.css";
import { Algorithm } from "../../data/algorithms";
import { createRandomArray } from "../../utils/createRandomArray";
import AlgorithmDisplay from "../AlgorithmDisplay/AlgorithmDisplay";
import { useState } from "react";

const AlgorithmCard = ({ name, sort }: Algorithm) => {
  const max = 100;

  const [array, setArray] = useState<number[]>(createRandomArray(100, 30, 100));
  const [selectedIndices, setSelectedIndices] = useState<number[]>([]);

  return (
    <div className={styles.card}>
      <h1>{name}</h1>
      <button
        onClick={() => {
          sort(array, setArray, setSelectedIndices, 100);
        }}
      >
        Sort
      </button>
      <AlgorithmDisplay
        array={array}
        max={max}
        selectedIndeces={selectedIndices}
      />
    </div>
  );
};

export default AlgorithmCard;
