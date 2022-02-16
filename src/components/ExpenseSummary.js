import React from 'react'
import getTotalExpenses from '../selectors/expenses-total.js'
import { connect} from 'react-redux'
import numeral from 'numeral' 

export const ExpenseSummary = (props) => (
    <div> 
    <p> Total number of expenses: {props.numberOfExpenses}</p>
    <p> Total amount of expenses: {numeral(props.expensesTotal / 100).format('$0,0.00')} </p>
    </div>
)


const mapStateToProps = (state) => {
    return {
        numberOfExpenses: state.expenses == null || 0 ? 0 : state.expenses.length,
        expensesTotal: getTotalExpenses(state.expenses)
    }
};

export default connect(mapStateToProps)(ExpenseSummary);

