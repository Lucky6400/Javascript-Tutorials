/** Time Complexity --> O(nlogn) 
 *  Space Complexity --> O(logn)
 */
function QuickSort(arr, left = 0, right = arr.length - 1) {

    if (left < right) {

        let pivotIndex = pivot(arr, left, right);

        //left
        QuickSort(arr, left, pivotIndex - 1);

        //right
        QuickSort(arr, pivotIndex + 1, right);
    }

    return arr;

}

console.log(QuickSort([4, 8, 2, 1, 5, 7, 6, 3]));

function pivot(array, start = 0, end = array.length + 1) {
    let pivot = array[start];
    let swapIndex = start;

    for (let i = start + 1; i <= end; i++) {
        if (pivot > array[i]) {
            swapIndex++;
            //swapping
            [array[swapIndex], array[i]] = [array[i], array[swapIndex]];
        }
    }
    //swap start index with pivot index
    [array[start], array[swapIndex]] = [array[swapIndex], array[start]];
    return swapIndex;
}