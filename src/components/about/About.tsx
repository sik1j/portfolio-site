import React, { useEffect, useState } from "react";
import styles from "./About.module.css";

interface Props {
  scrollPos: number;
}

const About: React.FC<Props> = ({ scrollPos }) => {
  return (
    <div className={"relative overflow-hidden " + styles.container}>
      <div
        className={styles.paralaxText}
        style={{ transform: `translateX(${(scrollPos - 250) / 15}%)` }}
      >
        About Me
      </div>
      <div className={styles.main + " avenirRoman"}>
        Full-Stack developer who cares deeply about user experience. Serious
        passion for UI design and new technologies.
      </div>
    </div>
  );
};

export default About;
