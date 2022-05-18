'use strict';

// "this" keyword always points to the owner of the function where the "this" keyword is used.

// "this" is not static and it's value is assigned only when the function is called.

// arrow functions don't have a "this" keyword so if we use "this" in an arrow function, it will take value of a parent function.

// REGULAR FUNCTION
function printName(playerName) {
    console.log(playerName);
    console.log(this); // returns undefined
}

printName("Diego Costa");

// ARROW FUNCTION
const writeName = (footballer) => {
    console.log(footballer);
    console.log(this); // returns an empty object in terminal, and window object in browser.
}

writeName("Cesc Fabregas");

const spain = {
    player0: "Diego Costa",

    returnName: function () {
        console.log(this); // returns the whole object
    }
}

spain.returnName();

// METHOD BORROWING

const brazil = {}

brazil.player0 = spain.player0; // now brazil object will have player0 property

console.log(brazil); // returns { player0: 'Diego Costa' }
