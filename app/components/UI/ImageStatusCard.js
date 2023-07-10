"use client";
import React from "react";
import styles from "./imagestatuscard.module.css";
import { BiCheck } from "react-icons/bi";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import Gap from "./Gap";

const ImageStatusCard = ({
  img = "",
  title = "",
  subtitle = "",
  list = [],
}) => {
  return (
    <div className={styles.card}>
      <div className={styles.card_left}>
        <h3 className={styles.heading}>{title}</h3>
        <p className={styles.subheading}>{subtitle}</p>
        <div className={styles.list_container}>
          {list?.map((item) => (
            <span key={item.id} className={styles.list_item}>
              {item.text}
              <BiCheck />
            </span>
          ))}
        </div>
        <Gap />
        <Gap />
        <BsFillArrowRightCircleFill className={styles.right_Arrow_icon} />
      </div>
      <div className={styles.card_right}>
        <div className={styles.img_wrapper}>
          <img
            width="100%"
            src="https://assets-global.website-files.com/63105b5082760e06eb992f00/64778a8ac9b8dae9c08a5d0c_Classroom-Students-Medical-Laptop.webp"
            alt="img"
          />
        </div>
      </div>
    </div>
  );
};

export default ImageStatusCard;
