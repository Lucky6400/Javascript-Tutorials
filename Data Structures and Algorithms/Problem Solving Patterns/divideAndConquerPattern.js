/*
Write a function that accepts a sorted array and a value and returns the index of value in that array.
*/

/** ---USING BINARY SEARCH--- */
function search(arr, value) {
    let min = 0;
    let max = arr.length - 1;
    let answer;
    while (min <= max) {
        let middle = Math.floor((max + min) / 2);
        let middleElement = arr[middle];

        if (middleElement < value) {
            min = middle + 1;
        } else if (middleElement > value) {
            max = middle - 1;
        } else if (middleElement === value) {
            answer = middle;
            break;
        }
    }
    return answer || -1;
}

console.log(search([1, 3, 5, 6, 7, 8, 9, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21], 17))

/*
Here we first check the middle element. If it is greater than value than we check values before that number only and if it is less than value then we check after that number only.
*/

/*
~ Why not Array.indexOf() method ???
Beacuse the time complexity of Array.indexOf is O(n) whereas time complexity of Binary Search algorithm is log(N) which is many times faster than O(n). 
!Binary Search only works for sorted arrays.
*/