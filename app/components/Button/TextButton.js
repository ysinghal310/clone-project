"use client";
import styles from "./textbutton.module.css";
import { BsArrowRight } from "react-icons/bs";

const TextButton = ({ children }) => {
  return (
    <button className={styles.btn}>
      {children} <BsArrowRight size={26} />
    </button>
  );
};

export default TextButton;
