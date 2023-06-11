import React from "react";
import styles from "./AlgorithmDisplay.module.css";

interface Props {
  array: number[];
  max: number;
}

const AlgorithmDisplay: React.FC<Props> = ({ array, max }) => {
  return (
    <div className={styles.container}>
      {array.map((a, index) => {
        return (
          <div
            className={styles.item}
            style={{ height: `${(a / max) * 100}%` }}
            key={index}
          ></div>
        );
      })}
    </div>
  );
};

export default AlgorithmDisplay;
