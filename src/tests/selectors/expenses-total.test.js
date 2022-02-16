import getTotalExpenses from '../../selectors/expenses-total.js'
import expenses from '../fixtures/expenses'



test('should return 0 if no expenses', () => {
    const result = getTotalExpenses([])
    expect(result).toBe(0)
})


test('should correctly add upto a single expense', () => {
    const result = getTotalExpenses([expenses[1]])
    expect(result).toBe(expenses[1].amount)
})


test('should correctly add up multiple expenses', () => {
    const result = getTotalExpenses(expenses)
    expect(result).toBe(expenses[0].amount + expenses[1].amount + expenses[2].amount)
})