import { useEffect, useMemo, useState } from "react";
import styles from "./styles.module.scss";
import TabButton from "./TabButton";
import { useQueryTab } from "./hooks/useQueryTab";
import { getInitalActiveTab } from "./utils/searchParamsInit";

export const Tabs = ({ items, indexOfActiveTab , onChange }) => {
  const [activeTab, setActiveTab] = useState(getInitalActiveTab(indexOfActiveTab) ?? 0);
  const { setActiveTabQuery } = useQueryTab(activeTab);
  const activeTabContent = useMemo(() => items[activeTab].children,[items, activeTab]);

  const handleChange = (index) => {
    setActiveTab(index);
    setActiveTabQuery(index);
    if (onChange) onChange(index);
  }
  
  useEffect(() => {
    if (onChange) {
      setActiveTab(indexOfActiveTab);
      setActiveTabQuery(indexOfActiveTab);
    } 
  }, [indexOfActiveTab]);
  
  return (
    <div>
      <div className={styles.tabsWrapper}>
        {items.map((item, index) => (
            <TabButton
              key={index}
              title={item.title}
              isActive={index === activeTab}
              onClick={() => handleChange(index)}
            />
        ))}
      </div>
      {activeTabContent}
    </div>
  );
};
