import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { addExpense, editExpense, removeExpense, startAddExpense } from "../../actions/expenses";
import expenses from '../fixtures/expenses'
import { db } from '../../firebase/firebase'
import { getDatabase, ref, set, remove, update, onValue, push, onChildChanged, onChildRemoved } from 'firebase/database'

const createMockStore = configureMockStore([thunk])

test('should setup remove expense action object', () => {
    const action = removeExpense({ id: '123abc' })
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    })
})

test('should setup edit expense action object', () => {
    const action = editExpense('123abc', { note: 'new note update' });
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123abc',
        updates: { note: 'new note update' }
    })
})

test('should setup add expense action object with some values', () => {
    const action = addExpense(expenses[2]);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: expenses[2]
    })
})

test('should add expense to database and store', (done) => {
    const store = createMockStore({})
    const expenseData = {
        description: 'Mouse',
        amount: 3000,
        note: 'This one is better',
        createdAt: 1000
    }
    store.dispatch(startAddExpense(expenseData)).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                ...expenseData
            }
        })
        onValue(ref(db, `expenses/${actions[0].expense.id}`),
            (dataSnapshot) => {
                expect(dataSnapshot.val()).toEqual(expenseData)
                done()
            }, {
            onlyOnce: true
        }
        )
    })
})

test('should add expense with default values to database and store', (done) => {
    const store = createMockStore({})
    const expenseData = {description : '', note : '', amount : 0, createdAt : 0}
    store.dispatch(startAddExpense({})).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                ...expenseData
            }
        })
        onValue(ref(db, `expenses/${actions[0].expense.id}`),
            (dataSnapshot) => {
                expect(dataSnapshot.val()).toEqual(expenseData)
                done()
            }, {
            onlyOnce: true
        }
        )
    })
})





// test('should setup add expense action object with defaul values', () => {

// const action = addExpense();
// expect(action).toEqual({
//     type: 'ADD_EXPENSE',
//     expense: 
//         { description: { }, note: '', amount: 0, createdAt: 0, 
//         id: expect.any(String) }
// })
// })