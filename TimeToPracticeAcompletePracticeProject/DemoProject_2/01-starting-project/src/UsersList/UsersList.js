import React from "react";
import Card from "../Card/Card";
import classes from "./UsersList.module.css";

function UsersList(props) {
  return (
    <Card className={classes.users}>
      <ul className={classes['users-ul']}>
        {props.users.map((user, index) => (
          <li className={classes["users-li"]} key={index}>
            {user.userName} {user.age} (Years old)
          </li>
        ))}
      </ul>
    </Card>
  );
}

export default UsersList;
