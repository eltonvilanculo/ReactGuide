import React, { useState } from "react";
import "./Expense.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "../ExpensesFilter";
import ExpenseList from "../ExpenseList";

function Expenses(props) {
  const [selected, setSelected] = useState("2022");
  const onSelectYear = (selectedValue) => {
    setSelected(selectedValue);
  };

  const filteredExpenses = props.data.filter((obj) => {
    if (selected !== undefined && selected !== null) {
      return new Date(obj.date).getFullYear() == selected;
    }
  });

  return (
    <div>
      <Card className="expense">
        <ExpensesFilter onSelectYear={onSelectYear} selected={selected} />
        <ExpenseList data={filteredExpenses} />
      </Card>
    </div>
  );
}

export default Expenses;
