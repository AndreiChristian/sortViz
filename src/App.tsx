import styles from "./App.module.css";
import AlgorithmCard from "./components/AlgorithmCard/AlgorithmCard";
import { algorithms } from "./data/algorithms";

function App() {
  return (
    <div className={`${styles.container} `}>
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
  );
}

export default App;
