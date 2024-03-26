import TabVerTwo from "./TabVerTwo";
import SignIn from "./SignIn";

export default function TabExThree() {
  return (
    <TabVerTwo indexOfActiveTab={2}>
      <div label="Tab 1">
        <h1>Title Example</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae,
          doloremque! Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Dolore optio laboriosam dicta eum qui consequuntur, iusto magni
          molestiae autem itaque?
        </p>
      </div>
      <div active={"true"} label="Tab 2">
        <SignIn />
      </div>
      <div label="Tab 3">
        <h1>Title Example 3</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae,
          doloremque! Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Dolore optio laboriosam dicta eum qui consequuntur, iusto magni
          molestiae autem itaque?
        </p>
      </div>
    </TabVerTwo>
  );
}
