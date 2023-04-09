/**
 * Time complexity ==> O(nlogn) (all three cases)
 * Space complexity ==> O(n)
 */
function MergeSort(arr) {
    if (arr.length <= 1) return arr;
    let mid = Math.floor(arr.length / 2);

    // splitting the array into halves
    let left = MergeSort(arr.slice(0, mid));
    let right = MergeSort(arr.slice(mid));
    console.log(left, right);
    /*
    Outputs of above log
    [ 3 ] [ 7 ]
    [ 4 ] [ 3, 7 ]
    [ 1 ] [ 12 ]
    [ 5 ] [ 1, 12 ]
    [ 3, 4, 7 ] [ 1, 5, 12 ]
    */

    return mergeArrays(left, right);
};

//merging arrays
function mergeArrays(arr1, arr2) {
    let results = [];
    let i = 0;
    let j = 0;

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] > arr2[j]) {
            results.push(arr2[j]);
            j++;
        } else {
            results.push(arr1[i]);
            i++;
        }
    }
    while (i < arr1.length) {
        results.push(arr1[i]);
        i++;
    }
    while (j < arr2.length) {
        results.push(arr2[j]);
        j++;
    }
    return results;
}

console.log(MergeSort([4, 3, 7, 5, 1, 12, 1, 1, 2, 2, 4, 76, 54]));