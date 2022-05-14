/*
1. Create an array 'bills' containing all 10 test bill values
2. Create empty arrays for the tips and the totals ('tips' and 'totals')
3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate
tips and total values (bill + tip) for every bill value in the bills array. Use a for
loop to perform the 10 calculations!

Bonus: Write a function 'calcAverage' which takes an array called 'arr' as an argument. This function calculates the average of all numbers in the given array.
*/

// Solution:
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

const tips = [];
const totals = [];

function calcTip(bill){
    return bill<50 && bill> 300?(bill*10)/100:(bill*15)/100; 
}

for(let i = 0; i < bills.length; i++){
    const tip = calcTip(bills[i]);
    tips.push(tip);
    totals.push(tip + bills[i]);
}

console.log(tips);
console.log(totals);

function calcAverage(arr){
    let sum = 0;
     for(let i = 0; i < bills.length; i++){
        sum += bills[i]
    }
    return sum/arr
}
console.log(calcAverage(bills.length))
