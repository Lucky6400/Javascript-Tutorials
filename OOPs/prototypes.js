'use strict';

// A prototype contains all the methods

function lucky(playerName, playerType){
    // console.log(this); // lucky {}
    this.playerName = playerName;
    this.playerType = playerType;
}

lucky.prototype.playerPosition = 6;

console.log(lucky.prototype); // { playerPosition: 6 }

