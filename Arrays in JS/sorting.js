'use strict';

const players = ['Sachin', 'Sehwag', 'Gambhir', 'Virat', 'Yuvraj', 'Raina', 'Dhoni', 'Harbhajan', 'Munaf', 'Nehra', 'Zaheer'];

// console.log(players.sort()); // sorts alphabetically

// sort method mutates the array
// console.log(players); // now we will get the sorted array because the original one is mutated.


const transactions = [-222, 2304, 434, -333, 322, 1234, -3433];

// sort in ascending order

// transactions.sort((currentValue, nextValue) => {
//     if( currentValue > nextValue ){
//         return 1; // switch order
//     } else if (currentValue < nextValue) {
//         return -1; // keep order
//     }
// });

// another method
transactions.sort((currentValue, nextValue) => currentValue - nextValue);
console.log(transactions); // now the array is in ascending order

// sort in descending order
transactions.sort((currentValue, nextValue) => nextValue - currentValue);
console.log(transactions); // now the array is in descending order