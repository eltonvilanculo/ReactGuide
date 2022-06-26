import React, { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import Card from "../UI/Card";
function ExpenseItem(props) {
  const [title, setTitle] = useState(props.title);

  const clickHandler = () => {
    setTitle("updated");
    console.log(title);
   
  };
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2> {title}</h2>
      </div>

      <div className="expense-item__price">{props.amount} MT</div>
      <button onClick={clickHandler}>Change Value</button>
    </Card>
  );
}
export default ExpenseItem;
