console.log('destructuring')

// object destructuring

// const person = {
//     name: 'Charlie',
//     age: 31,
//     location:
//     {
//         city: 'Edinburgh',
//         temp: 13
//     }

// };

// // const name = person.name;
// // const age = person.age;

// const { name: firstName = 'Anonymous', age} = person;

// console.log(`${firstName} is ${age}`);

// const {city, temp: temperature} = person.location;

// if (city && temperature) {
// console.log( `its ${temperature} in ${city}`)
// }



// const book = {
//     'title': 'Ego is the Enemy',
//     'author': 'Ryan Holiday',
//     'publisher': {
//         'name': 'Penguin' 
//     }
// }

// const {name: publisherName = 'Self Published'} = book.publisher

// console.log(publisherName);


////Array destructuring


const address = ['1299 S Juniper Street', 'EDINBURGH', 'SCOTLAND', 'ED4 4US'];

const [, city, state = 'New York'] = address

console.log(`you are in ${city} ${state}`)



const item = ['Coffee (hot)', '£2.00', '£3.00', '£3.50' ]

const [coffee, , mediumPrice] = item


console.log(`a medium ${coffee} costs ${mediumPrice}`)
