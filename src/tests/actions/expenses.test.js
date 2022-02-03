import { addExpense, editExpense, removeExpense } from "../../actions/expenses";


test('should setup remove expense action object', () => {
    const action = removeExpense({ id: '123abc'})
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    })
})

test('should setup edit expense action object', () => {
    const action = editExpense('123abc', {note: 'new note update'});
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123abc',
        updates: { note: 'new note update'}
    })
})

test('should setup add expense action object with some values', () => {
    const expenseData = {
            description: 'Rent',
            note: 'This is for rent',
            amount: 100123,
            createdAt: 1000
    }

    const action = addExpense(expenseData);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    })
})

test('should setup add expense action object with defaul values', () => {

const action = addExpense();
expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: 
        { description: { }, note: '', amount: 0, createdAt: 0, 
        id: expect.any(String) }
})
})