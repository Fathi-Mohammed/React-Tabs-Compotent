/*
  TabVerTwo.jsx
  Props:
    -> children: React Elements
    -> indexOfActiveTab: number
    -> active: string (used in children to set active tab) Ex : <Tab label="Tab 1" active="true" />

  Priority order for Setting active tab:
    1. children
    2. props
*/

import { useState } from "react";

export default function TabVerTwo({ children, indexOfActiveTab }) {
  // set active tab from children
  const indexOfChildActiveTab = children.findIndex(child => child.props.active);
  const defaultActiveTabFromChildrenProp = indexOfChildActiveTab === -1 ? 0 : indexOfChildActiveTab;

  // set active tab from props
  const defaultActiveTabFromProps = indexOfActiveTab > children.length-1 ? 0 : indexOfActiveTab;

  const [activeTab, setActiveTab] = useState(
    defaultActiveTabFromChildrenProp || defaultActiveTabFromProps || 0
  );

  const tabs = children.map((tab, index) => {
    const label = tab.props.label;
    return (
      <li className="tab" key={index} onClick={() => setActiveTab(index)}>
        {label}
      </li>
    );
  });

  const contents = children.map((tab, index) => {
    const label = tab.props.label;
    return (
      activeTab === index && (
        <div className="content" key={label}>
          {tab}
        </div>
      )
    );
  });

  return (
    <div>
      <ul className="tabs">{tabs}</ul>
      <div className="tabs-content">{contents}</div>
    </div>
  );
}
