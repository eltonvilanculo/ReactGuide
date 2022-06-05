import React,{useState} from "react";
import "./Expense.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "../ExpensesFilter";

function Expenses(props) {

  const [selected, setSelected] = useState('2022')
  const onSelectYear = (selectedValue)=>{

   setSelected(selectedValue)

  }
  return (

    <div>    
    <Card className="expense">
    <ExpensesFilter onSelectYear={onSelectYear} selected={selected} />
    
      <ExpenseItem
        title={props.data[0].title}
        amount={props.data[0].amount}
        date={props.data[0].date}
      />
      <ExpenseItem
        title={props.data[0].title}
        amount={props.data[0].amount}
        date={props.data[0].date}
      />
      <ExpenseItem
        title={props.data[0].title}
        amount={props.data[0].amount}
        date={props.data[0].date}
      />
      <ExpenseItem
        title={props.data[0].title}
        amount={props.data[0].amount}
        date={props.data[0].date}
      />
    </Card>
    </div>

  );
}

export default Expenses;
