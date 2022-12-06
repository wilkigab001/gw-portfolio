import React from "react";
import styles from "./Portfolio.module.css";
import {
  SiPostgresql,
  SiReact,
  SiHtml5,
  SiCsswizardry,
  SiJavascript,
  SiGithub
} from "react-icons/si";
import { DiNodejsSmall } from "react-icons/di";

const Portfolio = () => {
  return (
    <div className={styles.allProfile}>
      Portfolio
      <div className={styles.listItems}>
        <li>
          <SiPostgresql size={40} />
        </li>
        <li>
          <SiReact size={40} />
        </li>
        <li>
          <SiHtml5 size={40} />
        </li>
        <li>
          <SiCsswizardry size={40} />
        </li>
        <li>
          <SiJavascript size={40} />
        </li>
        <li>
          <DiNodejsSmall size={40} />
        </li>
        <li>
          <SiGithub size={40} />
        </li>
      </div>
    </div>
  );
};

export default Portfolio;
