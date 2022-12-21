/*
Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.

Your solution MUST have the following complexities:

Time: O(N)
*/

function sameFrequency(num1, num2) {
    if(String(num1).length !== String(num2).length){
        return false;
    }
    let frequency1 = {}
    let frequency2 = {};

    let arr1 = String(num1).split('');
    let arr2 = String(num2).split('');
    for (let item of arr1) {
        frequency1[item] = item;
    }
    for (let item of arr2) {
        frequency2[item] = item;
    }
    console.log(frequency1, frequency2)
    for (let key in frequency1) {
        if (!(key in frequency2)) {
            return false;
        }
    }
    return true;
}

console.log(sameFrequency(22, 222))