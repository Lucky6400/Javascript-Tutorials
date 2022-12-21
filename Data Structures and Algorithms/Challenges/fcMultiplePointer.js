/*
Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in.  You can solve this using the frequency counter pattern OR the multiple pointers pattern.
*/

/** DIDN'T USE MULTIPLE POINTER PATTERN */
function areThereDuplicates(...nums){
    let withoutDuplicates = [...new Set(nums)];
    return !(nums.length === withoutDuplicates.length)
}

console.log(areThereDuplicates(1,2,3))