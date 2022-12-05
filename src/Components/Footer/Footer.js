import React from "react";
import styles from "./Footer.module.css";
import {
  AiOutlineLinkedin,
  AiOutlineGithub,
  AiOutlineInstagram,
} from "react-icons/ai";

const Footer = () => {
  return (
    <div className={styles.allFooter}>
      <div className={styles.leftDiv}>
      </div>
      <div className={styles.centerDiv}>
        <p> * Site Designed and Implemented by Gabriel Wilkins in 2022</p>
      </div>
      <div className={styles.rightDiv}>
        <li>
          <a href="https://github.com/wilkigab001?tab=repositories">
            <AiOutlineLinkedin size={33} />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/gabriel-wilkins-54420b226/">
            <AiOutlineGithub size={33} />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/wilkins_Gabe/">
            <AiOutlineInstagram size={33} />
          </a>
        </li>
      </div>
    </div>
  );
};

export default Footer;
