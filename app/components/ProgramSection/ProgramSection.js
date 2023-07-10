"use client";
import Button from "../Button/Button";
import Gap from "../UI/Gap";
import styles from "./programsection.module.css";

const ProgramSection = () => {
  return (
    <section className={styles.container}>
      <div className={styles.wrapper}>
        <h2 className={styles.heading}>
          Unlock the Potential of Your STEM Program
        </h2>
        <Gap />
        <div className={styles.btn_container}>
          <Button isOutlined isActive onClick={() => {}}>
            Maximize Resources
          </Button>
          <Button isOutlined onClick={() => {}}>
            Inspire Students
          </Button>
          <Button isOutlined onClick={() => {}}>
            Close Learning Gap
          </Button>
          <Button isOutlined onClick={() => {}}>
            Empower Educators
          </Button>
        </div>
        <Gap />

        <div className={styles.card}>
          <div className={styles.card_wrapper}>
            <div className={styles.card_wrapper_left}>
              <h3 className={styles.left_heading}>
                Students Step into the Shoes of Real Scientists
              </h3>
              <Gap />

              <p className={styles.left_subheading}>
                Offer students a glimpse into an exciting STEM career through
                simulations where they experience the thrill of solving
                real-world challenges.
              </p>
              <Gap />
              <Button onClick={() => {}}> Take the Product Tour</Button>
            </div>
            <div className={styles.card_wrapper_right}>
              <div className={styles.video_wrapper}>
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
        </div>
      </div>
    </section>
  );
};

export default ProgramSection;
