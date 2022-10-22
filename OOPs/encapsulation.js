'use strict';

// Encapsulation: Protected Properties and Methods
//  Encapsulation: Private Class Fields and Methods
//  1) Public fields
//  2) Private fields
//  3) Public methods
//  4) Private methods

class TeamIndia {
  // private property
    #captain = 'Dhoni';
    constructor( viceCaptain){
        //public property
        this.viceCaptain = viceCaptain;
    }

    // public method
    getOpener(){
      return 'Sehwag'
    }
    getCaptain(){
      return this.#captain
    }
    // private method
    _getSlogan(){
      return 'De Ghumake!'
    }
}

const india = new TeamIndia('Yuvraj');

console.log(india.captain) // returns undefined
//console.log(india.getSlogan())
console.log(india.getCaptain())