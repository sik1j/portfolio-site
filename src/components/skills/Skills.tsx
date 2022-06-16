import React from "react";
import styles from "./Skills.module.css";

interface Props {
  scrollPos: number;
}

const Skills: React.FC<Props> = ({ scrollPos }) => {
  return (
    <div className={"relative overflow-hidden " + styles.container}>
      <div
        className={styles.paralaxText}
        style={{ transform: `translateX(${(scrollPos - 3000) / 15}%)` }}
      >
        SKILLS
      </div>
      <div className={styles.main + " avenirRoman"}>
        <div className={styles.top}>
          <ul>
            <li>HTML</li>
            <li>Javascript</li>
            <li>Css</li>
          </ul>
          <ul>
            <li>UI/UX Design</li>
            <li>Figma</li>
          </ul>
        </div>
        <div className={styles.bottom}>
          <ul>
            <li>React</li>
            <li>Typescript</li>
            <li>Tailwindcss</li>
          </ul>
          <ul>
            <li>Node.js</li>
            <li>Postgre SQL</li>
            <li>MongoDB</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;
