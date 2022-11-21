import './NewExpense.css'
import  ExpenseForm  from './ExpenseForm'
import { useState } from 'react'

const NewExpense = (props) => {
    const[isEditing, setIsEditting] = useState(false);

    const onSaveExpenseDataHandler = (enteredExpenseData) => {
        const expense = {
            ...enteredExpenseData,
            id: Math.random().toString
        }
        props.onAddExpense(expense)
        setIsEditting(false)
    }

    const startEditingHandler = () => {
        setIsEditting(true)
    }
    const stopEditingHandler = () => {
        setIsEditting(false)
    }

    return (
        <div className='new-expense'>
            {!isEditing && <button onClick={startEditingHandler}>Add New Expense</button>}
            {isEditing && <ExpenseForm onSaveExpenseData={onSaveExpenseDataHandler} onCancel={stopEditingHandler}/>}
        </div>
    )
}

export default NewExpense