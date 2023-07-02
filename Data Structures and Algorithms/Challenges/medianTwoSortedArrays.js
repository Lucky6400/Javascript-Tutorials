/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let results = [];
    let i = 0;
    let j = 0;

    while (i < nums1.length && j < nums2.length) {
        if (nums1[i] > nums2[j]) {
            results.push(nums2[j]);
            j++;
        } else {
            results.push(nums1[i]);
            i++;
        }
    }
    while (i < nums1.length) {
        results.push(nums1[i]);
        i++;
    }
    while (j < nums2.length) {
        results.push(nums2[j]);
        j++;
    }
    if (results.length % 2 === 0) {
        let left = results[results.length / 2 - 1];
        let right = results[results.length / 2];
        return (left + right) / 2
    }
    let middle = Math.ceil(results.length/2)
    return results[middle - 1]
};
