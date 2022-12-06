import React from "react";
import styles from "./Header.module.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className={styles.allHeader}>
      <div className={styles.headerTitle}> Gabriel Wilkins </div>
      <div className={styles.listItems}>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/AboutMe">About me</NavLink>
        </li>
        <li>
          <NavLink to="/Portfolio">Portfolio</NavLink>
        </li>
      </div>
    </div>
  );
};

export default Header;
