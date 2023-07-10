import React from "react";
import styles from "./stemprogram.module.css";
import Gap from "../UI/Gap";
import ImageStatusCard from "../UI/ImageStatusCard";
import StatusCard from "../UI/StatusCard";
import TextButton from "../Button/TextButton";

const StemProgram = () => {
  return (
    <section className={styles.container}>
      <div className={styles.wrapper}>
        <h2 className={styles.heading}>
          Explore Virtual Labs for Your STEM Programs
        </h2>
        <div className={styles.btn_cont}>
          <TextButton>Search simulations</TextButton>
        </div>
        <Gap />
        <div className={styles.display_card_cont}>
          <ImageStatusCard
            title="Higher Education"
            subtitle="246+ simulations"
            list={[
              { id: 1, text: "College" },
              { id: 2, text: "University" },
            ]}
          />
          <ImageStatusCard
            title="High School"
            subtitle="168+ simulations"
            list={[
              { id: 1, text: "AP" },
              { id: 2, text: "IB" },
              { id: 3, text: "NGSS" },
            ]}
          />
        </div>
        <Gap />
        <div className={styles.status_card_cont}>
          <StatusCard title="Biology" subtitle="190+ simulations" />
          <StatusCard title="Chemistry" subtitle="100+ simulations" />
          <StatusCard title="Physics" subtitle="40+ simulations" />
          <StatusCard title="+35 others" subtitle="300+ simulations" />
        </div>
      </div>
    </section>
  );
};

export default StemProgram;
