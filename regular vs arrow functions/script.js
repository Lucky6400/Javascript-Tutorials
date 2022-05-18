'use strict';
function luckyJain(a) {
    // console.log(this);
    console.log(arguments);
}
luckyJain(); // returns many things in console
const jainLucky = (a) => {
    console.log(this)
    console.log(arguments);
}
jainLucky(123); // returns an empty object
// arrow function does not have arguements keyword and this keyword
// arrow function cannot be called before declaration