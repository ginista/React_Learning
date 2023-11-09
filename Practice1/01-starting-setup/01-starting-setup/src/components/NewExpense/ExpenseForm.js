import "./ExpenseForm.css";
import React, { useState } from "react";

function ExpenseForm(props) {
  const [userInput, setUserInput] = useState({
    title: "",
    amount: "",
    date: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userInput);
    props.onSaveExpenseData(userInput);
    setUserInput({ date: "", title: "", amount: "" });
  };

  const inputChangeHandler = (identifier, event) => {
    if (identifier === "title") {
      setUserInput((prevState) => ({
        ...prevState,
        title: event.target.value,
      }));
    } else if (identifier === "date") {
      const inputDate = new Date(event.target.value);
      setUserInput((prevState) => ({
        ...prevState,
        date: inputDate,
      }));
    } else {
      setUserInput((prevState) => ({
        ...prevState,
        amount: +event.target.value,
      }));
    }
  };
  

  
  return (
    <form onSubmit={handleSubmit}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="date">Date:</label>
          <input
           type="date"
            min="2019-01-01"
            max="2022-12-31"
            id="date"
            value={
              userInput.date instanceof Date
                ? userInput.date.toISOString().split("T")[0]
                : ""
            }
            onChange={(event) => inputChangeHandler("date", event)}
            required
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            value={userInput.title}
            onChange={(event) => inputChangeHandler("title", event)}
            required
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="amount">Amount:</label>
          <input
            type="number"
            id="amount"
            min="0.01"
            step="0.01"
            value={userInput.amount}
            onChange={(event) => inputChangeHandler("amount", event)}
            required
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type ="button" onClick={props.onCancel}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
