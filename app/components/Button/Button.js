"use client";
import styles from "./button.module.css";
import clsx from "classnames";

const Button = ({
  onClick,
  isOutlined = false,
  isActive = false,
  children,
}) => {
  const button = clsx(styles.button, {
    [styles.outlined]: isOutlined,
    [styles.outlinedActive]: isActive,
  });
  return (
    <button className={button} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
