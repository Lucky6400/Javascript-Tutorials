var findMedianSortedArrays = function (nums1, nums2) {
    let newArr = nums1.concat(nums2);
    let sortedArr = newArr.sort((a, b) => a - b);

    if (sortedArr.length % 2 === 0) {
        let left = sortedArr[(sortedArr.length / 2) - 1];
        let right = sortedArr[(sortedArr.length / 2)];
        console.log(left, right);
        return (left + right) / 2
    } else {
        let middle = Math.ceil(sortedArr.length / 2)
        return sortedArr[middle - 1]
    }


};

console.log(findMedianSortedArrays([1, 2], [3, 4]))