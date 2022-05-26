import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { addExpense, editExpense, removeExpense, startAddExpense, setExpenses, startSetExpenses, startRemoveExpense, startEditExpense } from "../../actions/expenses";
import expenses from '../fixtures/expenses'
import { db } from '../../firebase/firebase'
import { getDatabase, ref, set, remove, update, onValue, push, onChildChanged, onChildRemoved } from 'firebase/database'

const uid = 'thisismytestuid'
const defaultAuthState = { auth: { uid }}
const createMockStore = configureMockStore([thunk])

beforeEach((done) => {
    const expenseData = {}
    expenses.forEach(({ id, description, note, amount, createdAt }) => {
        expenseData[id] = { description, note, amount, createdAt }
    });
    set(ref(db, `users/${uid}/expenses`), expenseData).then(() => done())
})

test('should setup remove expense action object', () => {
    const action = removeExpense({ id: '123abc' })
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    })
})

// test('should remove expense from firebase', (done) => {
//     jest.setTimeout(10000)
//     const store = createMockStore({defaultAuthState})
//     const id = expenses[2].id
//     store.dispatch(startRemoveExpense( id )).then(() => {
//         const actions = store.getActions();
//         expenct(actions[0]).toEqual({
//             type: 'REMOVE_EXPENSE',
//             id
//         })
//         return onValue(ref(db, `users/${uid}/expenses/${id}`),
//             (dataSnapshot) => {
//                 console.log(dataSnapshot.val())
//                 expect(dataSnapshot.val().toBeFalsy());
//                 done()
//             }, {
//             onlyOnce: true
//         }
//         )
//     })
// })

test('should setup edit expense action object', () => {
    const action = editExpense('123abc', { note: 'new note update' });
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123abc',
        updates: { note: 'new note update' }
    })
})

// test('should edit expense from firebase', (done) => {
//     const store = createMockStore({defaultAuthState});
//     const id = expenses[0].id
//     const updates = {amount: 50000}
//     store.dispatch(startEditExpense(id, updates)).then(() => {
//         const actions = store.getActions()
//         expense(actions[0]).toEqual({
//             type: 'EDIT_EXPENSE',
//             id,
//             updates
//         })
//         return onValue(ref(db, `users/${uid}/expenses/${id}`),
//             (dataSnapshot) => {
//                 expect(dataSnapshot.val().amount).toBe(updates.amount);
//                 done()
//             }, {
//             onlyOnce: true
//         }
//         )
//     }) 
// })




test('should setup add expense action object with some values', () => {
    const action = addExpense(expenses[2]);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: expenses[2]
    })
})

test('should add expense to database and store', (done) => {
    const store = createMockStore(defaultAuthState)
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
        onValue(ref(db, `users/${uid}/expenses/${actions[0].expense.id}`),
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
    const store = createMockStore(defaultAuthState)
    const expenseData = { description: '', note: '', amount: 0, createdAt: 0 }
    store.dispatch(startAddExpense({})).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                ...expenseData
            }
        })
        onValue(ref(db, `users/${uid}/expenses/${actions[0].expense.id}`),
            (dataSnapshot) => {
                expect(dataSnapshot.val()).toEqual(expenseData)
                done()
            }, {
            onlyOnce: true
        }
        )
    })
})


test('should setup set expense action object with data', () => {
    const action = setExpenses(expenses);
    expect(action).toEqual({
        type: 'SET_EXPENSES',
        expenses
    })
})

test('should fetch the expenses from firebase', (done) => {
    const store = createMockStore(defaultAuthState);
    store.dispatch(startSetExpenses()).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'SET_EXPENSES',
            expenses
        })
        done();
    })
})