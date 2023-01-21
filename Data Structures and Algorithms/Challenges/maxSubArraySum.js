/*
Given an array of integers and a number, write a function called maxSubarraySum, which finds the maximum sum of a subarray with the length of the number passed to the function.

Note that a subarray must consist of consecutive elements from the original array. In the first example below, [100, 200, 300] is a subarray of the original array, but [100, 300] is not.
*/

function maxSubArraySum(arr, num) {
    if (num > arr.length) return null;
    let left = 0;
    let right = num;
    let sum = 0;
    let newArr = [];
    while (right <= arr.length) {
        newArr.push(arr.slice(left, right).reduce((acc, curr) => acc + curr, 0));
        left++;
        right++;
    }
    console.log(Math.max(...newArr))
    return Math.max(...newArr)
}

maxSubArraySum([100, 200, 300, 400], 2) // 700
maxSubArraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)  // 39 
maxSubArraySum([-3, 4, 0, -2, 6, -1], 2) // 5
maxSubArraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2) // 5
maxSubArraySum([2, 3], 3) // null