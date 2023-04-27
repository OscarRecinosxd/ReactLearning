import React, {useState} from 'react'
import ExpenseForm from './ExpenseForm'
import "./NewExpense.css"






const NewExpense = (props) => {
  const [showExpenseForm,setExpenseForm] = useState(false)
  const [CancelAddExpenseForm,setCancelAddExpenseForm] = useState(false)
  const [AddExpenseFormButton, setAddExpenseFormButton] = useState(true)
 

    const SaveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        props.onSaveExpense(expenseData)
        setExpenseForm(false)
        setCancelAddExpenseForm(false)
        setAddExpenseFormButton(true)
    }

    const addNewCarHandler = () => {
      setAddExpenseFormButton(false)
      setExpenseForm(true)
      setCancelAddExpenseForm(true)
    }

    const cancelNewAddCarHandler = () =>{
      setExpenseForm(false)
      setCancelAddExpenseForm(false)
      setAddExpenseFormButton(true)
    }

    const AddExpenseSubmited = () => {
      setExpenseForm(false)
      setCancelAddExpenseForm(false)
      setAddExpenseFormButton(true)
    }


  return (
    <div className='new-expense'>
        {showExpenseForm && <ExpenseForm onSaveExpenseData = {SaveExpenseDataHandler} onAddExpenseSubmit={AddExpenseSubmited}/>}
        {CancelAddExpenseForm && <button onClick={cancelNewAddCarHandler}>Cancelar</button>}
        {AddExpenseFormButton && <button onClick={addNewCarHandler}>Agregar nuevo auto</button>}
    </div>
  )
}

export default NewExpense