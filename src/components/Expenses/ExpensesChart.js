import React from "react";
import Chart from "../Chart";

export default function Expenses(props) {
  const dataPoints = [
    {
      label: "jan",
      value: 0,
    },
    {
      label: "Feb",
      value: 0,
    },
    {
      label: "Marc",
      value: 0,
    },
    {
      label: "Apr",
      value: 0,
    },
    {
      label: "May",
      value: 0,
    },
    {
      label: "Jun",
      value: 0,
    },
    {
      label: "Jul",
      value: 0,
    },
    {
      label: "Aug",
      value: 0,
    },
    {
      label: "Sep",
      value: 0,
    },
    {
      label: "Out",
      value: 0,
    },
    {
      label: "Nov",
      value: 0,
    },
    {
      label: "Dec",
      value: 0,
    },
  ];

  for (const expense of props.expenses) {
    const expenseMonth = expense.date.getMonth(); //begin in 0

    //in each position we will increment the amount corresponding to the month
    dataPoints[expenseMonth].value += expense.amount;
  }
  return <Chart dataPoints={dataPoints} />;
}
