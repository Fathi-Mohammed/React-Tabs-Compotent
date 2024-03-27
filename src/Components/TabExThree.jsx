// import TabVerTwo from "./TabVerTwo";
import SignIn from "./SignIn";
import { FaDatabase, FaUser } from "react-icons/fa";
import { IoDocumentText } from "react-icons/io5";
import { AchivementsTabs } from "./AchivementsTabs";

export default function TabExThree() {
  return (
    <AchivementsTabs indexOfActiveTab={2}>
      <div icon={<IoDocumentText />} title="Tab 1">
        <h1>Title Example</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae,
          doloremque! Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Dolore optio laboriosam dicta eum qui consequuntur, iusto magni
          molestiae autem itaque?
        </p>
      </div>
      <div icon={<FaUser />} title="Tab 2">
        <SignIn />
      </div>
      <div icon={<FaDatabase />} title="Tab 3">
        <h1>Title Example 3</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae,
          doloremque! Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Dolore optio laboriosam dicta eum qui consequuntur, iusto magni
          molestiae autem itaque?
        </p>
      </div>
    </AchivementsTabs>
  );
}
