'use strict';

/*

MAP: It takes an array and returns a brand new array which contains the result of applied operations.

FOREACH: It just allows us to do something with each array element.

FILTER: It returns a new array with elements that satisfy the passed condition.

REDUCE: Reduces or boils all array elements into a one single value (adding all elements together). No new array is returned and one single value is returned.

*/

//? MAP METHOD
// UNLIKE FOREACH, IT GIVES A BRAND NEW ARRAY

// runs scored in 88 balls
const runs = [111, 122, 101, 108, 145];

const strikeRate = runs.map((score) =>
(
    Number(Math.floor(String((score / 88) * 100)) +
        String((score / 88) * 100).slice(String((score / 88) * 100).indexOf('.'), String((score / 88) * 100).indexOf('.') + 3)) // I used this method to return numbers correct upto 2 decimal places
));

console.log(strikeRate);
// returns calculated strikerate
// [ 126.13, 138.63, 114.77, 122.72, 164.77 ]

//? FILTER METHOD

const lastFewInnings = [111, 50, 22, 31, 44, 76, 98, 176];

const halfCenturies = lastFewInnings.filter((score) => (score >= 50));
// this will return scores that are greater than or equal to 50.
console.log(halfCenturies);
// [ 111, 50, 76, 98, 176 ]

//? REDUCE METHOD

const lastTenInnings = [0, 12, 11, 54, 30, 23, 77, 56, 100, 111];

const lastTenInningsScore = lastTenInnings.reduce((accumulator, currentElement, index, array) => (
    accumulator + currentElement
));
// accumulator: starting value in this iteration, so at first it will be zero, but when the current element will be added, it will be changed.
console.log(lastTenInningsScore)

//? Self Challenge: Calculate total score using 'for loop'
// function calculateScore() {
//    let sum = 0;
//    for (let i = 0; i < lastTenInnings.length; i++){
//         sum += lastTenInnings[i];
//     }
//     console.log([sum].at(-1));
// }
// calculateScore();

//? FIND METHOD

console.log(runs.find(score => score < 120));
// returns first value which is true
// returns 111