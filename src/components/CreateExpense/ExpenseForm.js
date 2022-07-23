import React, { useState } from "react";
import "./ExpenseForm.css";
const ExpenseForm = (props) => {
  const [inputs, setInputs] = useState({
    inputTitle: "",
    inputAmount: "",
    inputDate: "",
  });

  const [showAddForm, setShowAddForm] = useState(false);

  //TODO : chamamos uma funcao caso o nosso estado actual dependa do anterior uma vez que react nao actualiza logo o valor de estado (aquilo que notei) se quisermos usar o estado anterior como em um counter
  //   setInputs((preState)=>{
  //      return {
  //           ...prevState,
  //           inputTitle:'novo valor'
  //       }
  //   });

  const submitHandler = (event) => {
    event.preventDefault();

    props.onSubmitData({
      title: inputs.inputTitle,
      amount: inputs.inputAmount,
      date: new Date(inputs.inputDate),
    });

    setInputs({
      inputTitle: "",
      inputAmount: "",
      inputDate: "",
    });
  };

  const callFormHandler = ()=>{
    setShowAddForm(true);
  }
  let content = (
    <div>
      <button type="submit" onClick={callFormHandler}>Add Expense</button>
    </div>
  );

  if (showAddForm) {
    content = (
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
        <button type="submit" className=".new-expense-cancel"  onClick={()=>setShowAddForm(false)}>Cancel</button>
          <button type="submit">Add Expense</button>
        </div>
      </form>
    );
  }
  return <div className="className='new-expense__controls">{content}</div>;
};

export default ExpenseForm;
