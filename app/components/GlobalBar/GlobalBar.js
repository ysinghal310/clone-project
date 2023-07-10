"use client";
import Link from "next/link";
import styles from "./globalBar.module.css";
import { AiFillQuestionCircle } from "react-icons/ai";
import { useMediaQuery } from "react-responsive";

const GlobalBar = () => {
  const isTablet = useMediaQuery({ query: "(min-width: 780px)" });

  return (
    <div className={styles.bar_wrapper}>
      <div className={styles.bar_container}>
        {isTablet && (
          <span className={styles.bar_link}>
            <Link href="/nursing">Nursing</Link>
          </span>
        )}
        <span className={styles.bar_link}>
          <AiFillQuestionCircle size={24} />
          <Link href="/help_center">Help Center</Link>
        </span>
        <span className={styles.bar_link}>
          <Link href="/english">English</Link>
        </span>
        <span className={styles.bar_link}>
          <Link href="/login">Login</Link>
        </span>
      </div>
    </div>
  );
};

export default GlobalBar;
