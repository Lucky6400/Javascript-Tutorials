'use strict';

// rest operator packs elements into array
// it is used on the left hand side of the  '=' sign
// spread is used on right side
const [a, b, ...others] = [1,2,3,4,5,6,7,8,9,0];
console.log(a, b, others); 

const indiaOld = ['Kapil Dev', 'K Srikkanth', 'Sunil Gavaskar', 'Ravi Shastri'];

const indiaMedium = ['Sachin', 'Sehwag', 'Ganguly','Dravid'];

const indiaNew = ['Dhoni', 'Raina', 'Uthappa', 'Virat'];

const [greatPlayer, goodPlayer, ...otherPlayers] = [...indiaMedium, ...indiaNew];

console.log(greatPlayer, goodPlayer, otherPlayers);
// see result in console for more info and knowledge about this.
// rest element must be last element
// there must be only one rest operator in an assignment.

// Objects

const australia = {
    p0: 'Gilchrist',
    p1: 'Hayden',
    p2: 'Ponting',
    p3: 'Clarke',
    p4: 'Hodge',
    p5: 'Hussey',
    p6: 'Symonds',
    p7: 'Watson',
    p8: 'Lee',
    p9: 'Bracken',
    p10: 'McGrath'
}

const { p9, ...otherAussies } = australia;
console.log(otherAussies);
// as you can see, p9 was out of the otherAussies object. this is how it works

// REST parameters

function addPlayer(...details){
    console.log(`We at Australian Cricket Board are feeling excited to announce that a new player ${details[0]}, ${details[1]}, from ${details[4]} has joined our squad as a ${details[3]} ${details[2]}.`);
}

// returns: We at Australian Cricket Board are feeling excited to announce that a new player Shaun Tait, 21, from South Australia has joined our squad as a Right Handed Fast Bowler.
addPlayer('Shaun Tait', 21, 'Fast Bowler', 'Right Handed', 'South Australia');