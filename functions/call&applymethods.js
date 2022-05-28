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
console.log(india);

const australia = {
    captain: 'Ponting',
    ranking: '2',
    trophies: [],
}

const play = india.play;

// play('Gambhir') Cannot read properties of undefined (reading 'captain')
// To fix the issue, we will use call method
//? CALL method
play.call(australia, 'Adam Gilchrist', 'Australia');
// now this function is called for australia object.

//? Apply method
play.apply(australia, ['Hayden', 'Australia']);
// the only difference here is that it takes an array of arguements
play.call(australia, ...['Waugh', 'Australia']);
// exactly same thing