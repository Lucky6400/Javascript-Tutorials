/**
 * Gradually creates a larger left half.
 * Start by selecting the second element of the array. Swap if necessary.
 */

function InsertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let valueToInsert = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > valueToInsert) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = valueToInsert;
    }
    return arr;
}

console.log(InsertionSort([2, 1, 5, 777, 22, 45, 12]));