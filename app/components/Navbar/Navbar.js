"use client";
import { useMediaQuery } from "react-responsive";
import Button from "../Button/Button";
import styles from "./navbar.module.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const isMdScreen = useMediaQuery({ query: "(max-width: 1080px)" });
  const [isMobMenuOpen, setIsMobMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <div className={styles.navContainer}>
        <Link href="/" className={styles.logo}>
          <img
            loading="lazy"
            width="220"
            src="https://assets-global.website-files.com/63105b5082760e06eb992f00/6318857268327f40b9b4ec2c_Labster%20logo_Brand%20Blue.svg"
            alt="logo"
          />
        </Link>
        <div className={styles.rightMenu}>
          <ul className={styles.menu}>
            <li className={styles.menuItem}>
              <Link href="/simulatiob">Simulations</Link>
            </li>
            <li className={styles.menuItem}>
              <Link href="/how_it_works">How it works</Link>
            </li>
            <li className={styles.menuItem}>
              <Link href="/pricing">Pricing</Link>
            </li>
            <li className={styles.menuItem}>
              <Link href="/resources">Resources</Link>
            </li>
            <li className={styles.menuItem}>
              <Link href="/contact_us">Contact us</Link>
            </li>
          </ul>
          <Button>Get Started</Button>
        </div>

        {isMdScreen && (
          <div className={styles.mobMenuIcon}>
            <GiHamburgerMenu size={24} />
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
