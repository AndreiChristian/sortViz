import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <div className={styles.card}>
      <h1>WizSort</h1>
      <p>
        Have you ever found yourself struggling to understand how a sorting
        algorithm work? Feeling like you understand it but not sure? This must
        have made rather nervous for your next technical interview. While
        sorting algorithms (and DSA in general) require practice and there is no
        shortcut, visualization can be of great help.
      </p>
      <p>I hope this helps,</p>
      <span>
        by{" "}
        <a href="https://github.com/AndreiChristian" target="blank">
          Andrei Christian Netoiu
        </a>
      </span>
    </div>
  );
};

export default Hero;
