/*
Given an array of integers and a number, write a function called maxSubarraySum, which finds the maximum sum of a subarray with the length of the number passed to the function.

Note that a subarray must consist of consecutive elements from the original array. In the first example below, [100, 200, 300] is a subarray of the original array, but [100, 300] is not.
*/

function maxSubArraySum(arr, num) {
    if (num > arr.length) return null;
    let total = 0;
    for(let i = 0; i < num; i++) {
        total += arr[i];
    }
    let currentTotal = total
    
    for(let i = num; i < arr.length; i++) {
        currentTotal += arr[i] - arr[i - num];
        total = Math.max(total, currentTotal);
    }
    return total;
}

maxSubArraySum([100, 200, 300, 400], 2) // 700
maxSubArraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)  // 39 
maxSubArraySum([-3, 4, 0, -2, 6, -1], 2) // 5
maxSubArraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2) // 5
maxSubArraySum([2, 3], 3) // null



/*
Leetcode medium --> Without num parameter

*/


const maxSubArray = function (nums) {
    let max = nums[0];
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        if (sum > max) {
            max = sum;
        }
        if (sum < 0) {
            sum = 0;
        }
    }
    return max;
};

console.log(maxSubArray([1, 2, -1]))