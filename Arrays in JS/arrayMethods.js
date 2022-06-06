'use strict';

const india = ['Sachin', 'Sehwag', 'Gambhir', 'Dhoni'];

//? PUSH method adds an element to the end of the array, also returns a value called array length

india.push('Uthappa');
console.log(india);

//? UNSHIFT method adds an element to the beginning of an array

india.unshift('Ganguly');
console.log(india);

//? POP method removes the last element of the array

india.pop();
console.log(india);

//? SHIFT method removes first element from the array, this will return the element that was removed
india.shift();
console.log(india);

//? INDEXOF method finds index of the element in the array
const position = india.indexOf('Sachin');
console.log(position);

//? INCLUDES (ES6) returns boolean if the array has the element or not

const find = india.includes('Sehwag');
console.log(find);

//? SLICE Method

console.log(india.slice(1)); // start from 1 index
console.log(india.slice(2, 3)); // start from 2 and end before 3
console.log(india.slice(-1)); // get last element

//? SPLICE Method mutates the array whereas SLICE does not mutate the array

const australia = [
    'Gilchrist',
    'Hayden',
    'Ponting',
    'Hodge',
    'Clarke',
    'Hussey',
    'Symonds',
    'Lee',
    'Bracken',
    'Hauritz',
    'McGrath'
];

// console.log(australia.splice(5));
console.log(australia); // now only elements till index 4 are remaining in this array.

// remove Hauritz and add Hogg
console.log(australia.splice(-2, 1, 'Hogg'));
console.log(australia); // second parameter is the deleteCount and NOT the begin parameter, hence it works different than SLICE method.
// here it is stated that first reach the posiion -2 and then start to delete only 1 item from there. If we had selected 2, then mcgrath would also have been deleted.

//? REVERSE Method
const engOpeners = ['Vaughan', 'Trescothick']
console.log(engOpeners.reverse());
// [ 'Trescothick', 'Vaughan' ]

//? CONCAT Method
const topOrder = ['Smith', 'De Villiers', 'Gibbs']
const midOrder = ['Kallis', 'Morkel', 'Duminy']
const lowOrder = ['Boucher', 'Botha', 'Morkel', 'Ntini', 'Parnell']

console.log(topOrder.concat(midOrder).concat(lowOrder))
// returns that legendary South African squad🔥🔥🔥

//? JOIN Method
// console.log(australia.join(' and '));

//? AT method (ES 2022)
console.log(australia.at(1));
// find last element
console.log(australia.at(-1)); // McGrath
// at method can also be used on strings