"use client";

import Button from "../Button/Button";
import TextButton from "../Button/TextButton";
import Spacer from "../UI/Spacer";
import styles from "./herosection.module.css";

const HeroSection = () => {
  return (
    <section className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.left_section}>
          <h1 className={styles.heading}>Inspire Students to Stay in STEM</h1>
          <p className={styles.subheading}>
            {`Labster’s immersive virtual labs are proven to engage students in
            science, reduce dropout rates, decrease overhead, and improve
            learning outcomes.`}
          </p>
          <div className={styles.btn_container}>
            <Button>Try for Free</Button>
            <TextButton>Get Pricing</TextButton>
          </div>
        </div>
        <div className={styles.right_section}>
          <div className={styles.atomImage}>
            <img
              src={
                "https://assets-global.website-files.com/63105b5082760e06eb992f00/6477746ba2a19699c9db0626_2Butanol-500%201.webp"
              }
              width="100%"
              alt="image"
            />
          </div>

          <div className={styles.video_wrapper}>
            <div className={styles.play_btn}>
              <img
                width="100%"
                src="https://assets-global.website-files.com/63105b5082760e06eb992f00/6477749ebae9bea8fe09f16b_play%20button.svg"
                alt="play"
              />
            </div>
            <video
              className={styles.video_player}
              width="100%"
              src="https://assets-global.website-files.com/63105b5082760e06eb992f00/649af6aee6cfcc41f578f79f_Hero%20Video%20Preview%20compressed-transcode.mp4"
              autoPlay
              loop
            />
          </div>
        </div>
      </div>
      <Spacer />
    </section>
  );
};

export default HeroSection;
