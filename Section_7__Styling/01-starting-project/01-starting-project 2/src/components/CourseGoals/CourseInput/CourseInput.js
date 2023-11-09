import React, { useState } from "react";
//import styled from "styled-components";
import Button from "../../UI/Button/Button";
import styles from "./CourseInput.module.css";

// const FormControl = styled.div`
//    {
//     margin: 0.5rem 0;
//   }

//   & label {
//     font-weight: bold;
//     display: block;
//     margin-bottom: 0.5rem;
//   }

//   & input {
//     display: block;
//     width: 100%;
//     border: 1px solid #ccc;
//     font: inherit;
//     line-height: 1.5rem;
//     padding: 0 0.25rem;
//   }

//   & input:focus {
//     outline: none;
//     background: #fad0ec;
//     border-color: #8b005d;
//   }
// `;
const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isEmptyInput, setIsEmptyInput] = useState(false);
  const [isValid, setIsValid] = useState(true);

  const goalInputChangeHandler = (event) => {
    setEnteredValue(event.target.value);
    const inputValue = event.target.value;
    setIsEmptyInput(inputValue.trim().length === 0);
    setIsValid(inputValue.trim().length > 0);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setIsValid(false);
      return;
    }
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={styles['form-control']}>
        {" "}
        <label style={{ color: !isValid ? "red" : "black" }}>Course Goal</label>
        <input
          type="text"
          onChange={goalInputChangeHandler}
          className={isEmptyInput ? "invalid" : ""}
          style={{ backgroundColor: !isValid ? "salmon" : "transparent" }}
        />
      </div>

      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
