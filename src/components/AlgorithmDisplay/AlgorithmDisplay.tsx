import React from "react";
import styles from "./AlgorithmDisplay.module.css";

interface Props {
  array: number[];
  max: number;
  selectedIndeces: number[];
}

const AlgorithmDisplay: React.FC<Props> = ({ array, max, selectedIndeces }) => {
  return (
    <div className={styles.container}>
      {array.map((a, index) => {
        const isSelected = selectedIndeces.includes(index);
        return (
          <div
            className={styles.item}
            style={{
              height: `${(a / max) * 100}%`,
              backgroundColor: isSelected
                ? "var(--selected-bars)"
                : "var(--standard-bars)",
            }}
            key={index}
          ></div>
        );
      })}
    </div>
  );
};

export default AlgorithmDisplay;
