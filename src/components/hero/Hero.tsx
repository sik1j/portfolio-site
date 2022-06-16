import React from "react";
import TextReveal from "./TextReveal/TextReveal";
import styles from "./Hero.module.css";

interface Props {}

const hero: React.FC<Props> = ({}) => {
  return (
    <div className={styles.container}>
      <TextReveal className={styles.name + " valencia"}>Sikij Karki</TextReveal>
      <TextReveal className={styles.title + " sen"}>
        Full-Stack Developer & UI/UX Designer
      </TextReveal>
    </div>
  );
};

export default hero;
