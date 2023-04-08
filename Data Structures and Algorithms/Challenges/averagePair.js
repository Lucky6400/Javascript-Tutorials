/*
Write a function called averagePair. Given a sorted array of integers and a target average, determine if there is a pair of values in the array where the average of the pair equals the target average. There may be more than one pair that matches the average target.
*/

/** MY METHOD (VERY STUPID😑) */
function averagePair(array, target) {
    let currentIndex = 0;

    while (currentIndex < array.length) {
        let currentValue = array[currentIndex];
        let nextValue = array.find(item => (item + currentValue) / 2 === target);
        if (nextValue) {
            return true;
        } else {
            currentIndex++;
        }
    }
    return false;
}

console.log(averagePair([1, 2, 3], 2.5)) // returns true
console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1))


/** USING BINARY SEARCH */
function averagePairEfficient(array, target) {
    if (array.length === 0) {
        return false;
    }

    let left = 0;
    let right = array.length - 1;

    while (left < right) {
        let average = (array[left] + array[right]) / 2;
        if (average === target) {
            return true;
        } else if (average > target) {
            right--;
        } else if (average < target) {
            left++;
        }
    }
    return false;
}