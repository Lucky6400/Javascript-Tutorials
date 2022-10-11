'use strict';

class teamIndia {
    constructor(playerName, playerPosition) {
        this.playerName = playerName;
        this.playerPosition = playerPosition;
    }
}

const team = new teamIndia('Sehwag', 2); // this will call the constructor function and the 'new' keyword will create an object.
console.log(team) // teamIndia { playerName: 'Sehwag', playerPosition: 2 }

// classes are NOT hoisted
// classes are executed in strict mode