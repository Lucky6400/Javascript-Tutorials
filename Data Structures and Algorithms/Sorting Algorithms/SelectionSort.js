/** 
 * Select the smallest value and insert it at the beginning.
 * O(n^2) time complexity
 */
function SelectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let lowest = i;
        for (let j = i + 1; j < arr.length; j++) {
            //console.log(i,j);
            if (arr[j] < arr[lowest]) {
                lowest = j;
            }
        };
        let temp = arr[i];
        arr[i] = arr[lowest];
        arr[lowest] = temp;
    }
    return arr;
}

console.log(SelectionSort([45, 3, 23, 111, 25, 57]))