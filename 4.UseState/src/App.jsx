import { useState } from "react";

function App() {
  //useState = hooks

  const [firstName, setFirstName] = useState("Saadet");
  // const [lastName, setLastName] = useState("Özdemir");
  const [names, setNames] = useState(["Ali, Sevinç, Mine, Jale"]);
  const [userInfo, setUserInfo] = useState({userName:"sNur" , password:"1212"})
  const [show, setShow] =useState(true);

  // handleChange = () => {
  //   debugger;
  //   setFirstName("Elif");
  // };
  console.log(names)

  return (
    <div>
    {show ? <div>{userInfo.userName} {userInfo.password} </div> : <div>Don't show</div>}
    </div>
  );
}

export default App;
