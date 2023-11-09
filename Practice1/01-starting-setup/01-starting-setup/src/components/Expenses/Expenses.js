import "./Expenses.css";
import ExpensesChart from "./ExpensesChart";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import React, { useState } from "react";
import ExpensesList from "./ExpensesList";
function Expenses(props) {
  const [selectedValue, setSelectedValue] = useState("2020");
  let filterInfoText = "2019,2021 & 2022";
  if (selectedValue === "2019") {
    filterInfoText = "2020,2021 & 2022";
  } else if (selectedValue === "2020") {
    filterInfoText = "2019,2021 & 2022";
  } else if (selectedValue === "2021") {
    filterInfoText = "2019,2020 & 2022";
  } else {
    filterInfoText = "2019,2020 & 2021";
  }
  const yearSelectedHandler = (val) => {
    setSelectedValue(val);
  };
  const filteredExpenses = props.expense.filter((item) => {
    return item.date.getFullYear().toString() === selectedValue;
  });

  return (
    <div>
      <Card className="expenses">
       
        <ExpensesFilter
          selected={selectedValue}
          onYear={yearSelectedHandler}
        ></ExpensesFilter>
         <ExpensesChart expenses ={filteredExpenses}></ExpensesChart>

        <ExpensesList items={filteredExpenses}></ExpensesList>
      </Card>
    </div>
  );
}
export default Expenses;
