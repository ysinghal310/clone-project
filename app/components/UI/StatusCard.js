import React from "react";
import styles from "./statuscard.module.css";
import Gap from "./Gap";
import { BsFillArrowRightCircleFill } from "react-icons/bs";

const StatusCard = ({ title = "", subtitle = "" }) => {
  return (
    <div className={styles.card}>
      <Gap />
      <h2 className={styles.heading}>{title}</h2>
      <p className={styles.subheading}>{subtitle}</p>
      <Gap />
      <BsFillArrowRightCircleFill className={styles.right_Arrow_icon} />
    </div>
  );
};

export default StatusCard;
