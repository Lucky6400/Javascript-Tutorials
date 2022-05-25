'use strict';

const india = ['Sachin', 'Sehwag', 'Gambhir'];

const newIndia = [...india, 'Raina', 'Dhoni', 'Zaheer'];
console.log(newIndia);
console.log(...newIndia);

// Iterables: arrays, strings, maps, sets. NOT objects

const player = 'Yuvraj Singh';
const playerArray = [...player];
console.log(playerArray);

function addPlayer(playerName, playerPosition, playerHand){
    console.log(`We are adding ${playerName} to our team. The ${playerHand} will bat at ${playerPosition} and will give a valuable contribution.`);
}

const playerInfo = ['Robin Uthappa', 6, 'Right Hander']

addPlayer(...playerInfo); // see result in console

// spread operator with objects

const team = {...india};
console.log(team); // returns { '0': 'Sachin', '1': 'Sehwag', '2': 'Gambhir' }