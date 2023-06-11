import styles from "./App.module.css";
import AlgorithmCard from "./components/AlgorithmCard/AlgorithmCard";
import Toc from "./components/TOC/Toc";
import { algorithms } from "./data/algorithms";

function App() {
  const dark = true;

  return (
    <div className={`${styles.container} ${!dark && styles.light}`}>
      <Toc />
      <div className={`${styles.list} {!dark && styles.light} `}>
        {algorithms.map((a) => {
          return (
            <AlgorithmCard
              description={a.description}
              key={a.id}
              name={a.name}
              id={a.id}
              sort={a.sort}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
