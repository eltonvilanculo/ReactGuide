import React, { useState } from "react";
import "./Expense.css";
import Card from "../UI/Card";
import ExpensesFilter from "../ExpensesFilter";
import ExpenseList from "../ExpenseList";
import ExpensesChart from "./ExpensesChart"

function Expenses(props) {
  const [selected, setSelected] = useState("2022");
  const onSelectYear = (selectedValue) => {
    setSelected(selectedValue);
  };

  const filteredExpenses = props.data.filter((obj) => {
    if (selected !== undefined && selected !== null) {
      return new Date(obj.date).getFullYear() == selected;
    }
    return false;
  });

  return (
    <div>
      <Card className="expense">
        <ExpensesFilter onSelectYear={onSelectYear} selected={selected} />
        <ExpensesChart  expenses = {filteredExpenses} />
        <ExpenseList data={filteredExpenses} />
      </Card>
    </div>
  );
}

export default Expenses;
