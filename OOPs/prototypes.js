'use strict';

// A prototype contains all the methods

function Lucky(playerName, playerType){
    // console.log(this); // Lucky {}
    this.playerName = playerName;
    this.playerType = playerType;
}
const team = new Lucky('Gautam Gambhir', 'Batsman');
// 'new' operator creates an empty object instantly.

console.log(Lucky.prototype); // {}

Lucky.prototype.playerPosition = function(){
    console.log(6);
};

team.playerPosition(); // returns 6
console.log(team.playerName);
console.log(team.playerType);
console.log(team.__proto__); // { playerPosition: [Function (anonymous)] }

// Prototypes
console.log(Person.prototype);
Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};
jonas.calcAge();
matilda.calcAge();
console.log(jonas.__proto__);
console.log(jonas.__proto__ === Person.prototype);
console.log(Person.prototype.isPrototypeOf(jonas));
console.log(Person.prototype.isPrototypeOf(matilda));
console.log(Person.prototype.isPrototypeOf(Person));
// .prototyeOfLinkedObjects
Person.prototype.species = 'Homo Sapiens';
console.log(jonas.species, matilda.species);
console.log(jonas.hasOwnProperty('firstName'));
console.log(jonas.hasOwnProperty('species'));
///////////////////////////////////////
// Prototypal Inheritance on Built-In Objects
console.log(jonas.__proto__);
// Object.prototype (top of prototype chain)
console.log(jonas.__proto__.__proto__);
console.log(jonas.__proto__.__proto__.__proto__);
console.dir(Person.prototype.constructor);
const arr = [3, 6, 6, 5, 6, 9, 9]; // new Array === []
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);
console.log(arr.__proto__.__proto__);
Array.prototype.unique = function () {
  return [...new Set(this)];
};
console.log(arr.unique());
const h1 = document.querySelector('h1');
console.dir(x => x + 1);