/*
Given an unsorted array and a number n, find if there exists a pair of elements in the array whose difference is n. This function should return true if the pair exists or false if it does not.
*/
function findPair(arr, n) {

    if (arr.length === 0) return false;

    let reqDiff = Math.abs(n);
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        let diff = Math.abs(arr[left] - arr[right]);

        if (diff === reqDiff) {
            console.log(true, arr.length)
            return true
        };

        if (right === left + 1) {
            right = arr.length - 1;
            left++;
        } else {
            right--;
        }
    }
    console.log(false, arr.length)
    return false;
}

findPair([6, 1, 4, 10, 2, 4], 2) // true
findPair([8, 6, 2, 4, 1, 0, 2, 5, 13], 1) // true
findPair([4, -2, 3, 10], -6) // true
findPair([6, 1, 4, 10, 2, 4], 22) // false
findPair([], 0) // false
findPair([5, 5], 0) // true
findPair([-4, 4], -8) // true
findPair([-4, 4], 8) // true
findPair([1, 3, 4, 6], -2) // true
findPair([0, 1, 3, 4, 6], -2) // true