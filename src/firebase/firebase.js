// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import { getDatabase, ref, set, remove, update, onValue, push, onChildChanged, onChildRemoved, get } from 'firebase/database';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
    measurementId: process.env.FIREBASE_MEASUREMENT_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//const analytics = getAnalytics(app);

const db = getDatabase()
const provider = new GoogleAuthProvider();
const auth = getAuth()

export { db, auth, provider }








































// set(ref(db), {name: 'Charlie',
// age: 32,
// isSingle: false,
// location: {
//     city: 'Edinburgh',
//     country: 'Scotland'
// }}).then(() => {
//     console.log('Data is saved')
// }).catch((error) => {
//     console.log('This failed')
// })


// set(ref(db, 'age'), 33)

// set(ref(db, 'location/city'), 'Wallyford')

// set(ref(db, 'attributes'), {
//     height: '75kg',
//     weight: '175cm'
// }).then(() => {
//     console.log('Data is saved')
// }).catch((error) => {
//     console.log('This failed')
// })

//remove data using remove, can also use remove()

// remove(ref(db, 'isSingle')).then(() => {
//     console.log('Data is saved')
// }).catch((error) => {
//     console.log('This failed', error)
// })

//remove data using null

// set(ref(db, 'isSingle'), null).then(() => {
//     console.log('Data is saved')
// }).catch((error) => {
//     console.log('This failed')
// })


//Update the data in the database


// update(ref(db '/'), {
//     name: 'Charlie Rogers',
//     age: 32,
//     location/city: Edinburgh   
// });



// const expenses = [{
//     description: 'Item One',
//     note: 'This is the first item',
//     amount: 4500,
//     createdAt: 0
// }, {
//     description: 'Item Two',
//     note: 'This is the second item',
//     amount: 8000,
//     createdAt: 0
// }, {
//     description: 'Item Three',
//     note: 'This is the third item',
//     amount: 10500,
//     createdAt: 0
// }]


// expenses.forEach((expense) => {
//     push(ref(db, 'expenses'), expense).then(() => {
//         console.log('pushed: ', expense)
//     }).catch((e) => {
//         console.log('Something went wrong ', e)
//     })
// })

// push(ref(db, 'expenses'), {expenses}).then(() => {
//     console.log('data pushed successfully')
// }).catch((e) => {
//     console.log('Something went wrong', e)
// })


//retrieve data back from firebase and push it into an array for use

// onValue(ref(db, 'expenses'), 
//     (dataSnapshot) => {
//     const expenses = []
//     dataSnapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         })
//     })
//     console.log(expenses)
//     }, {
//         onlyOnce: false
//     }
// )


// subscribe to data in the db

// onValue(ref(db), 
//     (dataSnapshot) => {
//     const val = dataSnapshot.val();
//     console.log(val)
//     }, {
//         onlyOnce: false
//     }
// )

// additional subscribers

// onChildChanged(ref(db, 'expenses'), 
//     (dataSnapshot) => {
//         console.log(dataSnapshot.key, dataSnapshot.val())
//     }, {
//         onlyOnce: false
//     }
// )

// onChildRemoved(ref(db, 'expenses'), 
//     (dataSnapshot) => {
//         console.log(dataSnapshot.key, dataSnapshot.val())
//     }, {
//         onlyOnce: false
//     }
// )

