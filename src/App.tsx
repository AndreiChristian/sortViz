import styles from "./App.module.css";
import AlgorithmCard from "./components/AlgorithmCard/AlgorithmCard";
import { algorithms } from "./data/algorithms";

function App() {
  return (
    <div className={styles.container}>
      {algorithms.map((a) => {
        return <AlgorithmCard key={a.id} name={a.name} id={a.id} />;
      })}
    </div>
  );
}

export default App;
