import styles from "./AlgorithmCard.module.css";
import { Algorithm } from "../../data/algorithms";
import { createRandomArray } from "../../utils/createRandomArray";
import AlgorithmDisplay from "../AlgorithmDisplay/AlgorithmDisplay";
import { useState } from "react";
import ActionBar from "../ActionBar/ActionBar";

const AlgorithmCard = ({
  id,
  name,
  sort,
  description,
  tags,
  links,
}: Algorithm) => {
  const [min, setMin] = useState<number>(30);
  const [max, setMax] = useState<number>(100);
  const [length, setLength] = useState<number>(50);

  const [delay, setDelay] = useState<number>(1);

  const [array, setArray] = useState<number[]>(
    createRandomArray(length, min, max)
  );
  const [selectedIndices, setSelectedIndices] = useState<number[]>([]);

  const programmingLanguages: any = {
    0: "Typescript",
    1: "Go",
    2: "Python",
    3: "Dart",
  };

  return (
    <div className={styles.card} id={`section${id}`}>
      <ActionBar
        array={array}
        name={name}
        delay={delay}
        setArray={setArray}
        setSelectedIndices={setSelectedIndices}
        sort={sort}
        max={max}
        min={min}
        length={length}
        tags={tags}
      />
      <AlgorithmDisplay
        array={array}
        max={max}
        selectedIndeces={selectedIndices}
      />
      <p>{description}</p>

      {links && (
        <div style={{ alignSelf: "flex-start" }}>
          Code:{" "}
          {links.map((link, index) => {
            return (
              <span>
                <a
                  target="_blank"
                  style={{
                    borderBottom: "1px solid ",
                    borderColor: "inherit",
                    margin: "0 0.5vw",
                  }}
                  href={link}
                >
                  {programmingLanguages[index]}
                </a>
              </span>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default AlgorithmCard;
