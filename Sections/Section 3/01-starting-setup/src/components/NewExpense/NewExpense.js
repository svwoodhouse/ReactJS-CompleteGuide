import './NewExpense.css'
import  ExpenseForm  from './ExpenseForm'

const NewExpense = (props) => {
    const onSaveExpenseDataHandler = (enteredExpenseData) => {
        const expense = {
            ...enteredExpenseData,
            id: Math.random().toString
        }
        props.onAddExpense(expense)
    }
    return (
        <div className='new-expense'>
            <ExpenseForm onSaveExpenseData={onSaveExpenseDataHandler}/>
        </div>
    )
}

export default NewExpense