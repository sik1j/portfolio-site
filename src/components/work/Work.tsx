import React from "react";
import TextReveal from "../hero/TextReveal/TextReveal";
import styles from "./Work.module.css";
import WorkCard from "./WorkCard/WorkCard";

interface Props {
  scrollPos: number;
}

const Work: React.FC<Props> = ({ scrollPos }) => {
  return (
    <div className={styles.container}>
      {scrollPos >= 862 && scrollPos < 862 + 750 && (
        <>
          <WorkCard
            index={"01"}
            title="JSKW Eng"
            skills={["Next.js", "Typescript", "Figma"]}
            description="Modern Design for a engineering consultancy company built on monder technologies."
            imgSrc="../../assets/imgs/JSKW.PNG"
          />
          <TextReveal className={styles.img}>
            <img src={require("../../assets/imgs/JSKW.PNG")} alt="site" />
          </TextReveal>
        </>
      )}
      {scrollPos >= 862 + 750 && scrollPos < 862 + 750 * 2 && (
        <>
          <WorkCard
            index={"02"}
            title="QE Library"
            skills={["Node.js", "Express", "Pug", "MongoDB"]}
            description="Library managment site to handle books, authors, and general library functions."
            imgSrc={require("../../assets/imgs/LocalLibrary.PNG")}
          />
          <TextReveal className={styles.img}>
            <img
              src={require("../../assets/imgs/LocalLibrary.PNG")}
              alt="site"
            />
          </TextReveal>
        </>
      )}
      {scrollPos >= 862 + 750 * 2 && scrollPos < 862 + 750 * 3 && (
        <>
          <WorkCard
            index={"03"}
            title="Inter-A"
            skills={["Next.js", "Typescript", "Tailwindcss", "Sheets"]}
            description="Site for an academic program that handles applicants with google sheets."
            imgSrc="/src/assets/imgs/Inter-A.PNG"
          />
          <TextReveal className={styles.img}>
            <img src={require("../../assets/imgs/Inter-A.PNG")} alt="site" />
          </TextReveal>
        </>
      )}
    </div>
  );
};

export default Work;
