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
    
    {
      props.data.map((item)=>(
        <ExpenseItem
        title={item.title}
        amount={item.amount}
        date={item.date}
        key={item.id}
      />
      ))
    }
      
     
    </Card>
    </div>

  );
}

export default Expenses;
