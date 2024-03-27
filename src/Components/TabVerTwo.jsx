/*
  TabVerTwo.jsx
  Props:
    -> children: React Elements
    -> indexOfActiveTab: number
    -> active: string (used in children to set active tab) Ex : <Tab label="Tab 1" active="true" />

  Priority order for Setting active tab:
    1. children prop
    2. indexOfActiveTab prop
*/

import { useMemo, useState } from "react";
import styles from "./TabsVerTwo.module.scss";

export default function TabVerTwo({ children, indexOfActiveTab }) {
  // set active tab from children
  const indexOfChildActiveTab = children.findIndex(
    (child) => child.props.active
  );
  const defaultActiveTabFromChildrenProp =
    indexOfChildActiveTab === -1 ? 0 : indexOfChildActiveTab;

  // set active tab from props
  const defaultActiveTabFromProps =
    indexOfActiveTab > children.length - 1 ? 0 : indexOfActiveTab;

  const [activeTab, setActiveTab] = useState(
    defaultActiveTabFromChildrenProp || defaultActiveTabFromProps || 0
  );

  const tabs = children.map((tab, index) => {
    const label = tab.props.label;
    return (
      <li
        className={`${styles.tab} ${activeTab === index ? styles.active : ""}`}
        key={index}
        onClick={() => setActiveTab(index)}>
        {tab.props.icon}{label}
      </li>
    );
  });

  const contents = useMemo(() => children[activeTab], [children, activeTab]);

  return (
    <div>
      <ul className={styles.tabsWrapper}>{tabs}</ul>
      {contents}
    </div>
  );
}
