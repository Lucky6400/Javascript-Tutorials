function splitArray(nums, k) {
    // Define the search range: minimum and maximum possible values for the largest sum
    let left = Math.max(...nums); // Minimum possible value for the largest sum is the maximum element in nums
    let right = nums.reduce((sum, num) => sum + num, 0); // Maximum possible value for the largest sum is the sum of all elements in nums

    // Perform binary search
    while (left <= right) {
        const mid = Math.floor((left + right) / 2); // Calculate the middle value for the binary search
        const subarraysCount = countSubarrays(nums, mid); // Count the number of subarrays with the current guess for the largest sum

        if (subarraysCount > k) {
            left = mid + 1; // Current guess is too small, update the left pointer to search in the right half
        } else {
            right = mid - 1; // Current guess is valid or too large, update the right pointer to search in the left half
        }
    }

    return left; // Return the left pointer as the minimized largest sum
}

function countSubarrays(nums, targetSum) {
    let count = 1; // Initialize count to 1, as at least one subarray is required
    let currentSum = 0;

    for (let num of nums) {
        currentSum += num;
        if (currentSum > targetSum) {
            // Start a new subarray if the current sum exceeds the target sum
            count++;
            currentSum = num;
        }
    }

    return count; // Return the count of subarrays
}

// Example usage:
const nums = [7, 2, 5, 10, 8];
const k = 2;
const minimizedLargestSum = splitArray(nums, k);
console.log(minimizedLargestSum); // Output: 18
