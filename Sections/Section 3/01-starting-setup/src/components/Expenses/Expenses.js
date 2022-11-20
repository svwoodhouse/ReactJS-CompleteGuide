import './Expenses.css'
import ExpenseItem from './ExpenseItem'
import Card from '../UI/Card'
import ExpensesFilter from './ExpensesFilter'
import { useState } from 'react'

const Expenses =  (props) => {
    const [filteredYear, setFilteredYear] = useState('2020');

    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear)
    }
    return(
        <div>
            <Card className='expenses'>
                <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
                <ExpenseItem title={props[1].title} amount={props[1].amount} date={props[1].date}></ExpenseItem>
                <ExpenseItem title={props[0].title} amount={props[0].amount} date={props[0].date}></ExpenseItem>
                <ExpenseItem title={props[2].title} amount={props[2].amount} date={props[2].date}></ExpenseItem>
                <ExpenseItem title={props[3].title} amount={props[3].amount} date={props[3].date}></ExpenseItem>
            </Card>
        </div>
    )
}

export default Expenses