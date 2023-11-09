import React, { Component } from "react"; // Import Component from 'react'
import User from "./User";
//in class based components react hooks can't be used
import classes from "./Users.module.css";



class Users extends Component {
  constructor() {
    super(); // Call the parent class constructor
    this.state = {
      showUsers: true,
    };
  }
  componentDidUpdate(){
    if(this.props.users.length === 0){
      // throwing error whe something went wrong, need to handle also
      //In regular javascript we use try catch
      throw new Error("No users provided!");
    }
  }

  // Convert this function to an arrow function to automatically bind 'this'
  toggleUsersHandler = () => {
    this.setState((prevState) => {
      return {
        showUsers: !prevState.showUsers,
      };
    });
  };

  render() {
    const usersList = (
      <ul>
        {this.props.users.map((user) => (
          <User key={user.id} name={user.name} />
        ))}
      </ul>
    );
    return (
      <div className={classes.users}>
        <button onClick={this.toggleUsersHandler}>
          {this.state.showUsers ? "Hide" : "Show"} Users
        </button>
        {this.state.showUsers && usersList}
      </div>
    );
  }
}

export default Users;
