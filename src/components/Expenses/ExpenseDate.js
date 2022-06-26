import React from "react";
import "./ExpenseDate.css";
function ExpenseDate(props) {

  const locale = "pt-BR";
  const dayInput = props.date.toLocaleString(locale, { day: "2-digit" });
  const monthInput = props.date.toLocaleString(locale, { month: "long" });
  const yearInput = props.date.getFullYear();

  return (
    <div className="expense-date">
      <div className="expense-date__day">{dayInput}</div>
      <div className="expense-date__month">{monthInput}</div>
      <div className="expense-date__year">{yearInput}</div>
    </div>
  );
}

export default ExpenseDate;
