import Tab from './Tab';
import SignUp from './SignUp';
import SignIn from './SignIn';

export default function SecondExTab() {
  const data = [<SignIn />, <SignUp />]
  return (
    <Tab tabsTitle={["Sign In", "Sign Up" , ""]} data={data}></Tab>
  )
}
