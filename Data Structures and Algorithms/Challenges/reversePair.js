function reversePairs(nums) {
    let count = 0;

    function mergeSort(nums, left, right) {
        if (left >= right) {
            return;
        }

        const mid = Math.floor((left + right) / 2);
        mergeSort(nums, left, mid);
        mergeSort(nums, mid + 1, right);

        // Count the reverse pairs
        let i = left;
        let j = mid + 1;
        while (i <= mid && j <= right) {
            if (nums[i] > 2 * nums[j]) {
                count += mid - i + 1;
                j++;
            } else {
                i++;
            }
        }

        // Merge the two sorted halves
        const sorted = [];
        let p = left;
        let q = mid + 1;
        while (p <= mid || q <= right) {
            if (p > mid) {
                sorted.push(nums[q++]);
            } else if (q > right) {
                sorted.push(nums[p++]);
            } else {
                if (nums[p] < nums[q]) {
                    sorted.push(nums[p++]);
                } else {
                    sorted.push(nums[q++]);
                }
            }
        }

        for (let k = left; k <= right; k++) {
            nums[k] = sorted[k - left];
        }
    }

    mergeSort(nums, 0, nums.length - 1);
    return count;
}

// Example usage:
const nums = [1, 3, 2, 3, 1];
console.log(reversePairs(nums)); // Output: 2

const nums2 = [2, 4, 3, 5, 1];
console.log(reversePairs(nums2)); // Output: 3
