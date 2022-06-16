import React from "react";
import styles from "./TextReveal.module.css";

interface Props {
  children: React.ReactNode;
  className?: string;
}

const TextReveal: React.FC<Props> = ({ children, className }) => {
  return (
    <div className="relative">
      <div className={`${styles.animate} ${className}`}>{children}</div>
      <span className={styles.whiteBlock} />
    </div>
  );
};

export default TextReveal;
