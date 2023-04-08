/** The larger values will bubble to the top */

/**
 * Checks current element and next element. if latter is large then swaps the two. 
 * ! This method should NOT be used in interviews!
 * Generally this has O(n^2) time complexity. The best case is O(n) but only when the data is nearly sorted.
 */
function bubbleSort(arr) {
    let swap;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                swap = true;
            }
        }
        if(!swap) break;
    }

    return arr;
}

console.log(bubbleSort([3, 44, 7, 87, 34, 123]))