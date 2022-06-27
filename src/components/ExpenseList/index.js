import React from 'react';
import './ExpenseList.css';
import ExpenseItem from '../Expenses/ExpenseItem';
const ExpenseList = (props) => {
    

    
      if (props.data.length ===0) {
       
        return(
            <h2 className="expenses-list__fallback">No data found</h2>
        )
       
      }

      return (
        <li  className="expenses-list">
        {
          
            props.data.map((item) => (
            <ExpenseItem
              title={item.title}
              amount={item.amount}
              date={item.date}
              key={item.id}
            />
          ))
         
        }
        </li>
  
      )

      

}

export default ExpenseList;