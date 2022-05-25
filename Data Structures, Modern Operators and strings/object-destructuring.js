'use strict';

const spain = {
    player0: {
        id: 1,
        playerName: 'David Villa',
        position: 'CST'
    },
    player1: {
        id: 2,
        playerName: 'Xavi',
        position: 'CM'
    },
    player2: {
        id: 3,
        playerName: 'Cesc Fabregas',
        position: 'AM'
    },
    player3: {
        id: 4,
        playerName: 'Iker Casillas',
        position: 'GK'
    },
}

// destructuring object
const {player0, player1, player2, player3 } = spain;
console.log( player0,"\n", player1,"\n", player2,"\n", player3);

// other way
// below we define the variables for these propertynames so that const first = spain.player0;
const {player0: first, player1: second, player2: third, player3: fourth} = spain;
console.log( first,"\n", second,"\n", third,"\n", fourth );

//Mutating variables
let a = 7;
let b = 10;

const randomObject = {a: 11, b:22};
// let {a, b} = randomObject; throws error
({a, b} = randomObject) // only this method  will work
console.log( a,"\n", b,"\n") // now a and b have their values reassigned


// nested objects
const { player0: {id, playerName, position} } = spain;

console.log(playerName, position); // returns David Villa CST