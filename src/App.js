import React, { useState } from "react";
import "./App.css";
import Expenses from "./components/Expenses";
import CreateExpense from "./components/CreateExpense";
const initExpenses = [
  {
    id: "ejejwe",
    title: "Compra de automavel",
    amount: 50,
    date: new Date(2022, 6, 23),
  },

  {
    id: "ejejwde",
    title: "Agua",
    amount: 50,
    date: new Date(2022, 2, 22),
  },
];

function App(props) {
  const [expenses, setExpenses] = useState(initExpenses);
  const addExpenseHandler = (enteredData) => {
    setExpenses((preExpenses) => {
      return [enteredData, ...preExpenses];
    });
  };

 

  return (
    <div className="App">
      <CreateExpense onAddExpense={addExpenseHandler} />
      <Expenses data={expenses}  />
    </div>
  );

  // return React.createElement(
  //   "div",
  //   {},
  //   React.createElement("h1", {},"Let's get started"),
  //   React.createElement(Expenses, {data: expenses})
  // );
}

export default App;
