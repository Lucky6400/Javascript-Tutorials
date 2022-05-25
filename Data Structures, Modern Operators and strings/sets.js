'use strict';

const india = new Set(['Batsman', 'All-rounder', 'Batsman', 'Batsman', 'All-rounder', 'All-rounder', 'Wicket-Keeper', 'Bowler', 'Bowler', 'Bowler', 'Bowler']);

console.log(india);
// output is Set(4) { 'Batsman', 'All-rounder', 'Wicket-Keeper', 'Bowler' }
// (4) after Set in output means the types of elements present inside this set


const thala = new Set('Dhoni');
console.log(thala);
// Set(5) { 'D', 'h', 'o', 'n', 'i' }

console.log(thala.size); // 5
thala.add('s'), thala.add('m')
console.log(thala); // Set(7) { 'D', 'h', 'o', 'n', 'i', 's', 'm' }

console.log(thala.has('i')) // true
thala.delete('s'), thala.delete('m');
console.log(thala);  // Set(5) { 'D', 'h', 'o', 'n', 'i' }

for( const playerTypes of india ){
    console.log(playerTypes);
}

/*
Result of above iteration is:

Batsman
All-rounder
Wicket-Keeper
Bowler

*/

// convert array into set
const australia = ['wicketkeeper', 'batsman', 'batsman', 'allrounder', 'allrounder', 'allrounder', 'allrounder', 'bowler', 'bowler','bowler','bowler'];

const aussieSet = new Set(australia);
console.log(aussieSet);

// convert set into array
const compressedAussie = [...new Set(australia)];
console.log(compressedAussie);

// find length of the string
console.log(new Set('virendrasehwag').size)