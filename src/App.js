import React, { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UserList from "./components/Users/UserList";

function App() {
  const [usersList, setUsersList] = useState([]);
  console.log(usersList);
  const addUserHandler = (uName, uAge) => {
    console.log(uName, uAge);
    let tempUserlist = [...usersList];
    tempUserlist.push({ name: uName, age: uAge });
    setUsersList(tempUserlist);
    console.log(usersList);
  };
  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UserList users={[usersList]} />
    </div>
  );
}

export default App;
