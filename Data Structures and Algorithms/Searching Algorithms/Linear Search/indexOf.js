/** write a function that will find the index of the given value inside an array
 * @param arr the array to search in
 * @param value the value to search for
*/
function linearSearch(arr, value) {
    let i = 0;
    while(i < arr.length) {
        if(arr[i] === value) {
            return i;
        } else i++;
    }
    return -1;
}

console.log(linearSearch(['a', 'b', 'c'], 'b'))

/*
In the best case, the bigO of this algorithm is O(1) assuming we got the value right away.
In the worst case, the bigO of this algorithm is O(n) as we might have to go through entire array also.
*/