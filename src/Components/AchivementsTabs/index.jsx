import { useEffect, useMemo, useState } from "react";
import styles from "./styles.module.scss";
import Tab from "./Tab";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export const AchivementsTabs = ({ children, indexOfActiveTab }) => {
  const [activeTab, setActiveTab] = useState(indexOfActiveTab || 0);

  const contents = useMemo(
    () => children[activeTab]?.props.children,
    [children, activeTab]
  );

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const history = window.history;

    if (searchParams.get("activeTab")) {
      setActiveTab(parseInt(searchParams.get("activeTab")));
    } else {
      searchParams.set("activeTab", activeTab);
      history.pushState(null, null, `?${searchParams}`);
    }

    return () => {
      searchParams.delete("activeTab");
      history.pushState(null, null, `?${searchParams}`);
    };
  }, [activeTab]);

  return (
    <div>
      <Row className={styles.tabWrapper}>
        {children.map(({ props: { title, icon } }, index) => (
          <Col key={index} lg={3} md={4} sm={6}>
            <Tab
              title={title}
              icon={icon}
              isactive={index === activeTab}
              onClick={() => setActiveTab(index)}
            />
          </Col>
        ))}
      </Row>
      {contents}
    </div>
  );
};
