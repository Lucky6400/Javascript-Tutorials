'use strict';

// A prototype contains all the methods

function Lucky(playerName, playerType){
    // console.log(this); // Lucky {}
    this.playerName = playerName;
    this.playerType = playerType;
}
const team = new Lucky('Gautam Gambhir', 'Batsman');
const team01 = new Lucky('Virender Sehwag', 'Batsman');

console.log(Lucky.prototype); // {}

Lucky.prototype.playerPosition = function(position){
    console.log(position);
};

// below u'll see prototypal inheritance
team.playerPosition(1); // returns 1
team01.playerPosition(2) // returns 2
// as u see, we defined playerposition method to class Lucky and now any object created using it can use it
console.log(team.playerName);
console.log(team.playerType);
console.log(team.__proto__); // { playerPosition: [Function (anonymous)] }

console.log(Lucky.prototype.isPrototypeOf(team01))
