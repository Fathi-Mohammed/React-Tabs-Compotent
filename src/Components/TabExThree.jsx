// import TabVerTwo from "./TabVerTwo";
import { useEffect, useState } from "react";
import SignIn from "./SignIn";
import { Tabs } from "./Tabs";

export default function TabExThree() {
  const [activeTab, setActiveTab] = useState(2);
  const [value, setValue] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    setActiveTab(+value);
  }

  const handleChange = (index) => {
    setActiveTab(index);
    console.log("activeTab", activeTab);
  }

  useEffect(() => {
    console.log("activeTab", activeTab);
  }, [activeTab]);

  const items = [
    {
      key: 1,
      title: "Sign In",
      children: <SignIn />,

    },
    {
      key: 2,
      title: "Database",
      children: <div>Database</div>,
    },
    {
      key: 3,
      title: "Documents",
      children: <div>Documents</div>,
    },
  ];
  return (

    <>
    <input type="number" onChange={(e) => setValue(e.target.value)} value={value}  />
    <button onClick={handleSubmit}>Set active tab</button>
    <Tabs items={items} indexOfActiveTab={activeTab} onChange={handleChange}/>
    </>
  );
}
