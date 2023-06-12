import { useState } from "react";
import styles from "./App.module.css";
import AlgorithmCard from "./components/AlgorithmCard/AlgorithmCard";
import Toc from "./components/TOC/Toc";
import { algorithms } from "./data/algorithms";
import Hero from "./components/Hero/Hero";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setDarkMode((value) => !value);
  };

  return (
    <div className={`${styles.container} ${!darkMode && styles.light}`}>
      <Toc toggleDarkMode={toggleDarkMode} />
      <div className={`${styles.list}  `}>
        <Hero />
        {algorithms.map((a) => {
          return (
            <AlgorithmCard
              description={a.description}
              key={a.id}
              name={a.name}
              id={a.id}
              sort={a.sort}
              tags={a.tags}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
