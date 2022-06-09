'use strict';

const date = new Date();
console.log(date); // 2022-06-06T16:08:04.106Z

console.log(new Date(0)); // 1970-01-01T00:00:00.000Z

// convert 6 days to milliseconds
let milliseconds = 6 * 24 * 60 * 60 * 1000;

// operations with dates

const date01 = new Date(2025, 6, 4, 18, 55);

console.log(date01)

const daysPassed = (d1, d2) => Math.abs(d1 - d2)/(1000 * 60 * 60 * 24); // 1096

console.log(daysPassed(new Date(2025, 5, 4), new Date(2022, 5, 4)));