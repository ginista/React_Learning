import React from "react";
import classes from "./ErrorModal.module.css";
import ReactDOM from "react-dom";

const CustomPortal = ({ message, onClose }) => {
  return (
    <div className={classes["popup-container"]}>
      <div className={classes["popup-content"]}>
        <p>{message}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

const ErrorModal = ({ message, onClose }) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <CustomPortal message={message} onClose={onClose}/>,
        document.getElementById("customPortal-root")
      )}
    </React.Fragment>
  );
};

export default ErrorModal;
