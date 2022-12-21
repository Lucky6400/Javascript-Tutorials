// Write a function which accepts a sorted array of integers. The function should find the first pair where the sum is 0. Return an array that includes both values that sum to 0 or undefined if pair does not exist.

function sumZero(arr) {
    let currentIndex = 0;
    let firstNum;
    let secondNum;


    while (currentIndex < (arr.length - 1)) {
        let firstNumber = arr[currentIndex];
        let secondNumber = arr.find(item => item + firstNumber === 0);
        if (!secondNumber) {
            currentIndex++;
        } else {
            firstNum = firstNumber;
            secondNum = secondNumber;
            break;
        }

    }
    return firstNum && secondNum ? [firstNum, secondNum] : undefined;
}

console.log(sumZero([-3, -2, -1, 0, 1, 3, 11, 21]))

// Write a function that accepts a sorted array, and counts the unique values in the array. There can be negative numbers in the array, but it will always be sorted.

function countUniqueValues(arr) {
    return [...new Set(arr)].length
}

console.log(countUniqueValues([1,1,1,1]))

/*
? With multiple pointer pattern
function countUniqueValues(arr){
    if(arr.length === 0) return 0;
    var i = 0;
    for(var j = 1; j < arr.length; j++){
        if(arr[i] !== arr[j]){
            i++;
            arr[i] = arr[j]
        }
    }
    return i + 1;
}
countUniqueValues([1,2,2,5,7,7,99])
*/