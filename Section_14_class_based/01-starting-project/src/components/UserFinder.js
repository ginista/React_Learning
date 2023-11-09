import { Fragment, Component } from "react";
import ErrorBoundary from'./ErrorBoundary';
import Users from "./Users";
import classes from "./UserFinder.module.css";
import UsersContext from "../store/user-context";

const DUMMY_USERS = [
  { id: "u1", name: "Max" },
  { id: "u2", name: "Manuel" },
  { id: "u3", name: "Julie" },
  { id: "u4", name: "Antanin Ginista" },
  { id: "u5", name: "Antani Garry" },
  { id: "u6", name: "Sheela" },
];

class UserFinder extends Component {
  //can do this only one time setting context, if multiple context is there this is not allowed.
  static contextType = UsersContext;
  constructor() {
    super();
    this.state = {
      filteredUsers: DUMMY_USERS,
      searchTerm: "",
    };
  }
  //alternate for useEffect with one dependency
  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchTerm !== this.state.searchTerm) {
      this.setState({
        filteredUsers: DUMMY_USERS.filter((user) =>
          user.name.includes(this.state.searchTerm)
        ),
      });
    }
  }

  //alternate for useEffect with no dependency
  //executes when component is initially mounted
  componentDidMount() {
    //send the http request
    this.setState({filteredUsers: this.context.users});
  }

  searchChangeHandler = (event) => {
    this.setState({ searchTerm: event.target.value });
  };
  render() {
    return (
      <Fragment>
        <div className={classes.finder}>
          <input type="search" onChange={this.searchChangeHandler.bind(this)} />
        </div>
        <ErrorBoundary>
        <Users users={this.state.filteredUsers} />
        </ErrorBoundary>
      </Fragment>
    );
  }
}

export default UserFinder;
