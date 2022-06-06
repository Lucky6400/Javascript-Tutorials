'use strict';

console.log(Array.from({length: 6}, () => 6)); // [ 6, 6, 6, 6, 6, 6 ]

console.log(Array.from({length: 6}, (_, index) => index + 1)); // [ 1, 2, 3, 4, 5, 6 ]

// generate 100 random dice numbers.
console.log(Array.from({length: 100}, () => Math.floor(Math.random() * 6 + 1)));
// here we are getting random values between 1 to 6. syntax: Math.random()*max + min;