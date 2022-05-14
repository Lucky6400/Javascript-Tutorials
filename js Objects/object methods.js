// any function that is attached to an object is called a method.

const england = { 
    p01: 'Trescothick',
    p02: 'Vaughan',
    openingPair: function(){
        return this.p01 + " " + this.p02
    }
}

console.log(england.openingPair())