const kadaneAlgorithm = function (nums) {
    let maxSum = nums[0]; // Initialize maxSum with the first element of the array
    let currentSum = nums[0]; // Initialize currentSum with the first element of the array

    // Iterate through the array starting from the second element
    for (let i = 1; i < nums.length; i++) {
        // Calculate the current sum by either extending the subarray or starting a new subarray
        currentSum = Math.max(nums[i], currentSum + nums[i]);

        // Update the maxSum if the current sum is greater
        maxSum = Math.max(maxSum, currentSum);
    }

    return maxSum;
};