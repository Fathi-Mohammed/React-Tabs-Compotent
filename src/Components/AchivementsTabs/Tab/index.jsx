import React from "react";
import styles from "./styles.module.scss";

export default function Tab({ title, icon, isactive, onClick }) {
  return (
    <li
      className={`${styles.tab} ${isactive ? styles.active : ""}`}
      onClick={onClick}>
      <div className={styles.icon}>{icon}</div>
      {title}
    </li>
  );
}
