
import expensesReducer from '../../reducers/expenses'
import expenses from '../fixtures/expenses'

test('should setup default filter values', () => {
    const state = expensesReducer(undefined, { type: '@@INIT'})
    expect(state).toEqual([])    
})