import React from "react";
import styles from "./Portfolio.module.css";
import Slider from "react-slick";

const Portfolio = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (<div className={styles.allProfile}>
    <div>
    <Slider {...settings}>
      <div>

      </div>
    </Slider>

    </div>
    Portfolio</div>);
};

export default Portfolio;
