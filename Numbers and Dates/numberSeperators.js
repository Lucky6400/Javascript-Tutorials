'use strict';
//? ES2021 feature

const stupidity = 294807395692074; // => large number that is difficult to identify

// simply put _ anywhere between numbers
console.log(432_333_222_234); //432333222234
// js ignored _ (number seperator)

console.log(Number('22_33')); // NaN
console.log(parseInt('22_22')); // 22