/** Time Complexity --> O(n * k)
 *  Space Complexity --> O(n + k)
 *  n => length of array
 *  k => number of digits
 */
function RadixSort(nums) {
    let maxDigCount = mostDigits(nums);

    for (let i = 0; i < maxDigCount; i++) {
        let digitBuckets = Array.from({ length: 10 }, () => []);
        for (let j = 0; j < nums.length; j++) {
            let digit = getDigit(nums[j], i);
            digitBuckets[digit].push(nums[j]);
        }
        nums = [].concat(...digitBuckets);
    }

    return nums;
}

console.log(RadixSort([23, 345, 5467, 12, 2345, 9852]))

// helper methods for radix sort

function getDigit(number, placeValue) {
    //returns the digit in number at a given placeValue
    /* 
    example:- getDigit(12345, 0) ==> 5
              getDigit(12345, 1) ==> 4
    */

    return Number(String(number).charAt(number.toString().length - 1 - placeValue))
}

function getDigitCount(number) {
    // returns how many digits are there in the number
    return number.toString().length;
}

function mostDigits(numbers) {
    // returns the number of digits in the largest numbers in the array 
    // O(n) time complexity

    return Math.max(...numbers).toString().length;
}

// console.log(getDigit(12345, 2));
// console.log(getDigitCount(12345));
// console.log(mostDigits([1, 12, 23, 333]))