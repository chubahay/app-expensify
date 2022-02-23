import { v4 as uuid4 } from 'uuid'
import { db } from '../firebase/firebase'
import { getDatabase, ref, set, remove, update, onValue, push, onChildChanged, onChildRemoved } from 'firebase/database'


// ADD_EXPENSE

export const addExpense = (expense) => ({
    type: 'ADD_EXPENSE',
    expense
})

export const startAddExpense = (expenseData = {}) => {
    return (dispatch) => {
        const { description = '', note = '', amount = 0, createdAt = 0 } = expenseData

        const expense = {description, note, amount, createdAt}
    
    return push(ref(db, 'expenses'), expense).then((ref) => {
            dispatch(addExpense({
                id: ref.key,
                ...expense
            }))
        }).catch((e) => {
            console.log('Something went wrong', e)
        })
        
}}

// REMOVE_EXPENSE

export const removeExpense = ({ id } = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
})

// EDIT_EXPENSE

export const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
})