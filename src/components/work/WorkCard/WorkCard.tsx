import React from "react";
import TextUncover from "../TextUncover/TextUncover";
import styles from "./WorkCard.module.css";

interface Props {
  index: string;
  title: string;
  skills: string[];
  description: string;
  imgSrc: any;
}

const WorkCard: React.FC<Props> = ({ title, description, index, skills }) => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.aside}>
          <TextUncover className={styles.index}>{index}</TextUncover>
        </div>
        <div className={styles.main}>
          <TextUncover className={styles.title}>{title}</TextUncover>
          <TextUncover className={styles.skills}>
            {skills.map((skill) => {
              return (
                <span className={styles.skill} key={skill}>
                  {skill}
                </span>
              );
            })}
          </TextUncover>
          <TextUncover className={styles.description}>
            {description}
          </TextUncover>
        </div>
        <div className={styles.aside}>
          {/* <TextUncover>GitHubLink</TextUncover> */}
          <div></div>
        </div>
      </div>
    </>
  );
};

export default WorkCard;
