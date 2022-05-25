'use strict';

// it is used to map values to keys
// keys can be of any type like numbers, arrays, objects, boolean etc... . In objects, keys are always string.

const india = new Map();
// ('key', 'value')
india.set('player', 'Sehwag');
india.set(1, 'Gambhir');
india.set(2, 'Virat');
india.set('lowerOrder', ['Dhoni','Raina','Yusuf']).set('captain','Dhoni').set('mainBowler','Zaheer');

console.log(india);

console.log(india.get('captain'));
console.log(india.get(2) + " is the greatest batsman ever");

console.log(india.has('captain')); // returns true
india.delete('mainBowler');
console.log(!india.has('mainBowler') && 'Yeah Zaheer is currently injured.');

// Iterating maps

for (const [key, value] of india) {
    console.log(key," = ", value);
}