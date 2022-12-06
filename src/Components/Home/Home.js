import React from "react";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={styles.allHome}>
      <div className={styles.innerHome}>
        <div className={styles.textHome}>
          <h1>Gabriel Wilkins</h1>
          <h4> FULL-STACK WEB DEVELOPER </h4>
        </div>
      </div>
    </div>
  );
};

export default Home;
