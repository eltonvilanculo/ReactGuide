import React, { useState } from "react";
import "./ExpenseForm.css";
const ExpenseForm = (props) => {
  const [inputs, setInputs] = useState({
    inputTitle: "",
    inputAmount: "",
    inputDate: "",
  });

  //TODO : chamamos uma funcao caso o nosso estado actual dependa do anterior uma vez que react nao actualiza logo o valor de estado (aquilo que notei) se quisermos usar o estado anterior como em um counter
  //   setInputs((preState)=>{
  //      return {
  //           ...prevState,
  //           inputTitle:'novo valor'
  //       }
  //   });

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(inputs)

    props.onSubmitData({
      title:inputs.inputTitle,
      amount:inputs.inputAmount,
      date:new Date(inputs.inputDate),
    });

    setInputs({
      inputTitle: "",
      inputAmount: "",
      inputDate: "",
    });
  };

  return (
    <div className="className='new-expense__controls">
      <form onSubmit={submitHandler}>
        <div className="new-expense__control">
          <label>Title</label>

          <input
            type="text"
            onChange={(event) => {
           
              setInputs({
                ...inputs,
                inputTitle: event.target.value,
              });
            }}
            value={inputs.inputTitle}
          />
        </div>

        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="1"
            step="1"
            onChange={(event) => {
              setInputs({
                ...inputs,
                inputAmount: event.target.value,
              });
            }}
            value={inputs.inputAmount}
          />
        </div>

        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2022-01-01"
            onChange={(event) => {
             
              setInputs({
                ...inputs,
                inputDate: event.target.value,
              });
            }}
            value={inputs.inputDate}
          />
        </div>
        <div className="new-expense__actions">
          <button type="submit">Add Expense</button>
        </div>
      </form>
    </div>
  );
};

export default ExpenseForm;
