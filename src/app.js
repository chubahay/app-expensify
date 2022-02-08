import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter'
import configureStore from './store/configureStore';
import { Provider } from 'react-redux'
import { addExpense, removeExpense, editExpense } from './actions/expenses'
import { sortByAmount, sortByDate, setEndDate, setStartDate, setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses'
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css'



const store = configureStore();

store.dispatch(addExpense({ description: 'Water bill', amount: 1000, createdAt: 1000 }));
store.dispatch(addExpense({ description: 'Gas bill', amount: 900, createdAt: 2000 }));
store.dispatch(addExpense({ description: 'rent bill', amount: 800, createdAt: 3000 }));


const state = store.getState()
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
console.log(visibleExpenses)


console.log(store.getState())

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)

ReactDOM.render(jsx, document.getElementById('app'));

