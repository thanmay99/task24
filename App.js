import React, { useState } from "react";
import Form from "./Form";
import Display from "./Display";

const App = () => {
  const [userData, setUserData] = useState([]);

  const addUser = (user) => {
    console.log(user);
    setUserData([...userData, user]);
  };

  return (
    <div>
      <Form add={addUser} />
      <Display userData={userData} />
    </div>
  );
};

export default App;