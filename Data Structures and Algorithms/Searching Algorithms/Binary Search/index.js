function binarySearch(arr, val) {
    // add whatever parameters you deem necessary - good luck!
    let start = 0;
    let end = arr.length - 1;

    while (start <= end) {
        let middle = Math.floor((start + end) / 2);
        if (arr[middle] === val) return middle;

        if (val < arr[middle]) {
            end = middle - 1;
        } else if (val > arr[middle]) {
            start = middle + 1;
        }
    }

    return -1
}