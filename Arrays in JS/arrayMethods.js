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