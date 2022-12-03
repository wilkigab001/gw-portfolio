import React from "react";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.allHeader}>
      <div className={styles.headerTitle}> Gabriel Wilkins </div>
      <div className={styles.listItems}>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About me</a>
        </li>
        <li>
          <a href="#">Portfolio</a>
        </li>
      </div>
    </div>
  );
};

export default Header;
