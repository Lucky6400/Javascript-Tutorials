'use strict';

const india = {
    captain: 'Dhoni',
    ranking: '1',
    trophies: [],
    play(indOpn, teamName){
        console.log(`${indOpn} scored winning runs and ${teamName} won the WorldCup under ${this.captain}'s captaincy. ${teamName} is currently at No.${this.ranking} in ICC ODI Rankings`);
        this.trophies.push({
            name: 'World Cup',
            year: 2011,
        })
    },
};

india.play('Virendra Sehwag', 'India');

const australia = {
    captain: 'Ponting',
    ranking: '2',
    trophies: [],
}

const play = india.play;

//? BIND method
const ausPlay = play.bind(australia);
// this will not call a new function, this will create a new function where the 'this' keyword is always set to australia.

ausPlay('Michael Bevan', 'Australia');