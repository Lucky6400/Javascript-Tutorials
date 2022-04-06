/*
The JavaScript for in statement loops through the properties of an Object.

for (key in object) {
  // code block to be executed
}

! Do not use for in over an Array if the index order is important.
 TODO: It is better to use a for loop, a for of loop, or Array.forEach() when the order is important.
*/
const person = { fname: "John", lname: "Doe", age: 25 };

for (let x in person) {
    console.log(person[x]);
}