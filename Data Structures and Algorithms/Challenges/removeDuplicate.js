/**
 * Given an integer array nums sorted in non-decreasing order, remove some duplicates in-place such that each unique element appears at most twice. The relative order of the elements should be kept the same.
 */

var removeDuplicates = function(arr) {
    for(let i = 0; i<arr.length; i++){
        if(arr[i] === arr[i+2]){
            arr.splice(i,1);
            i--
        }
    }
    return arr.length
};