'use strict';

const india = {
    one: 'Sachin',
    two: 'Sehwag',
    three: 'Gambhir',
    four: 'Virat',
    five: 'Yuvraj',
    six: 'Raina',
    seven: 'Dhoni',
    eight: 'Harbhajan',
    nine: 'Irfan',
    ten: 'Sreesanth',
    eleven: 'Zaheer'
}
const players = Object.keys(india)
console.log(`The ${players.length} player squad of Team India is announced.`)

for( const [players, playernames] of Object.entries(india)){
    console.log(players + " : " + playernames);
    
}

const arr = ['a', 'b', 'a'];
const scorers = {};
for( const players of arr){
    scorers[players] ? scorers[players]++ : (scorers[players] = 1);
    // above statement will return how many times an element in an array has come. see console for more
}
console.log(scorers);

