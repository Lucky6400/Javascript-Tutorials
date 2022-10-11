'use strict';

class Australia {

    constructor(opener, captain, bowler) {
        this.opener = opener;
        this.captain = captain;
        this.bowler = bowler;
    }
    //? instance methods (will be added to prototypes);
    printBowlerName() {
        console.log(this.bowler);
    }

    //? static methods (will not be added to prototypes);
    static printOpenerName() {
        console.log(this.opener || 'Hayden');
    }
}

const aussies = new Australia('Gilchrist', 'Ponting', 'Bracken');
aussies.printBowlerName(); //~ Bracken
aussies.printOpenerName(); //! throws error
Australia.printOpenerName(); //~ Hayden