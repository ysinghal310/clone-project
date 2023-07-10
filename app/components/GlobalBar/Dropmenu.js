// DropdownMenu.js
"use client";
import React, { useState } from "react";
import styles from "./dropmenu.module.css";

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.dropdown}>
      <div
        className={styles.dropdownItem}
        onMouseEnter={handleMenuToggle}
        onMouseLeave={handleMenuToggle}
      >
        Hover Me
        {isOpen && (
          <div className={styles.dropdownMenu}>
            <ul>
              <li>Option 1</li>
              <li>Option 2</li>
              <li>Option 3</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default DropdownMenu;
