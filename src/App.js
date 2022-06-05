import React from "react";
import "./App.css";
import Expenses from "./components/Expenses";
import CreateExpense from "./components/CreateExpense";

function App(props) {
  const expenses = [
    {
      id: "ejejwe",
      title: "Compra de automavel",
      amount: 50,
      date: new Date(2022, 2, 22),
    },
  ];

  const addExpenseHandler = (expense) => {
    console.log("App.js => ", expenses);
  };

  return (
    <div className="App">
      <CreateExpense onAddExpense={addExpenseHandler} />
      <Expenses data={expenses} />
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
