
import authReducer from '../../reducers/auth'

test('should setup login filter values', () => {
    const action = {type: 'LOGIN', uid: '12345'}
    const currentState = {}
    const state = authReducer(currentState, action)
    expect(state.uid).toBe(action.uid)    
})

test('should setup logout filter values', () => {
    const action = {type: 'LOGOUT'}
    const currentState = { uid: 'anyValue'}
    const state = authReducer(currentState, action)
    expect(state).toEqual({})    
})

