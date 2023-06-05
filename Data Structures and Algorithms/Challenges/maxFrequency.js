/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const maxFrequency = function (nums, k) {
    const n = nums.length;
    nums.sort((a, b) => a - b);

    let maxFreq = 1;
    let operations = k;
    let left = 0;

    for (let right = 1; right < n; right++) {
        operations -= (nums[right] - nums[right - 1]) * (right - left);

        while (operations < 0) {
            operations += nums[right] - nums[left];
            left++;
        }

        maxFreq = Math.max(maxFreq, right - left + 1);
    }

    return maxFreq;
};