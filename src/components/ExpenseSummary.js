import React from 'react'
import getTotalExpenses from '../selectors/expenses-total.js'
import selectExpenses from '../selectors/expenses'
import { connect} from 'react-redux'
import numeral from 'numeral' 

export const ExpenseSummary = ({ numberOfExpenses, expensesTotal }) => (
    <div> 
    <p> Total number of expenses: {numberOfExpenses}</p>
    <p> Total amount of expenses: {numeral(expensesTotal / 100).format('$0,0.00')} </p>
    </div>
)


const mapStateToProps = (state) => {

    const visibleExpenses = selectExpenses(state.expenses, state.filters)

    return {
        numberOfExpenses: visibleExpenses.length,
        expensesTotal: getTotalExpenses(visibleExpenses)
    }
};

export default connect(mapStateToProps)(ExpenseSummary);

