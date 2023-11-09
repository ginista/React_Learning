import './ExpenseItem.css'
import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';
import React from 'react';

function ExpenseItem(props) {
   
   console.log("ExpenseItem Component is called!!")
  
    return (
      <li>
    <Card className='expense-item'>
     <ExpenseDate date={props.expense.date}/>
      <div className='expense-item__description'>
        <h2>{props.expense.title}</h2>
        <div className='expense-item__price'>${props.expense.amount}</div>
      </div>
     
    </Card>
    </li>
  );
}
export default ExpenseItem;
