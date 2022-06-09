'use strict';

// we cannot use arrow function as it does not have it's own this keyword

//~ FOLLOWING IS A CONSTRUCTOR FUNCTION
function lucky(playerName, playerType){
    // console.log(this); // lucky {}
    this.playerName = playerName;
    this.playerType = playerType;
}

console.log(new lucky('Gautam Gambhir', 'Batsman')); // lucky { playerName: 'Gautam Gambhir', playerType: 'Batsman' }

/*
? New object is created
? Function is called, this keyword is set. this = {}
? object is linked to prototype
? function automatically returns {}
*/