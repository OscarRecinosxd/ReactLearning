import React, { useState } from 'react'
import Card from '../UI/Card'
import "./Expenses.css"
import ExpensesFilter from '../ExpenseFilter/ExpensesFilter'
import ExpensesList from './ExpensesList'
import ExpensesChart from './ExpensesChart'


function Expenses(props) {
    const [filteredYear, setFilteredYear] = useState("2020")



    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear)
    }

    const filteredExpenses = props.item.filter(element => { return element.date.getFullYear().toString() === filteredYear })

    

    return (
        <Card className='expenses'>
            <ExpensesFilter selectedYear={filteredYear} onFilterChanged={filterChangeHandler} />
            <ExpensesChart expenses={filteredExpenses}/>
            <ExpensesList items={filteredExpenses}/>
            
        </Card>
    )
}

export default Expenses 