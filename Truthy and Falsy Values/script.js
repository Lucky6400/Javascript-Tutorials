// Falsy values are not exactly false but will become false as we try to convert them into a boolean. 

//There are 5 falsy values: 0, ''(empty string), undefined, null, NaN
// rest all are truthy values

console.log(Boolean(0)) // returns false
console.log(Boolean('')) // returns false
console.log(Boolean(undefined)) // returns false
console.log(Boolean(null)) // returns false
console.log(Boolean(NaN)) // returns false