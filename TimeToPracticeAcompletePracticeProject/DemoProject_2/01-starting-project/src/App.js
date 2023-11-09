import React, { useState } from "react";
import AddUser from "./AddUser/AddUser";
import UsersList from "./UsersList/UsersList";
import { Fragment } from "react";

function App() {
  const [users, setUsers] = useState([]);

  const addUser = (user) => {
    setUsers([...users, user]);
    console.log(users);
  };
  return (
    <Fragment>
      <AddUser users={addUser} />
      <UsersList users={users}></UsersList>
    </Fragment>
  );
}

export default App;
