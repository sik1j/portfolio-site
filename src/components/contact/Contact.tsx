import React from "react";
import styles from "./Contact.module.css";
import Mail from "@heroicons/react/outline/MailIcon";
import { BsInstagram, BsGithub } from "react-icons/bs";
import { VscGithubAlt, VscGithub } from "react-icons/vsc";

interface Props {}

const Contact: React.FC<Props> = ({}) => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>Contact</div>
      <div className={styles.contactInfo}>
        <a href="mailto:karkisikij2@gmail.com">
          <Mail />
        </a>
        <a href="https://www.instagram.com/sik1j/?hl=en">
          <BsInstagram />
        </a>
        <a href="https://github.com/sik1j">
          <VscGithub />
        </a>
      </div>
    </div>
  );
};

export default Contact;
