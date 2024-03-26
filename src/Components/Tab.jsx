import { useState } from "react";
import styles from "./Tab.module.scss";

export default function Tab({ tabsTitle, data }) {
  const [activeTab, setActiveTab] = useState(0);

  const renderedTabs = tabsTitle.map((tab, index) => {
    return (
      <li
        className={`${styles.tab} ${activeTab === index ? styles.active : ""}`}
        onClick={() => setActiveTab(index)}
        key={index}>
        {tab || "No Title Found"}
      </li>
    );
  });

  const renderedContent = data.map((content, index) => {
    return activeTab === index ? (
      <li className={styles.content} key={index}>
        {content || "No Data to Show"}
      </li>
    ) : null;
  });

  return (
    <div>
      <ul className={styles.tabs_wrapper}>{renderedTabs}</ul>
      <ul className={styles.tabs_content_wrapper}>
        {renderedContent.some((item) => item !== null) ? (
          renderedContent
        ) : (
          <li className={styles.content}>
            <h1>No Data to Show</h1>
          </li>
        )}
      </ul>
    </div>
  );
}
