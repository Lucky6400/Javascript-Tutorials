'use strict';

const team = {
    captain: 'Dhoni',
    strength: 17,

    get praise() {
        return 'This is a great team'
    },

    set runs(score) {
        console.log('set runs', score)
    }
}

console.log(team.praise) // This is a great team.
// we did not call a function, instead set it as a property

team.runs = 329;
// console.log(team.runs)