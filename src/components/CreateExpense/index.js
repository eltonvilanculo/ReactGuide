import ExpenseForm from "./ExpenseForm";
import './NewExpense.css'
import {RandomString} from '../../utils/Toolkit'
const CreateExpense = (props) =>{

    const submitDataHandler = (inputData) =>{

        const data  = {
            ...inputData,
            id:RandomString(12)
        }
        props.onAddExpense(data)

      
    }
    return (
        <div className="new-expense">
        
        <ExpenseForm onSubmitData={submitDataHandler}/>
        </div>
    )
}


export default CreateExpense ; 