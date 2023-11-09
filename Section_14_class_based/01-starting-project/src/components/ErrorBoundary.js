// import { Component } from "react";

// class ErrorBoundary extends Component {
//   constructor() {
//     super();
//     this.state = { hasError: false };
//   }
//   //For handling unexpected error in react (class_based) alternate for try catch
//   //Can't add it to functional component, no equivalent
//   componentDidCatch(error) {
//     console.log(error);
//     this.setState({ hasError: true });
//   }
//   render() {
//     if(this.state.hasError){
//         return <h1>Something went wrong!</h1>
//     }
//     return this.props.children;
//   }
// }

// export default ErrorBoundary;
import React, { Component } from "react";

class ErrorBoundary extends Component {
  constructor() {
    super();
    this.state = { hasError: false };
  }

  // For handling unexpected errors in React (class-based components) as an alternative to try-catch
  // This method is called when an error is caught within this component or its children
  componentDidCatch(error) {
    console.log(error);
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong!</h1>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
