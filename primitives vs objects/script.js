'use strict';
// PRIMITIVE TYPES
let marks = 99;
let newMarks = marks;
marks = 100; // now marks is set to 100
 
// console.log(marks + "\n" + newMarks) // as we see that newMarks is still 99 because marks was 99 at that particular point

/// REFERENCE TYPES
const me = {
    firstName: 'Lucky',
    age: 22,
};

const friend = me;
friend.age = 27;
console.log('Friend:', friend);
console.log('Me:', me); // age property got changed in me object also.

// OBJECT COPYING
const atleticoMadrid = {
    player0: 'Diego Costa'
}

const barcelona = {
    player1: 'Luis Suarez'
}

Object.assign(atleticoMadrid, barcelona);

console.log(atleticoMadrid) // a new object is returned and luis suarez is added to atletico. if we use player0 property in barcelona also and then tried to copy, then diego costa would've been replaced by luis suarez. try it!!!!!