/**
 * Gradually creates a larger left half.
 * Start by selecting the second element of the array. Swap if necessary.
 */

function InsertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let currentValue = arr[i];
        for (var j = i - 1; j >= 0 && arr[j] > currentValue; j--) {
            arr[j+1] = arr[j];
        }
        arr[j+1] = currentValue;
    }
    return arr;
}

console.log(InsertionSort([2,1,5,777,22,45,12]))