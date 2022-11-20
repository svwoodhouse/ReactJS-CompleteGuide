import './Expenses.css'
import ExpenseItem from './ExpenseItem'
import Card from '../UI/Card'
import ExpensesFilter from './ExpensesFilter'
import { useState } from 'react'

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2020');
    const [expenses, setExpenses] = useState(props.items)
    const [filteredExpenses, setFilteredExpenses] = useState(props.items)

    const filterChangeHandler = (selectedYear) => {
        setFilteredExpenses(expenses)
        setFilteredYear(selectedYear)
        const filteredExpenses = expenses.filter((expense) => {
            return expense.date.getFullYear() === Number(selectedYear)
        })
        setFilteredExpenses(filteredExpenses)
    }

    return(
        <div>
            <Card className='expenses'>
                <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
                {filteredExpenses.map((expense) => (
                    <ExpenseItem 
                        title={expense.title} 
                        amount={expense.amount} 
                        date={expense.date}
                        key={expense.id}
                    />
                ))}
            </Card>
        </div>
    )
}

export default Expenses