import React from "react";
import "./ExpenseDate.css";
function ExpenseDate(props) {
  const locale = "pt-BR";
  const day = props.date.toLocaleDateString(locale, { day: "2-digit" });
  const month = props.date.toLocaleDateString(locale, { month: "long" });
  const year = props.date.getFullYear();

  return (
    <div className="expense-date">
      <div className="expense-date__day">{day}</div>
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
    </div>
  );
}

export default ExpenseDate;
