import { v4 as uuid4 } from 'uuid'
import { db } from '../firebase/firebase'
import { getDatabase, ref, set, remove, update, onValue, push, onChildChanged, onChildRemoved, get, child } from 'firebase/database'


// ADD_EXPENSE

export const addExpense = (expense) => ({
  type: 'ADD_EXPENSE',
  expense
})

export const startAddExpense = (expenseData = {}) => {
  return (dispatch) => {
    const { description = '', note = '', amount = 0, createdAt = 0 } = expenseData

    const expense = { description, note, amount, createdAt }

    return push(ref(db, 'expenses'), expense).then((ref) => {
      dispatch(addExpense({
        id: ref.key,
        ...expense
      }))
    }).catch((e) => {
      console.log('Something went wrong', e)
    })

  }
}

// REMOVE_EXPENSE

export const removeExpense = ({ id } = {}) => ({
  type: 'REMOVE_EXPENSE',
  id
})


export const startRemoveExpense = ({ id } = {}) => {
  return (dispatch) => {
    return remove(ref(db, `expenses/${id}`))
      .then(() => {
        dispatch(removeExpense({ id }))
          .catch((error) => {
            console.log('Something went wrong', error)
          })
      }
      )
  }
}


// EDIT_EXPENSE

export const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
})


// SET_EXPENSES
export const setExpenses = (expenses) => ({
  type: 'SET_EXPENSES',
  expenses
})

export const startEditExpense = (id, updates) => {
  return (dispatch) => {
    update(ref(db, `expenses/${id}`), updates).then(() => {
        dispatch(editExpense(id, updates))
      }).catch((error) => {
          console.log(`Something went wrong ${error}`)
      })
  }

}


//START_SET_EXPENSES

export const startSetExpenses = (dispatch) => {
  return (dispatch) => {
    const dbRef = ref(db)
    return get(child(dbRef, 'expenses')).then((snapshot) => {
      if (snapshot.exists()) {
        const expenses = []
        snapshot.forEach((childSnapshot) => {
          expenses.push({
            id: childSnapshot.key,
            ...childSnapshot.val(),
          });
        });
        dispatch(setExpenses(expenses))
      } else {
        console.log("No data available");
      }
    }).catch((error) => {
      console.error(error);
    });
  }
}

