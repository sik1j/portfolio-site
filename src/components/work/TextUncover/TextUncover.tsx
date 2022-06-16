import React from "react";
import styles from "./TextUncover.module.css";

interface Props {
  children: React.ReactNode;
  className?: string;
}

const TextUncover: React.FC<Props> = ({ children, className }) => {
  return (
    <div className={styles.container + " " + className}>
      <div className="relative">
        <div className={styles.textShow}>{children}</div>
        <span className={styles.animation} />
      </div>
    </div>
  );
};

export default TextUncover;
