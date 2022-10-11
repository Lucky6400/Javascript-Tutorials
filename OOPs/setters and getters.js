'use strict';

const team = {
    captain: 'Dhoni',
    strength: 17,

    get praise() {
        return 'This is a great team'
    },

    set praise(score) {
        console.log('set runs', score)
    }
}

team.praise = 131;
console.log(team.praise)
// output 👇🏽
/*
~ set runs 131
~ This is a great team.
*/

// we did not call a function, instead set it as a property. That is what 'setter' did to 'praise' function.

//~ setters and getters on classes

class TeamIndia {
    constructor(captain, strength) {
        this.captain = captain;
        this.strength = strength;
    }

    set captain(captain) {
        this.currentCaptain = captain; 
        //? now instead of captain, the property is currentCaptain

        if (captain.includes('Dhoni')) {
            console.log('Captain Cool!')
        } else {
            // this.captain = captain; //! throws error!
            console.log(`${captain} is Captain Fool!`)
        }
    }

    get captain() {
        return this.currentCaptain;
    }

}

const india = new TeamIndia('Rohit', 17);
console.log(india)
console.log(india.captain)