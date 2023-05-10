/** Given a sorted array and a number, write a function called sortedFrequency that counts the occurrences of 
 *  the number in the array */
function sortedFrequency(arr, num) {
    // add whatever parameters you deem necessary - good luck!
    let first = -1;
    let last = -1;
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let middle = Math.floor((left + right) / 2);
        if (arr[middle] === num && (middle === 0 || arr[middle - 1] < num)) {
            first = middle;
            break;
        } else if (num > arr[middle]) {
            left = middle + 1;
        } else {
            right = middle - 1;
        }
    }

    if (first === -1) return -1;

    left = first;
    right = arr.length - 1;

    while (left <= right) {
        let middle = Math.floor((left + right) / 2);
        if (arr[middle] === num && (middle === arr.length - 1 || arr[middle + 1] > num)) {
            last = middle;
            break;
        } else if (num >= arr[middle]) {
            left = middle + 1;
        } else {
            right = middle - 1;
        }
    }

    return last - first + 1;

}
