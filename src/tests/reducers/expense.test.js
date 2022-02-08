
import expensesReducer from '../../reducers/expenses'
import expenses from '../fixtures/expenses'

test('should setup default filter values', () => {
    const state = expensesReducer(undefined, { type: '@@INIT'})
    expect(state).toEqual([])    
})

test('Should remove expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    }

    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[0], expenses[2]])
})

test('Should not remove expense by id if expense not found', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '-1'
    }
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses)
})


test('Should add an expense', () => {
    const expense = {
        id: '109',
        description: 'Gum',
        note: '',
        amount: 12212,
        createdAt: 10
    }
    
    const action = {
        type: 'ADD_EXPENSE',
        expense
    }
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([...expenses, expense])
})

test('Should edit an expense', () => {
    const amount = 12000

    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[1].id,
        updates: {
            amount
        }
    }
    const state = expensesReducer(expenses, action);
    expect(state[1].amount).toBe(12000)
})


test('Should not edit an expense', () => {
    const amount = 12000

    const action = {
        type: 'EDIT_EXPENSE',
        id: '1215151',
        updates: {
            amount
        }
    }
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses)
})

