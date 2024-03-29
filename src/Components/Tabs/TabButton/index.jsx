import React from "react";
import styles from "./styles.module.scss";

export default function TabButton({ title, isActive, onClick }) {
  return (
    <button
      className={`${styles.tab} ${isActive ? styles.active : ""}`}
      onClick={onClick}
      disabled={isActive}
      >
      {title}
    </button>
  );
}
