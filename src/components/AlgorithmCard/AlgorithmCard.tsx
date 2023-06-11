import styles from "./AlgorithmCard.module.css";
import { Algorithm } from "../../data/algorithms";

const AlgorithmCard = ({ id, name }: Algorithm) => {
  return (
    <div className={styles.card}>
      <h1>{id}</h1>
      <h1>{name}</h1>
    </div>
  );
};

export default AlgorithmCard;
