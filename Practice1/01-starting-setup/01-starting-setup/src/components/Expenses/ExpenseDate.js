import './ExpenseDate.css';


function expenseDate(props){
 const month= props.date.toLocaleString('en-GB', { month: 'long' })
 const day= props.date.toLocaleString('en-GB', { year: 'numeric'})
 const year = props.date.toLocaleString('en-GB', { day: 'numeric' })
 return(
    <div className='expense-date'>
    <div className='expense-date__month'>{month}</div>
    <div className='expense-date__day'>{day}</div>
    <div className='expense-date__year'>{year}</div>
   </div>
 );
}

export default expenseDate;