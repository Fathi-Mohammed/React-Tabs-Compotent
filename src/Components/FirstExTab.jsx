import Tab from "./Tab";

export default function FirstExTab() {
  const apiData = [
    {
      id: 1,
      tab: "Tab 1",
      title: "Title 1",
      dec: "lorem ipsum dolor sit amet consectetur adipisicing elit saepe ",
    },
    {
      id: 2,
      tab: "Tab 2",
      title: "Title 2",
      dec: "lorem ipsum dolor sit amet consectetur adipisicing elit saepe ",
    },
    {
      id: 3,
      tab: "Tab 3",
      title: "Title 3",
      dec: "lorem ipsum dolor sit amet consectetur adipisicing elit saepe ",
    },
  ];

  const tabsTitle = apiData.map(({ tab }) => {
    return tab;
  });

  const data = apiData.map(({ id, tab, title, dec }) => {
    return (
      <div key={id}>
        <h1>{title}</h1>
        <p>{dec}</p>
      </div>
    );
  });
  return <Tab tabsTitle={tabsTitle} data={data}></Tab>;
}
