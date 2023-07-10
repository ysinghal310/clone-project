"use client";
import styles from "./footer.module.css";
import Link from "next/link";
import SingleColumn from "./SingleColumn";
import Gap from "../UI/Gap";
import footerMenuArray from "./links";

const Footer = () => {
  return (
    <footer className={styles.container}>
      <div className={styles.wrapper}>
        <Link href="/" className={styles.logo}>
          <img
            width="220"
            src="https://assets-global.website-files.com/63105b5082760e06eb992f00/63170d2f91a50a5b4de9e8f6_Labster%20logo_white.svg"
            alt="logo"
          />
        </Link>
        <Gap />
        <Gap />
        <div className={styles.link_container}>
          {footerMenuArray.map((item) => (
            <SingleColumn
              key={item.id}
              heading={item.heading}
              linkArray={item.linkArray}
            />
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
