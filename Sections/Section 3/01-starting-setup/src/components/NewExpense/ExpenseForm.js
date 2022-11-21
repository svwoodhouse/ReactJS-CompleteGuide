import { useState } from 'react'
import './ExpenseForm.css'
const ExpenseForm = (props) => {
    const[enteredTitle, setEnteredTitle] = useState('')
    const[enteredAmount, setEnteredAmount] = useState('')
    const[enteredDate, setEnteredDate] = useState('')

   // const[userInput, setUserInput] = useState({
   //    enteredTitle: '',
   //    enteredAmount: '',
   //    enteredDate: ''
   //})

    const titleChangeHandler = (event) => {
       setEnteredTitle(event.target.value)
      // setUserInput({
          // ...userInput,
          // title:event.target.value
       // })
       // setUserInput((prevState) => { return {...prevState, enteredTitle: event.target.value}})
    }

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value)
        //setUserInput({
        //    ...userInput,
        //    amount:event.target.value
        //})
    }

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value)
        // setUserInput({
        //  ...userInput,
        //  date:event.target.value
        //})
    }
    const submitHandler = (event) => {
    // By default, forms update the page onSubmit so to prevent that from 
    // happenning we use the preventDefault() function
        event.preventDefault();
        const expense = {
            title: enteredTitle, 
            amount: enteredAmount,
            date: new Date(enteredDate)
        }
        props.onSaveExpenseData(expense)
        setEnteredTitle('')
        setEnteredAmount('')
        setEnteredDate('')

    }
    const [showAddExpensePanel, setShowAddExpensePanel] = useState(true)

    const showingAddExpensePanel = () => {
        setShowAddExpensePanel(current => !current)
    }

    return ( 
        <>
        { 
            showAddExpensePanel && 
                <div className='new-expense__actions'>
                    <button type='button' onClick={showingAddExpensePanel}>Add Expense</button>
                </div>
        }
        {
            !showAddExpensePanel &&
            <form onSubmit={submitHandler}>
                <div className='new-expense__controls'>
                    <div className='new-expense__control'>
                        <label>Title</label>
                        <input type='text' value={enteredTitle} onChange={titleChangeHandler}/>
                    </div>
                    <div className='new-expense__control'>
                        <label>Amount</label>
                        <input type='number' min="0.01" step="0.01" value={enteredAmount} onChange={amountChangeHandler}/>
                    </div>
                    <div className='new-expense__control'>
                        <label>Date</label>
                        <input type='date' min="2022-01-01" max="2024-12-31" value={enteredDate} onChange={dateChangeHandler}/>
                    </div>
                </div>
                <div className='new-expense__actions'>
                    <button type='submit'>Add Expense</button>
                    <button type='button' onClick={showingAddExpensePanel}>Cancel</button>
                </div>
            </form>
        }
        </>
        )
    }

export default ExpenseForm