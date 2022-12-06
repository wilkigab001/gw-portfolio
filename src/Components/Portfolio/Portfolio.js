import React from "react";
import styles from "./Portfolio.module.css";
import Slider from "react-slick";

const Portfolio = () => {
  const settings = {
    dots: true,
    speed: 100,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className={styles.allProfile}>
      Portfolio
    </div>
  );
};

export default Portfolio;
