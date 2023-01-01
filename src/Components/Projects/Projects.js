import React from "react";
import styles from "./Projects.module.css";
import { Link } from "react-router-dom";


const Projects = () => {
  return (
    <div className={styles.projects}>
      <div className={styles.projectList}>
        <section className={styles.projectLeft}>
          <h3 className={styles.projectHeader}>Trip Planner</h3>
          <iframe
            className={styles.projectIframe}
            src="https://www.youtube.com/embed/GJntYiXRjKE"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </section>

        <section className={styles.projectRight}>
          <p className={styles.description}>
            A fullstack application that allowed you to choose new spots for
            vacation, and allow you to add details. It also had an
            authentication page to let you login and save your vacation ideas.
          </p>
        </section>
      </div>
      <div className={styles.projectList}>
        <section className={styles.projectLeft}>
          <h3 className={styles.projectHeader}>Trail Rating</h3>
          <iframe
            className={styles.projectIframe}
            src="https://www.youtube.com/embed/a0DvDTZkXks"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </section>

        <section className={styles.projectRight}>
          <p className={styles.description}>
            This was a Fullstack application I built to be able to help me
            remember trails that I have ridden and if I want to go back and ride
            them again!
          </p>
        </section>
      </div>
    </div>
  );
};

export default Projects;
