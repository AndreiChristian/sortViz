import styles from "./AlgorithmCard.module.css";
import { Algorithm } from "../../data/algorithms";
import { createRandomArray } from "../../utils/createRandomArray";
import AlgorithmDisplay from "../AlgorithmDisplay/AlgorithmDisplay";

const AlgorithmCard = ({ name }: Algorithm) => {
  const max = 100;
  const arr: number[] = createRandomArray(200, 30, max);

  return (
    <div className={styles.card}>
      <h1>{name}</h1>
      <AlgorithmDisplay array={arr} max={max} />
    </div>
  );
};

export default AlgorithmCard;
