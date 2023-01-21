/*
Write a function called recursiveRange which accepts a number and adds up all the numbers from 0 to the number passed to the function
*/

function recursiveRange(number){
    return number > 0 ? number + recursiveRange(number - 1) : 0
}

console.log(recursiveRange(10)) // 21